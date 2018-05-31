package ua.privat.task.repository;

import org.springframework.data.repository.CrudRepository;
import ua.privat.task.domains.Person;

import java.time.LocalDate;

public interface PersonRepository extends CrudRepository <Person, LocalDate> {
}
