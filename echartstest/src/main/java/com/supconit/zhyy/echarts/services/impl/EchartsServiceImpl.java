package com.supconit.zhyy.echarts.services.impl;

import com.supconit.zhyy.echarts.daos.EchartsDao;
import com.supconit.zhyy.echarts.entities.EchartsData;
import com.supconit.zhyy.echarts.entities.Series;
import com.supconit.zhyy.echarts.entities.YAxis;
import com.supconit.zhyy.echarts.services.EchartsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @author yejianping
 * @date 2018/1/10 13:52
 */
@Service
public class EchartsServiceImpl implements EchartsService {

    @Autowired
    private EchartsDao echartsDao;


    @Override
    public EchartsData getData(Integer year, Integer month, Integer day, String areaCode) {
        String[] legendData = {"上一年同期", "当年", "同比增长率"};
        List<YAxis> yAxisList = new ArrayList<>();
        yAxisList.add(new YAxis("流量", "万吨"));
        yAxisList.add(new YAxis("增长率", "%"));
        if (month == null) {
            return getDataByYear(year, areaCode, legendData, yAxisList);
        } else if (day == null) {
            return getDataByMonth(year, month, areaCode, legendData, yAxisList);
        } else {
            return getDataByDay(year, month, day, areaCode, legendData, yAxisList);
        }
    }

    //-------------------------统计一年的每个月-----------start--------------------------------------------------------------------

    private static String[] xAxisMonthTemp = {"01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"};

    /**
     * x轴数据，年度分析月
     */
    private static String[] xAxisMonthData = {"1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"};


    /**
     * 按年份查询 yyyy
     *
     * @param year
     * @param areaCode
     * @param legendData
     * @param yAxisList
     * @return
     */
    public EchartsData getDataByYear(Integer year, String areaCode, String[] legendData, List<YAxis> yAxisList) {
        //得到Y轴数据
        EchartsData result = new EchartsData(legendData, xAxisMonthData);// xAxisMonthData ={"1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"};
        result.setYyAxisData(yAxisList);

        //得到X轴数据
        //1、上一年同期
        List<EchartsData> lastyearData = echartsDao.getDataByYear((year - 1), areaCode);
        Double[] lastyearFullData = translateMonthKey((year - 1), lastyearData);//没有月份数据补充0 (上一年同期)
        //2、当年
        List<EchartsData> yearData = echartsDao.getDataByYear(year, areaCode);
        Double[] yearFullData = translateMonthKey(year, yearData);//没有月份数据补充0(当年)
        //3、同比增长率
        Double[] percent = new Double[xAxisMonthData.length];
        for (int i = 0; i < xAxisMonthData.length; i++) {
            if (0.00 == yearFullData[i] || 0.00 == lastyearFullData[i]) {
                percent[i] = 0.00;
            } else {
                //保留两位小数
                percent[i] = keepTwoDecimal((yearFullData[i] - lastyearFullData[i]) * 100 / lastyearFullData[i]);
            }
        }

        List<Series> serieses = new ArrayList<>();
        serieses.add(new Series(legendData[0], "bar", 0, yearData(year, lastyearFullData)));//上一年同期
        serieses.add(new Series(legendData[1], "bar", 0, yearData(year, yearFullData)));//当年
        serieses.add(new Series(legendData[2], "line", 1, yearData(year, percent)));//同比增长
        result.setSeriesData(serieses);
        return result;
    }

    /**
     * 保留两位小数
     *
     * @param flowData
     * @return
     */
    public Double keepTwoDecimal(Double flowData) {
        return Double.valueOf(new BigDecimal(flowData).setScale(2, BigDecimal.ROUND_HALF_UP).toString());
    }

    /**
     * 组装年份每月数据
     *
     * @param year
     * @param date
     * @return
     */
    public Double[] yearData(Integer year, Double[] date) {
        int j = Integer.parseInt(new SimpleDateFormat("MM").format(new Date()));
        Double[] newDate = new Double[j];
        if (new SimpleDateFormat("yyyy").format(new Date()).equals(year.toString())) {
            for (int i = 0; i < j; i++) {
                newDate[i] = date[i];
            }
            return newDate;
        } else {
            return date;
        }
    }

    /**
     * 月份数据补充0
     *
     * @param year
     * @param planData
     * @return
     */
    private Double[] translateMonthKey(Integer year, List<EchartsData> planData) {
        Double[] result = new Double[xAxisMonthData.length];
        for (int i = 0; i < xAxisMonthData.length; i++) {
            Double month = 0.00;
            if (!CollectionUtils.isEmpty(planData)) {
                for (EchartsData data : planData) {
                    if ((year + "-" + xAxisMonthTemp[i]).equals(data.getxKey()) && data.getResult() != null) {
                        month = keepTwoDecimal(data.getResult());
                        break;
                    }
                }
            }
            result[i] = month;
        }
        return result;
    }

    //-------------------------统计一年的每个月-----------end--------------------------------------------------------------------

    //-------------------------统计一个月的每天-----------start--------------------------------------------------------------------

    private static String[] xAxisDayData28 = {"1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日", "9日", "10日", "11日", "12日", "13日", "14日", "15日", "16日", "17日", "18日", "19日", "20日", "21日", "22日", "23日", "24日", "25日", "26日", "27日", "28日"};
    private static String[] xAxisDayData29 = {"1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日", "9日", "10日", "11日", "12日", "13日", "14日", "15日", "16日", "17日", "18日", "19日", "20日", "21日", "22日", "23日", "24日", "25日", "26日", "27日", "28日", "29日"};
    private static String[] xAxisDayData30 = {"1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日", "9日", "10日", "11日", "12日", "13日", "14日", "15日", "16日", "17日", "18日", "19日", "20日", "21日", "22日", "23日", "24日", "25日", "26日", "27日", "28日", "29日", "30日"};
    private static String[] xAxisDayData31 = {"1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日", "9日", "10日", "11日", "12日", "13日", "14日", "15日", "16日", "17日", "18日", "19日", "20日", "21日", "22日", "23日", "24日", "25日", "26日", "27日", "28日", "29日", "30日", "31日"};

    /**
     * 按月份查询 yyyy-MM
     *
     * @param year
     * @param month
     * @param areaCode
     * @param legendData
     * @param yAxisList
     * @return
     */
    public EchartsData getDataByMonth(Integer year, Integer month, String areaCode, String[] legendData, List<YAxis> yAxisList) {
        String[] xAxis = {};
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            xAxis = xAxisDayData31;
        } else if (month == 2) {
            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                xAxis = xAxisDayData29;
            } else {
                xAxis = xAxisDayData28;
            }
        } else {
            xAxis = xAxisDayData30;
        }

        //得到Y轴数据
        EchartsData result = new EchartsData(legendData, xAxis);
        result.setYyAxisData(yAxisList);
        //得到X轴数据
        List<EchartsData> lastyearData = echartsDao.getDataByMonth((year - 1), month, areaCode);
        String yearMonthStrPre = assembleTimeStamp(year - 1, month, null);
        Double[] lastyearFullData = translateDayKey(xAxis.length, yearMonthStrPre, lastyearData);//上一年同期  没有月份数据补充0

        List<EchartsData> yearData = echartsDao.getDataByMonth(year, month, areaCode);
        String yearMonthStr = assembleTimeStamp(year, month, null);
        Double[] yearFullData = translateDayKey(xAxis.length, yearMonthStr, yearData);//当年   没有月份数据补充0

        Double[] percent = new Double[xAxis.length];//同比增长
        for (int i = 0; i < xAxis.length; i++) {
            if (0.00 == yearFullData[i] || 0.00 == lastyearFullData[i]) {
                percent[i] = 0.00;
            } else {
                percent[i] = keepTwoDecimal((yearFullData[i] - lastyearFullData[i]) * 100 / lastyearFullData[i]);
            }
        }
        List<Series> serieses = new ArrayList<>();
        serieses.add(new Series(legendData[0], "bar", 0, monthData(yearMonthStr, lastyearFullData)));//上一年同期
        serieses.add(new Series(legendData[1], "bar", 0, monthData(yearMonthStr, yearFullData)));//当年
        serieses.add(new Series(legendData[2], "line", 1, monthData(yearMonthStr, percent)));//同比增长
        result.setSeriesData(serieses);
        return result;
    }

    /**
     * 根据年月日，组装成yyyy-MM-dd格式的时间字符串
     *
     * @param year
     * @param month
     * @param day
     * @return
     */
    private String assembleTimeStamp(Integer year, Integer month, Integer day) {
        String dateStr = year + "";
        if (month < 10) {
            dateStr += "-0" + month;
        } else if (month >= 10) {
            dateStr += "-" + month;
        }
        if (day != null && day < 10) {
            dateStr += "-0" + day;
        } else if (day != null && day > 10) {
            dateStr += "-" + day;
        }
        return dateStr;
    }

    /**
     * 日份数据补充0
     *
     * @param yearMonth
     * @param planData
     * @return
     */
    private Double[] translateDayKey(Integer size, String yearMonth, List<EchartsData> planData) {
        Double[] result = new Double[size];
        for (int i = 0; i < size; i++) {
            Double dayData = 0.00;
            if (!CollectionUtils.isEmpty(planData)) {
                for (EchartsData data : planData) {
                    if (i < 9) {
                        if ((yearMonth + "-0" + (i + 1)).equals(data.getxKey())) {
                            dayData = keepTwoDecimal(data.getResult());
                            break;
                        }
                    } else {
                        if ((yearMonth + "-" + (i + 1)).equals(data.getxKey())) {
                            dayData = keepTwoDecimal(data.getResult());
                            break;
                        }
                    }
                }
            }
            result[i] = dayData;
        }
        return result;
    }

    /**
     * 组装月份每日数据
     *
     * @param yearMonth
     * @param date
     * @return
     */
    public Double[] monthData(String yearMonth, Double[] date) {
        int j = Integer.parseInt(new SimpleDateFormat("dd").format(new Date()));
        Double[] newDate = new Double[j];
        if (new SimpleDateFormat("yyyy-MM").format(new Date()).equals(yearMonth)) {
            for (int i = 0; i < j; i++) {
                newDate[i] = date[i];
            }
            return newDate;
        } else {
            return date;

        }
    }

    //-------------------------统计一个月的每天-----------end--------------------------------------------------------------------
    //-------------------------统计一天的每个小时-----------start--------------------------------------------------------------------
    //x轴数据，日度分析时
    private static String[] xAxisHour = {"1时", "2时", "3时", "4时", "5时", "6时", "7时", "8时", "9时", "10时", "11时", "12时", "13时", "14时", "15时", "16时", "17时", "18时", "19时", "20时", "21时", "22时", "23时", "0时"};

    /**
     * 按日查询 yyyy-MM-dd
     *
     * @param year
     * @param month
     * @param day
     * @param areaCode
     * @param legendData
     * @param yAxisList
     * @return
     */
    //得到X轴数据--根据小时
    private EchartsData getDataByDay(Integer year, Integer month, Integer day, String areaCode, String[] legendData, List<YAxis> yAxisList) {
        EchartsData result = new EchartsData(legendData, xAxisHour);
        result.setYyAxisData(yAxisList);
        List<EchartsData> lastyearData = echartsDao.getDataByDay(year - 1, month, day, areaCode);
        Double[] lastyearFullData = translateHourKey(lastyearData);

        List<EchartsData> yearData = echartsDao.getDataByDay(year, month, day, areaCode);
        Double[] yearFullData = translateHourKey(yearData);

        Double[] percent = new Double[xAxisHour.length];//同比增长
        for (int i = 0; i < xAxisHour.length; i++) {
            if (0.00 == yearFullData[i] || 0.00 == lastyearFullData[i]) {
                percent[i] = 0.00;
            } else {
                percent[i] = keepTwoDecimal((yearFullData[i] - lastyearFullData[i]) * 100 / lastyearFullData[i]);
            }
        }
        List<Series> serieses = new ArrayList<>();
        serieses.add(new Series(legendData[0], "bar", 0, lastyearFullData));//上一年同期
        serieses.add(new Series(legendData[1], "bar", 0, yearFullData));//当年
        serieses.add(new Series(legendData[2], "line", 1, percent));//同比增长
        result.setSeriesData(serieses);
        return result;
    }

    /**
     * 小时数据补充0
     *
     * @param planData
     * @return
     */
    private Double[] translateHourKey(List<EchartsData> planData) {
        Double[] result = new Double[xAxisHour.length];
        for (int i = 0; i < xAxisHour.length; i++) {
            Double hourData = 0.00;
            if (!CollectionUtils.isEmpty(planData)) {
                for (EchartsData data : planData) {
                    if ((i + "").equals(data.getxKey()) && data.getResult() != null) {
                        hourData = keepTwoDecimal(data.getResult());
                        break;
                    }
                }
            }
            result[i] = hourData;
        }
        return result;
    }

    //-------------------------统计一天的每个小时-----------end--------------------------------------------------------------------

}
