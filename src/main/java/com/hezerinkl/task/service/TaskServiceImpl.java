package com.hezerinkl.task.service;

import com.hezerinkl.task.domains.Task;
import com.hezerinkl.task.repository.PersonRepository;
import com.hezerinkl.task.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.hezerinkl.task.domains.Person;

import javax.annotation.PostConstruct;
import java.io.UnsupportedEncodingException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;
    private final PersonRepository personRepository;

    @Value("${task.people}")
    private String people;

    @Autowired
    public TaskServiceImpl(TaskRepository taskRepository, PersonRepository personRepository) {
        this.taskRepository = taskRepository;
        this.personRepository = personRepository;
    }

    /**
     *Load the list of participants
     * @throws UnsupportedEncodingException
     */
    @PostConstruct
    private void init() throws UnsupportedEncodingException {
        String[] names = new String(people.getBytes("ISO-8859-1"), "utf-8").split(", ");
        List<Person> people = Arrays.stream(names)
                .map(Person::new)
                .collect(Collectors.toList());
        personRepository.saveAll(people);
    }

    /**
     * Check, person busy at a given time
     * @param task - task with a certain time interval
     * @return String busy people or null if they do not exist
     */
    @Override
    public String checkBusy(Task task) {
        List<Task> tasks;
        if (task.getId() == null) // check update or new task
            tasks = taskRepository.getAllByTimeLine(task.getStartDate(), task.getEndDate());
        else
            tasks = taskRepository.getAllByTimeLineForUpdate(task.getId(), task.getStartDate(), task.getEndDate());
        HashSet<Person> busy = new HashSet<>();
        tasks.forEach(t ->
                t.getPerson().forEach(person -> {
                    task.getPerson().forEach(p -> {
                        if (p.getId().equals(person.getId()))
                            busy.add(person);
                    });
                }));
        if (!busy.isEmpty()) {
            StringBuilder sb = new StringBuilder();
            busy.forEach(p -> sb.append(p.getfName()).append(", "));
            if (busy.size() >1)
                return sb.toString() + " - участвуют в других задачах в данный промежуток времени";
            else return sb.toString() + " - участвует в других задачах в данный промежуток времени";
        }
        return null;
    }

    @Override
    public void addTask(Task task) {
        taskRepository.save(task);
    }

    @Override
    public Iterable<Task> getAllTasks() {
        return taskRepository.getAllOrderByStartDate();
    }

    @Override
    public void deleteTask(Task task) {
        taskRepository.delete(task);
    }

    @Override
    public void deleteAll() {
        taskRepository.deleteAll();
    }

    @Override
    public Iterable<Person> getAllPeople() {
       return personRepository.findAll();
    }

    @Override
    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }
}
