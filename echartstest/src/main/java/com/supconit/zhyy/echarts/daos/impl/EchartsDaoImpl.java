package com.supconit.zhyy.echarts.daos.impl;

import com.supconit.zhyy.echarts.daos.EchartsDao;
import com.supconit.zhyy.echarts.entities.EchartsData;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author yejianping
 * @date 2018/1/10 13:52
 */
@Repository
public class EchartsDaoImpl extends SqlSessionDaoSupport implements EchartsDao {
    //private static final String NAMESPACE = EchartsData.class.getName();

    private static final String NAMESPACE = "com.supconit.zhyy.echarts.mapper.EchartsDataMapper.";


    /**
     * 统计分析--按年 yyyy
     *
     * @param year
     * @param areaCode
     * @return
     */
    @Override
    public List<EchartsData> getDataByYear(Integer year, String areaCode) {
        List<EchartsData>  list = getSqlSession().selectList("getDataByYear",null);
        return list;
        /*Map<String, Object> para = assembleParam(year, null, null, areaCode);
        //return selectList("getDataByYear", para);
        return getSqlSession().selectList(NAMESPACE + "getDataByYear", para);*/

    }

    /**
     * 统计分析--按月 yyyy-MM
     *
     * @param year
     * @param month
     * @param areaCode
     * @return
     */
    @Override
    public List<EchartsData> getDataByMonth(Integer year, Integer month, String areaCode) {
        Map<String, Object> para = assembleParam(year, month, null, areaCode);
        // return selectList("getDataByMonth", para);
        return getSqlSession().selectList(NAMESPACE + "getDataByMonth", para);
    }

    /**
     * 统计分析--按日 yyyy-MM-dd
     *
     * @param year
     * @param month
     * @param day
     * @param areaCode
     * @return
     */
    @Override
    public List<EchartsData> getDataByDay(Integer year, Integer month, Integer day, String areaCode) {
        Map<String, Object> para = assembleParam(year, month, day, areaCode);
        //return selectList("getDataByDay", para);
        return getSqlSession().selectList(NAMESPACE + "getDataByDay", para);
    }


    private Map<String, Object> assembleParam(Integer year, Integer month, Integer day, String areaCode) {
        String yearStr = year + "";
        if (month != null) {
            if (month < 10) {
                yearStr += "-0" + month;
            } else {
                yearStr += "-" + month;
            }
            if (day != null && day < 10) {
                yearStr += "-0" + day;
            } else if (day != null && day >= 10) {
                yearStr += "-" + day;
            }
        }
        Map<String, Object> para = new HashMap<String, Object>(16);
        para.put("year", yearStr);
        para.put("areaCode", areaCode);
        return para;
    }


}
