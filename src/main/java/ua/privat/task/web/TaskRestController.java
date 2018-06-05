package ua.privat.task.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import ua.privat.task.domains.Person;
import ua.privat.task.domains.Task;
import ua.privat.task.dto.Response;
import ua.privat.task.service.TaskService;

import javax.servlet.http.HttpServletRequest;
import java.util.Set;

@RestController
@RequestMapping("/tasks")
public class TaskRestController {

    private final TaskService taskService;

    @Autowired
    public TaskRestController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public  Iterable<Task> getAllTasks() {
        return taskService.getAllTasks();
    }


    @GetMapping("people")
    public  Iterable<Person> getAllPeople() {
        return taskService.getAllPeople();
    }

    @PostMapping
    public Response addTask(@RequestBody Task task) {
        try {
            Set<Person> busy = taskService.checkBusy(task);
            if (!busy.isEmpty()) {
                return new Response().returnError(busy);
            }
            taskService.addTask(task);
        }catch (Exception e) {
            return new Response().returnInternalServerError(e);
        }
        return new Response().returnOk();
    }

    @PutMapping({"{id}"})
    public Response updateTask(@PathVariable Long id, @RequestBody Task task) {
        try {
            Set<Person> busy = taskService.checkBusy(task);
            if (!busy.isEmpty()) {
                return new Response().returnError(busy);
            }
            taskService.addTask(task.setId(id));
        }catch (Exception e) {
            return new Response().returnInternalServerError(e);
        }
        return new Response().returnOk();
    }

    @DeleteMapping ("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTask(@PathVariable Long id) {
            taskService.deleteTask(new Task().setId(id));
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAllTasks() {
            taskService.deleteAll();
    }
}
