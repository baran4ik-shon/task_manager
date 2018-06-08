package com.hezerinkl.task.web;

import com.hezerinkl.task.exception.DateException;
import com.hezerinkl.task.exception.PersonBusyException;
import com.hezerinkl.task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.hezerinkl.task.domains.Person;
import com.hezerinkl.task.domains.Task;

import java.util.Optional;

@RestController
@RequestMapping("/tasks")
public class TaskRestController {

    private final TaskService taskService;

    @Autowired
    public TaskRestController(TaskService taskService) {
        this.taskService = taskService;
    }


    @GetMapping
    public  Iterable<Task> getAllTasks() {
        return taskService.getAllTasks();
    }


    @GetMapping("{id}")
    public Optional<Task> getTaskById(@PathVariable Long id) {
        return taskService.getTaskById(id);
    }


    @GetMapping("people")
    public  Iterable<Person> getAllPeople() {
        return taskService.getAllPeople();
    }


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void addTask(@RequestBody Task task) {
        if(task.getStartDate().isAfter(task.getEndDate()))
        throw new DateException("Дата начала не должна быть меньше даты окончания");
        String busy = taskService.checkBusy(task);
            if (busy != null) {
                throw new PersonBusyException(busy);
            }
            taskService.addTask(task);
    }


    @PutMapping({"{id}"})
    @ResponseStatus(HttpStatus.CREATED)
    public void updateTask(@PathVariable Long id, @RequestBody Task task) {
        if(task.getStartDate().isAfter(task.getEndDate()))
            throw new DateException("Дата начала не должна быть меньше даты окончания");
        String busy = taskService.checkBusy(task);
        if (busy != null) {
            throw new PersonBusyException(busy);
        }
            taskService.addTask(task.setId(id));
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
