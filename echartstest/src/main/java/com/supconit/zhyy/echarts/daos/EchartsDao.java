package com.supconit.zhyy.echarts.daos;

import com.supconit.zhyy.echarts.entities.EchartsData;

import java.util.List;

/**
 * @author yejianping
 * @date 2018/1/10 13:52
 */
public interface EchartsDao {
    /**
     * 统计分析--按年 yyyy
     *
     * @param year
     * @param areaCode
     * @return
     */
    List<EchartsData> getDataByYear(Integer year, String areaCode);

    /**
     * 统计分析--按月 yyyy-MM
     *
     * @param year
     * @param month
     * @param areaCode
     * @return
     */
    List<EchartsData> getDataByMonth(Integer year, Integer month, String areaCode);

    /**
     * 统计分析--按日 yyyy-MM-dd
     *
     * @param year
     * @param month
     * @param day
     * @param areaCode
     * @return
     */
    List<EchartsData> getDataByDay(Integer year, Integer month, Integer day, String areaCode);
}
