package com.hezerinkl.task.domains;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Task {

    @Id @GeneratedValue
    @Column(name = "task_id")
    private Long id;
    @JsonProperty("taskName")
    @Column(name = "task_name")
    private String taskName;
    @Column(name = "start_date")
    private LocalDate startDate;
    @Column(name = "end_date")
    private LocalDate endDate;
    @ManyToMany(cascade = {CascadeType.REFRESH})
    private List<Person> person;

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public List<Person> getPerson() {
        return person;
    }

    public void setPerson(List<Person> person) {
        this.person = person;
    }

    public Long getId() {
        return id;
    }

    public Task setId(Long id) {
        this.id = id;
        return this;
    }

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", name='" + taskName + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", person=" + person +
                '}';
    }
}
