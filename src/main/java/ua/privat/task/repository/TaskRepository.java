package ua.privat.task.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ua.privat.task.domains.Person;
import ua.privat.task.domains.Task;

@Repository
public interface TaskRepository extends CrudRepository<Task, Person> {
}
