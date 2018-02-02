package com.supconit.zhyy.echarts.entities;

/**
 * @author yejianping
 * @date 2018/1/10 13:52
 */
public class YAxis {
    /**
     * 名称
     */
    private String name;
    /**
     * 单位
     */
    private String unit;
    /**
     * y轴数据格式化
     */
    private String yformat;

    public YAxis() {
    }

    public YAxis(String name, String unit) {
        this.name = name;
        this.unit = unit;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getYformat() {
        return yformat;
    }

    public void setYformat(String yformat) {
        this.yformat = yformat;
    }
}
