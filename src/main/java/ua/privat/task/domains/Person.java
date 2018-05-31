package ua.privat.task.domains;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
public class Person {
    @Id @GeneratedValue
    @Column(name = "person_id")
    private Long id;
    @Column(name = "fname")
    private String fName;

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public Person(String fName) {
        this.fName = fName;
    }

    public Long getId() {
        return id;
    }

    public Person setId(Long id) {
        this.id = id; return this;
    }

    public Person() {
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", fName='" + fName + '\'' +
                '}';
    }
}
