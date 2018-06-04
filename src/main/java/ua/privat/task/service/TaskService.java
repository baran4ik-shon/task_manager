package ua.privat.task.service;

import ua.privat.task.domains.Person;
import ua.privat.task.domains.Task;

import java.util.Set;

public interface TaskService {

   void addTask(Task task);

   Iterable<Task> getAllTasks();

   void deleteTask(Task task);

   void deleteAll();

   Set<Person> checkBusy(Task task);

   Iterable<Person> getAllPeople();

}
