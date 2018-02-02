package com.supconit.zhyy.person.service;


import com.supconit.zhyy.person.model.Person;
import com.supconit.zhyy.person.model.QueryCondition;

import java.util.List;
import java.util.Map;

/**
 * @author yejianping
 * @date 2018/1/16 16:01
 */
public interface PersonService {

    /**
     * 保存
     *
     * @param person person
     */
    void savePeson(Person person);

    /**
     * 更新
     *
     * @param person person
     */
    void updatePerson(Person person);

    /**
     * 根据id查询
     *
     * @param personId personId
     * @return Person Person
     */
    Person getPersonById(int personId);

    /**
     * 删除
     *
     * @param personId personId
     */
    void deletePerson(int personId);

    /**
     * 批量删除
     *
     * @param map map
     */
    void deleteBatch(Map<String, Object> map);

    /**
     * 根据条件查询
     *
     * @param qc qc
     * @return List<Person>
     */
    List<Person> selectPersonByCondition(QueryCondition qc);

}
