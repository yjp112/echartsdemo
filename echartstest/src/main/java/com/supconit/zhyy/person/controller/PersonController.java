package com.supconit.zhyy.person.controller;


import com.supconit.zhyy.person.model.Person;
import com.supconit.zhyy.person.model.QueryCondition;
import com.supconit.zhyy.person.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author yejianping
 * @date 2018/1/16 16:01
 */
@Controller
@RequestMapping("/person")
public class PersonController {

    @Autowired
    private PersonService personService;

    @RequestMapping("/toAdd.do")
    public String toAdd() {
        return "add";
    }

    @RequestMapping("/add.do")
    public String add(Person person) {
        personService.savePeson(person);
        return "redirect:listPerson.do";
    }

    @RequestMapping("/getPersonById.do")
    public String getPersonById(Integer personId, Model model) {
        model.addAttribute("person", personService.getPersonById(personId));
        return "update";
    }

    @RequestMapping("/update.do")
    public String update(Person person) {
        personService.updatePerson(person);
        return "redirect:listPerson.do";
    }

    @RequestMapping("/delete.do")
    public String delete(Integer personId) {
        personService.deletePerson(personId);
        return "redirect:listPerson.do";
    }

    @RequestMapping("/listPerson.do")
    public String listPerson(QueryCondition qc, Model model) {
        List<Person> pList = personService.selectPersonByCondition(qc);
        model.addAttribute("pList", pList);
        model.addAttribute("qc", qc);
        return "list";
    }

    /**
     * 用于处理页面传递过来的日期格式
     *
     * @param binder binder
     */
    @InitBinder
    public void initBinder(ServletRequestDataBinder binder) {
        binder.registerCustomEditor(Date.class, new CustomDateEditor(
                new SimpleDateFormat("yyyy-MM-dd"), true));
    }


    /**
     * 批量删除
     *
     * @param ids ids
     * @return 重定向list
     */
    @RequestMapping("/deleteBatch.do")
    public String deleteBatch(String ids) {
        String[] idsStr = {};
        Map<String, Object> map = new HashMap<>(16);
        if (ids != null && !"".equals(ids)) {
            idsStr = ids.split(",");
        }
        map.put("ids", idsStr);
        personService.deleteBatch(map);
        return "redirect:listPerson.do";
    }

}
