package ua.privat.task.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ua.privat.task.domains.Person;
import ua.privat.task.domains.Task;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface TaskRepository extends CrudRepository<Task, Person> {
    @Query(nativeQuery = true, value = "SELECT * FROM Task WHERE  end_date between to_date(:startDate,'yyyy.mm.dd') and to_date(:endDate,'yyyy.mm.dd')")
    List<Task> getAllByTimeLine(@Param("startDate") LocalDate startDate, @Param("endDate")LocalDate endDate);
}
