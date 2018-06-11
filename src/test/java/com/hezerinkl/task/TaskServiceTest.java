package com.hezerinkl.task;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import com.hezerinkl.task.domains.Person;
import com.hezerinkl.task.domains.Task;
import com.hezerinkl.task.repository.PersonRepository;
import com.hezerinkl.task.repository.TaskRepository;
import com.hezerinkl.task.service.TaskService;

import java.io.UnsupportedEncodingException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@DataJpaTest
@SpringBootTest
public class TaskServiceTest {

    @MockBean
    TaskService taskService;
    @Autowired
    PersonRepository personRepository;
    @Autowired
    private TaskRepository taskRepository;
    @Value("${task.people}")
    private String people;
    private List<Person> personList;

    @Before
    public void init() throws UnsupportedEncodingException {
        personList = Arrays.stream(new String(people.getBytes("ISO-8859-1"), "utf-8").split(", "))
                .map(Person::new)
                .collect(Collectors.toList());
        personRepository.saveAll(personList);
    }

    @Test
    public void initTest() {
        Iterable<Person> findPeople = personRepository.findAll();
        assertEquals(findPeople.spliterator().estimateSize(), personList.size());
    }

    @Test
    public void getAllByTimeLine() {
        List<Task> tasks = new ArrayList<>();

        Task task = new Task();
        task.setTaskName("task 1");
        task.setStartDate(LocalDate.of(2018,5,3));
        task.setEndDate(LocalDate.of(2018,5,7));
        task.setPerson(Arrays.asList(new Person().setId(1L), new Person().setId(3L)));
        tasks.add(task);

        Task task2 = new Task();
        task2.setTaskName("task 2");
        task2.setStartDate(LocalDate.of(2018,4,3));
        task2.setEndDate(LocalDate.of(2018,4,17));
        task2.setPerson(Arrays.asList(new Person().setId(1L),new Person().setId(2L), new Person().setId(3L)));
        tasks.add(task2);

        Task task3 = new Task();
        task3.setTaskName("task 3");
        task3.setStartDate(LocalDate.of(2018,6,3));
        task3.setEndDate(LocalDate.of(2018,6,5));
        task3.setPerson(Arrays.asList(new Person().setId(1L)));
        tasks.add(task3);

        Task task4 = new Task();
        task4.setTaskName("task 4");
        task4.setStartDate(LocalDate.of(2018,5,23));
        task4.setEndDate(LocalDate.of(2018,6,20));
        task4.setPerson(Arrays.asList(new Person().setId(2L),new Person().setId(4L)));
        tasks.add(task4);

        taskRepository.saveAll(tasks);

        List<Task> found = taskRepository.getAllByTimeLine(LocalDate.of(2017, 4, 3), LocalDate.of(2018, 5, 3));
        assertEquals(found.size(), 2);
    }
}
