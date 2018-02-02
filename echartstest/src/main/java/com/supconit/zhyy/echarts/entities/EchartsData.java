package com.supconit.zhyy.echarts.entities;

import java.io.Serializable;
import java.util.List;

/**
 * @author yejianping
 * @date 2018/1/10 16:00
 */
public class EchartsData implements Serializable {

    /**
     * 统计纬度
     */
    private String[] legendData;

    /**
     * x轴数据
     */
    private String[] xxAxisData;

    /**
     * y轴数据
     */
    private List<YAxis> yyAxisData;

    /**
     * 统计结果数据
     */
    private List<Series> seriesData;

    /**
     * x轴显示格式化
     */
    private String xformat;

    /**
     * X轴上的刻度(例如 1月 2月 3月...)
     */
    private String xKey;

    /**
     * 结果值
     */
    private Double result;


    public EchartsData() {
    }

    public EchartsData(String[] legendData, String[] xxAxisData) {
        this.legendData = legendData;
        this.xxAxisData = xxAxisData;
    }

    public String[] getLegendData() {
        return legendData;
    }

    public void setLegendData(String[] legendData) {
        this.legendData = legendData;
    }

    public String[] getXxAxisData() {
        return xxAxisData;
    }

    public void setXxAxisData(String[] xxAxisData) {
        this.xxAxisData = xxAxisData;
    }

    public List<YAxis> getYyAxisData() {
        return yyAxisData;
    }

    public void setYyAxisData(List<YAxis> yyAxisData) {
        this.yyAxisData = yyAxisData;
    }

    public List<Series> getSeriesData() {
        return seriesData;
    }

    public void setSeriesData(List<Series> seriesData) {
        this.seriesData = seriesData;
    }

    public String getXformat() {
        return xformat;
    }

    public void setXformat(String xformat) {
        this.xformat = xformat;
    }

    public String getxKey() {
        return xKey;
    }

    public void setxKey(String xKey) {
        this.xKey = xKey;
    }

    public Double getResult() {
        return result;
    }

    public void setResult(Double result) {
        this.result = result;
    }
}
