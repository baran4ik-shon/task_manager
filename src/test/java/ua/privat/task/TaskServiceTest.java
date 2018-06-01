package ua.privat.task;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import ua.privat.task.domains.Person;
import ua.privat.task.repository.PersonRepository;
import ua.privat.task.service.TaskService;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@DataJpaTest
@SpringBootTest
public class TaskServiceTest {

    @MockBean
    TaskService taskService;
    @Autowired
    PersonRepository personRepository;
    @Value("${task.people}")
    private String people;

    @Before
    public void init() throws UnsupportedEncodingException {
        String [] names = new String(people.getBytes("ISO-8859-1"), "utf-8").split(", ");
        List<Person> people = new ArrayList<>();
        Arrays.stream(names).forEach(name -> people.add(new Person(name)));
        personRepository.saveAll(people);
    }

    @Test
    public void initTest() throws UnsupportedEncodingException {
        Optional<Person> person = personRepository.findById(1L);
        String [] names = new String(people.getBytes("ISO-8859-1"), "utf-8").split(", ");
        assertEquals(names[0], person.get().getfName());
    }
}
