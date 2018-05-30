package ua.privat.task.domains;

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

    public void setId(Long id) {
        this.id = id;
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
