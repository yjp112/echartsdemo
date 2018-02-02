package com.supconit.zhyy.person.dao.impl;


import com.supconit.zhyy.person.dao.PersonDao;
import com.supconit.zhyy.person.model.Person;
import com.supconit.zhyy.person.model.QueryCondition;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @author yejianping
 * @date 2018/1/16 16:01
 */
@Repository
public class PersonDaoImpl extends SqlSessionDaoSupport implements PersonDao {

    private static final String ns = "com.person.shaye.mapper.PersonMapper.";

    @Override
    public void savePeson(Person person) {
        getSqlSession().insert(ns + "insert", person);
    }

    @Override
    public void updatePerson(Person person) {
        getSqlSession().update(ns + "dynamicUpdate", person);
    }

    @Override
    public Person getPersonById(int personId) {
        return (Person) this.getSqlSession().selectOne(ns + "selectPersonById",
                personId);
    }

    @Override
    public void deletePerson(int personId) {
        this.getSqlSession().delete(ns + "delete", personId);
    }

    @Override
    public List<Person> selectPersonByCondition(QueryCondition qc) {
        return getSqlSession().selectList(ns + "selectPersonByCondition",
                qc);
    }

    @Override
    public void deleteBatch(Map<String, Object> map) {
        getSqlSession().delete(ns + "deleteBatch", map);
    }

}
