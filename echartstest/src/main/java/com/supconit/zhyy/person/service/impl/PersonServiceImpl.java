package com.supconit.zhyy.person.service.impl;


import com.supconit.zhyy.person.dao.PersonDao;
import com.supconit.zhyy.person.model.Person;
import com.supconit.zhyy.person.model.QueryCondition;
import com.supconit.zhyy.person.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @author yejianping
 * @date 2018/1/16 16:01
 */
@Service
public class PersonServiceImpl implements PersonService {

    @Autowired
    private PersonDao personDao;

    @Override
    public void savePeson(Person person) {
        personDao.savePeson(person);
    }

    @Override
    public void updatePerson(Person person) {
        personDao.updatePerson(person);
    }

    @Override
    public Person getPersonById(int personId) {
        return personDao.getPersonById(personId);
    }

    @Override
    public void deletePerson(int personId) {
        personDao.deletePerson(personId);
    }

    @Override
    public void deleteBatch(Map<String, Object> map) {
        personDao.deleteBatch(map);
    }

    @Override
    public List<Person> selectPersonByCondition(QueryCondition qc) {
        return personDao.selectPersonByCondition(qc);
    }


}
