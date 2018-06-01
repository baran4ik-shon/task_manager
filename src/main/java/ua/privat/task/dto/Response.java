package ua.privat.task.dto;

import ua.privat.task.domains.Person;

import java.util.Set;

public class Response {

    private int code;
    private String msg;
    private Set<Person> people;

    public Response returnError(Set<Person> busy) {
        setCode(1);
        setMsg("Users are busy");
        setPeople(busy);
        return this;
    }

    public Response returnInternalServerError(Exception e) {
        setCode(2);
        setMsg("Internal server error " + e);
        return this;
    }

    public Response returnOk() {
        setCode(0);
        setMsg("Successfully");
        return this;
    }


    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Set<Person> getPeople() {
        return people;
    }

    public void setPeople(Set<Person> people) {
        this.people = people;
    }

}
