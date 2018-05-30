package ua.privat.task.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ua.privat.task.domains.Person;
import ua.privat.task.domains.Task;
import ua.privat.task.service.TaskService;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public boolean addTask() {
        try {
            Task task = new Task();
            task.setName("Execute");
            task.setStartDate(LocalDate.now());
            List<Person> people = new ArrayList<>();
            people.add(new Person("Roman"));
            task.setPerson(people);
            taskService.addTask(task);
        }catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public boolean addTasks(@RequestBody Task task) {
        try {
            taskService.addTask(task);
        }catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    @GetMapping
    public  Iterable<Task> getAllTasks() {
        return taskService.getAllTask();
    }

    @PutMapping({"{id}"})
    public boolean updateTask(@PathVariable Long id, @RequestBody Task task) {
        System.out.print(task);
        try {
            taskService.addTask(task.setId(id));
        }catch (Exception e) {
            return false;
        }
        return true;
    }

    @DeleteMapping ("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean deleteTask(@PathVariable Long id) {
        System.out.print(id);
        try {
            taskService.deleteTask(new Task().setId(id));
        }catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean deleteAllTask() {
        try {
            taskService.deleteAll();
        }catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }
}
