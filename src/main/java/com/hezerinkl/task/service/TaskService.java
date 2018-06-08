package com.hezerinkl.task.service;

import com.hezerinkl.task.domains.Person;
import com.hezerinkl.task.domains.Task;

import java.util.Optional;

public interface TaskService {

   void addTask(Task task);

   Iterable<Task> getAllTasks();

   void deleteTask(Task task);

   void deleteAll();

   String checkBusy(Task task);

   Iterable<Person> getAllPeople();

   Optional<Task> getTaskById(Long id);

}
