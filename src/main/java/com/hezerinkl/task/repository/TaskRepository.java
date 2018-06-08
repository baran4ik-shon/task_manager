package com.hezerinkl.task.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.hezerinkl.task.domains.Task;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM Task WHERE start_date <= to_date(:startDate,'yyyy-mm-dd') " +
            "and end_date >= to_date(:startDate,'yyyy-mm-dd') " +
            "or start_date between to_date(:startDate,'yyyy.mm.dd') and to_date(:endDate,'yyyy.mm.dd')")
    List<Task> getAllByTimeLine(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);

    @Query(nativeQuery = true, value = "SELECT * FROM Task WHERE start_date <= to_date(:startDate,'yyyy-mm-dd') " +
            "and end_date >= to_date(:startDate,'yyyy-mm-dd') and task_id != :id " +
            "or start_date between to_date(:startDate,'yyyy.mm.dd') and to_date(:endDate,'yyyy.mm.dd') and task_id != :id")
    List<Task> getAllByTimeLineForUpdate(@Param("id") Long id, @Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);

    @Query("SELECT  t from Task t order by t.startDate")
    List<Task> getAllOrderByStartDate();

    Optional<Task> findById(Long id);
}
