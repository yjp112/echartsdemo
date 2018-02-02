package com.supconit.zhyy.person.model;

import java.util.Date;

/**
 * @author yejianping
 * @date 2018/1/16 16:01
 */
public class QueryCondition {

    private Integer gender;
    private Date birthday;
    private String name;
    private String personAddr;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPersonAddr() {
        return personAddr;
    }

    public void setPersonAddr(String personAddr) {
        this.personAddr = personAddr;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    @Override
    public String toString() {
        return "QueryCondition [gender=" + gender + ", birthday=" + birthday
                + ", name=" + name + ", personAddr=" + personAddr + "]";
    }

}
