package ua.privat.task.service;

import ua.privat.task.domains.Task;

public interface TaskService {
   void addTask(Task task);
   Iterable<Task> getAllTask();
   void deleteTask(Task task);
   void deleteAll();
}
