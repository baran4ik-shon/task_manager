package ua.privat.task.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.privat.task.domains.Task;
import ua.privat.task.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;

    @Autowired
    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public void addTask(Task task) {
        taskRepository.save(task);
    }

    @Override
    public Iterable<Task> getAllTask() {
        return taskRepository.findAll();
    }

    @Override
    public void deleteTask(Task task) {
        taskRepository.delete(task);
    }

    @Override
    public void deleteAll() {
        taskRepository.deleteAll();
    }
}
