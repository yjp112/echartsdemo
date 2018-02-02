package com.supconit.zhyy.echarts.services;

import com.supconit.zhyy.echarts.entities.EchartsData;


/**
 * @author yejianping
 * @date 2018/1/10 13:52
 */
public interface EchartsService {
    EchartsData getData(Integer year, Integer month, Integer day, String areaCode);
}
