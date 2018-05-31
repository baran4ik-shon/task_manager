package ua.privat.task.service;

import ua.privat.task.domains.Task;

import java.time.LocalDate;
import java.util.List;

public interface TaskService {

   void addTask(Task task);

   Iterable<Task> getAllTask();

   void deleteTask(Task task);

   void deleteAll();

   List<Task> getPersonByTimeLine(LocalDate startDate, LocalDate endDate);

}
