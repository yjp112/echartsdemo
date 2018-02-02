package com.supconit.zhyy.person.model;

import java.io.Serializable;
import java.util.Date;

/**
 * 在数据库中一个列名可以由多个单词构成 数据库的规范：deli_addr,多个单词用"_"来分隔
 * java代码中规范：deliAddr,多个单词使用驼峰模式标识
 *
 * @author yejianping
 * @date 2018/1/16 16:01
 */
public class Person implements Serializable {

    private static final long serialVersionUID = 3389211125500404254L;
    private Integer personId;
    private String name;
    private Integer gender;
    private String personAddr;
    private Date birthday;


    public Integer getPersonId() {
        return personId;
    }

    public void setPersonId(Integer personId) {
        this.personId = personId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public String getPersonAddr() {
        return personAddr;
    }

    public void setPersonAddr(String personAddr) {
        this.personAddr = personAddr;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    @Override
    public String toString() {
        return "Person [personId=" + personId + ", name=" + name + ", gender="
                + gender + ", personAddr=" + personAddr + ", birthday="
                + birthday + "]";
    }

}
