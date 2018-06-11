package com.hezerinkl.task;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import com.hezerinkl.task.domains.Person;
import com.hezerinkl.task.domains.Task;
import com.hezerinkl.task.repository.PersonRepository;
import com.hezerinkl.task.repository.TaskRepository;

import java.time.LocalDate;
import java.util.Collections;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@DataJpaTest
@SpringBootTest
public class TaskRepositoryTest {

    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    PersonRepository personRepository;

    @Before
    public void init() {
        personRepository.save(new Person("Roman"));
    }

    @Test
    public void whenFindByTimeId() {
        // given
        Task task = new Task();
        task.setTaskName("Test");
        task.setPerson(Collections.singletonList(new Person(1L, "Роман")));
        task.setStartDate(LocalDate.of(2018, 5, 14));
        task.setEndDate(LocalDate.of(2018, 5, 25));
        // save
        taskRepository.save(task);
        // when
        Task task1 = taskRepository.findById(task.getId()).get();
        assertEquals(task1.getTaskName(), task.getTaskName());
        assertEquals(task1.getStartDate(), task.getStartDate());
        assertEquals(task1.getPerson(), task.getPerson());
    }
}
