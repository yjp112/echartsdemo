package com.supconit.zhyy.echarts.entities;


/**
 * @author yejianping
 * @date 2018/1/10 13:52
 */
public class Series {
    /**
     * 名称
     */
    private String name;
    /**
     * 分类栈
     */
    private String stack;
    /**
     * 类型:bar、line等
     */
    private String type;
    /**
     * 统计结果
     */
    private Double[] data;
    /**
     * 对应哪条Y轴(左:0,右:1)
     */
    private Integer yAxisIndex;
    /**
     * 仪表盘 低
     */
    private String low;
    /**
     * 仪表盘 中
     */
    private String mid;
    /**
     * 仪表盘 高
     */
    private String high;

    public Series() {
    }

    public Series(String name, Double[] data) {
        this.name = name;
        this.data = data;
    }

    public Series(Double[] data, String name, String low, String mid, String high) {
        this.data = data;
        this.name = name;
        this.low = low;
        this.mid = mid;
        this.high = high;
    }

    public Series(String name, String type, Integer yAxisIndex, Double[] data) {
        this.name = name;
        this.type = type;
        this.yAxisIndex = yAxisIndex;
        this.data = data;
    }

    public Series(String name, String type, Integer yAxisIndex, String stack, Double[] data) {
        this.name = name;
        this.type = type;
        this.yAxisIndex = yAxisIndex;
        this.stack = stack;
        this.data = data;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStack() {
        return stack;
    }

    public void setStack(String stack) {
        this.stack = stack;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Double[] getData() {
        return data;
    }

    public void setData(Double[] data) {
        this.data = data;
    }

    public Integer getYAxisIndex() {
        return yAxisIndex;
    }

    public void setYAxisIndex(Integer yAxisIndex) {
        this.yAxisIndex = yAxisIndex;
    }

    public String getLow() {
        return low;
    }

    public void setLow(String low) {
        this.low = low;
    }

    public String getMid() {
        return mid;
    }

    public void setMid(String mid) {
        this.mid = mid;
    }

    public String getHigh() {
        return high;
    }

    public void setHigh(String high) {
        this.high = high;
    }
}
