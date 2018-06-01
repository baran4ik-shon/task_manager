package ua.privat.task.domains;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

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
    public Person(Long id, String fName) {
        this.fName = fName;
        this.id = id;
    }
    public Long getId() {
        return id;
    }
    public Person setId(Long id) {
        this.id = id; return this;
    }
    public Person() {
    }

    public Person(String fName) {
        this.fName = fName;
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", fName='" + fName + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return Objects.equals(id, person.id) &&
                Objects.equals(fName, person.fName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, fName);
    }
}
