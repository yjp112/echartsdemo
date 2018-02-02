package com.supconit.zhyy.echarts.utils;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * 日期处理类
 *
 * @author zongkai
 */
public class DateUtil {

    /**
     * yyyy-MM-dd格式
     */
    public static final String DATE_FORMAT_YYYYMMDD = "yyyy-MM-dd";
    /**
     * yyyy-MM-dd HH:mm格式
     */
    public static final String DATE_FORMAT_TIME_R = "yyyy-MM-dd HH:mm";
    /**
     * yyyy-MM-dd HH:mm:ss格式
     */
    public static final String DATE_FORMAT_TIME_T = "yyyy-MM-dd HH:mm:ss";
    /**
     * yyyyMMddHHmmss格式
     */
    public static final String DB_TIME_PATTERN = "yyyyMMddHHmmss";
    public static final String DATE_FORMAT_YYYYMMDD_TWO = "yyyyMMdd";

    public static final String DATE_FORMAT_YYYYMM = "yyyymm";

    /**
     * 格式化日期
     *
     * @param argDate   需要格式化的日期
     * @param argFormat 格式
     * @return
     */
    public static String formatDate(Date argDate, String argFormat) {
        if (argDate == null) {
            return "";
        }

        SimpleDateFormat sdfFrom = null;
        // 结果
        String strResult = null;

        try {
            sdfFrom = new SimpleDateFormat(argFormat);
            strResult = sdfFrom.format(argDate).toString();
        } catch (Exception e) {
            strResult = "";
        } finally {
            sdfFrom = null;
        }

        // 返回格式化后的结果
        return strResult;
    }

    /**
     * 解析日期格式的字符串
     *
     * @param argDateStr 日期格式的字符串
     * @return 解析后的日期
     */
    public static Date formatStringToDate(String argDateStr) {
        return formatStringToDate(argDateStr, null);
    }

    /**
     * 解析日期格式的字符串
     *
     * @param argDateStr 日期格式的字符串
     * @param argFormat  格式
     * @return 解析后的日期
     */
    public static Date formatStringToDate(String argDateStr, String argFormat) {
        if (argDateStr == null || argDateStr.trim().length() < 1) {
            return null;
        }

        // format
        SimpleDateFormat sdfFormat = null;
        // 结果日期
        Date result = null;

        try {
            String strFormat = argFormat;
            if (StringUtil.isNullOrEmpty(strFormat)) {
                strFormat = DATE_FORMAT_YYYYMMDD;
                if (argDateStr.length() > 16) {
                    strFormat = DATE_FORMAT_TIME_T;
                } else if (argDateStr.length() > 10) {
                    strFormat = DATE_FORMAT_TIME_R;
                }
            }
            sdfFormat = new SimpleDateFormat(strFormat);
            result = sdfFormat.parse(argDateStr);
        } catch (Exception e) {
            result = null;
        } finally {
            sdfFormat = null;
        }

        // 返回解析后的日期
        return result;
    }

    /**
     * 比较日期
     *
     * @param argDate1
     * @param argDate2
     * @param argFormat
     * @return
     */
    public static int compare(Date argDate1, Date argDate2, String argFormat) {
        if (argDate1 == null && argDate2 == null) {
            return 0;
        }
        if (argDate1 == null) {
            return -1;
        }
        if (argDate2 == null) {
            return 1;
        }

        String strDate1 = formatDate(argDate1, argFormat);
        String strDate2 = formatDate(argDate2, argFormat);

        return strDate1.compareTo(strDate2);
    }

    /**
     * timeStamp转换yyyy-MM-dd HH:SS
     */
    @SuppressWarnings("deprecation")
    public static String convert(java.sql.Timestamp timeStamp) {
        if (timeStamp == null) {
            return "";
        }
        String ymd = String.valueOf(timeStamp.getYear() + 1900);

        String mm = String.valueOf(timeStamp.getMonth() + 1);
        if (mm.length() < 2) {
            mm = "0" + mm;
        }

        String dd = String.valueOf(timeStamp.getDate());
        if (dd.length() < 2) {
            dd = "0" + dd;
        }

        ymd = ymd + "-" + mm + "-" + dd;

        String hour = String.valueOf(timeStamp.getHours());
        if (hour.length() < 2) {
            hour = "0" + hour;
        }

        String minute = String.valueOf(timeStamp.getMinutes());
        if (minute.length() < 2) {
            minute = "0" + minute;
        }

        return ymd + " " + hour + ":" + minute;
    }

    /**
     * 取得前一天 getPreDate
     *
     * @param now 当前日期 yyyy-MM-dd
     * @return yyyy-MM-dd String
     * @throws
     * @since 1.0.0
     */
    public static String getPreDate(String now) {
        String preDate = "";
        Date tmp = formatStringToDate(now, DATE_FORMAT_YYYYMMDD);
        Calendar cal = Calendar.getInstance();
        cal.setTime(tmp);
        // 取得前一天
        cal.roll(Calendar.DAY_OF_YEAR, -1);
        preDate = formatDate(cal.getTime(), DATE_FORMAT_YYYYMMDD);
        return preDate;
    }

    /**
     * 获取当天0点0分0秒的毫秒数
     *
     * @return
     */
    public static long getBeginMillisecond() {
        Calendar calendar = Calendar.getInstance();
        int day = calendar.get(Calendar.DAY_OF_YEAR);
        calendar.set(Calendar.DAY_OF_YEAR, day);
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        return (calendar.getTimeInMillis());
    }

    /**
     * 获取当天23点59分59秒的毫秒数
     *
     * @return
     */
    public static long getEndMillisecond() {
        Calendar calendar = Calendar.getInstance();
        int day = calendar.get(Calendar.DAY_OF_YEAR);
        calendar.set(Calendar.DAY_OF_YEAR, day);
        calendar.set(Calendar.HOUR_OF_DAY, 24);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        return (calendar.getTimeInMillis());
    }

    /***
     * 验证日期是否合法
     *
     * @param date      日期字符串
     * @param formatStr 格式化字符串
     * @return true/false
     */
    public static boolean validateDate(String date, String formatStr) {
        SimpleDateFormat dateFormat = new SimpleDateFormat(formatStr);
        dateFormat.setLenient(false);
        try {
            dateFormat.parse(date);
            return true;
        } catch (ParseException e) {
            return false;
        }
    }


    /****
     * 获取当前日期的上月
     *
     * @return yyyy-MM格式的字符串
     */
    public static String getPreMonth() {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        cal.add(Calendar.MONTH, -1);
        return DateUtil.formatDate(cal.getTime(), "yyyy-MM");
    }

    /****
     * 计划与排班时间进行比较
     *
     * @param x 排班开始时间
     * @param y 排班结束时间
     * @param s 巡检开始时间
     * @param e 巡检结束时间
     * @return true/false
     */
    public static boolean checkPlanTime(long x, long y, long s, long e) {
        if (x == y) {
            if (s == e)
                return true;
        } else if (x > y) {
            if (s < x) {
                if (s < y) {
                    if (e < x && e <= y && e >= s)
                        return true;
                } else if (s == y) {
                    if (e == y)
                        return true;
                }
            } else {
                if (s > y && e < x && e <= y) {
                    if (Math.abs(x - y) <= Math.abs(s - e))
                        return true;
                }
            }
        } else if (x < y) {
            if (s >= x && e <= y && s <= e)
                return true;
        }
        return false;
    }

    /***
     * 根据当前日期获取上周以及本周的日期
     *
     * @return yyyy-MM-dd格式的日期字符串
     */
    public static List<String> getWeeks() {
        Calendar firstCal = Calendar.getInstance();
        firstCal.setTime(new Date());
        int dayOfWeek = firstCal.get(Calendar.DAY_OF_WEEK);
        firstCal.add(Calendar.DAY_OF_YEAR, -(dayOfWeek + 5));
        List<String> dateList = new ArrayList<String>();
        for (int i = 0; i < 14; i++) {
            Calendar Cal = Calendar.getInstance();
            Cal.setTime(firstCal.getTime());
            Cal.add(Calendar.DAY_OF_YEAR, i);
            dateList.add(formatDate(Cal.getTime(), "yyyy-MM-dd"));
        }
        return dateList;
    }


    /****
     * 根据当前日期获取上月和当月1-31号格式为"yyyy-MM-dd"的字符串
     *
     * @return
     */
    public static List<String> getMonths() {
        Calendar firstCal = Calendar.getInstance();
        firstCal.setTime(new Date());
        String currntMonth = formatDate(firstCal.getTime(), "yyyy-MM");
        firstCal.add(Calendar.MONTH, -1);
        String lastMonth = formatDate(firstCal.getTime(), "yyyy-MM");

        List<String> dateList = new ArrayList<String>();
        String result1 = "";
        String result2 = "";
        for (int i = 1; i < 32; i++) {
            if (i < 10)
                result1 = lastMonth + "-0" + i;
            else
                result1 = lastMonth + "-" + i;
            dateList.add(result1);
        }

        for (int i = 1; i < 32; i++) {
            if (i < 10)
                result2 = currntMonth + "-0" + i;
            else
                result2 = currntMonth + "-" + i;
            dateList.add(result2);
        }
        return dateList;
    }

    public static String[] getTwoStartEndDate() {
        String[] result = new String[4];
        Calendar firstCal = Calendar.getInstance();
        firstCal.setTime(new Date());
        String currntMonth = formatDate(firstCal.getTime(), "yyyy-MM-hh");
     /* 当前日期月份-1 */
        firstCal.add(Calendar.MONTH, -1);
        firstCal.set(Calendar.DAY_OF_MONTH, firstCal.getActualMaximum(Calendar.DAY_OF_MONTH));
        result[2] = formatDate(firstCal.getTime(), "yyyy-MM-dd");
        // 得到前一个月的第一天
        firstCal.set(Calendar.DAY_OF_MONTH, firstCal.getActualMinimum(Calendar.DAY_OF_MONTH));
        result[0] = formatDate(firstCal.getTime(), "yyyy-MM-dd");

        firstCal.setTime(new Date());
        firstCal.set(Calendar.DAY_OF_MONTH, firstCal.getActualMinimum(Calendar.DAY_OF_MONTH));
        result[3] = formatDate(firstCal.getTime(), "yyyy-MM-dd");
        firstCal.set(Calendar.DAY_OF_MONTH, firstCal.getActualMaximum(Calendar.DAY_OF_MONTH));
        result[1] = formatDate(firstCal.getTime(), "yyyy-MM-dd");
        return result;
    }

    public static Integer getCurrentYear() {
        Calendar cal = Calendar.getInstance();
        return cal.get(Calendar.YEAR);
    }
}
