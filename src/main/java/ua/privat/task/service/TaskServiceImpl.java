package ua.privat.task.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import ua.privat.task.domains.Person;
import ua.privat.task.domains.Task;
import ua.privat.task.repository.PersonRepository;
import ua.privat.task.repository.TaskRepository;

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

    @PostConstruct
    private void init() throws UnsupportedEncodingException {
        String[] names = new String(people.getBytes("ISO-8859-1"), "utf-8").split(", ");
        List<Person> people = Arrays.stream(names)
                .map(Person::new)
                .collect(Collectors.toList());
        personRepository.saveAll(people);
    }

    @Override
    public Set<Person> checkBusy(Task task) {
        List<Task> tasks = taskRepository.getAllByTimeLine(task.getStartDate(), task.getEndDate());
        HashSet<Person> busy = new HashSet<>();
        tasks.forEach(t -> t.getPerson()
                .forEach(person -> {
                    task.getPerson()
                            .forEach(p -> {
                                if (p.getId().equals(person.getId()))
                                    busy.add(person);
                            });
                }));
        return busy;
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
}
