package com.hezerinkl.task.repository;

import org.springframework.data.repository.CrudRepository;
import com.hezerinkl.task.domains.Person;

public interface PersonRepository extends CrudRepository <Person, Long> {
}
