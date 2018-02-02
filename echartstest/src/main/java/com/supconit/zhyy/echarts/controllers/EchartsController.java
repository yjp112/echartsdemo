package com.supconit.zhyy.echarts.controllers;

import com.supconit.zhyy.echarts.entities.EchartsData;
import com.supconit.zhyy.echarts.services.EchartsService;
import com.supconit.zhyy.echarts.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

/**
 * @author yejianping
 * @date 2018/1/10.
 */
@Controller
@RequestMapping("/echarts")
public class EchartsController {


    @Autowired
    private EchartsService echartsService;

    /**
     * 获取图表数据
     *
     * @param year
     * @param month
     * @param day
     * @param areaCode
     * @return
     */

    @RequestMapping("/getData.do")
    @ResponseBody
    public EchartsData getData(HttpServletResponse response, Integer year, Integer month, Integer day, String areaCode, PrintWriter printWriter) {

        year = null == year ? DateUtils.getCurrentYear() : year;
        EchartsData chartData = null;
        try {
            chartData = echartsService.getData(year, month, day, areaCode);
        } catch (Exception ex) {
            ///return null;
        }
       /* String parse = JSON.toJSONString(chartData);

        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        printWriter.write(parse);
        printWriter.flush();
        printWriter.close();*/
        return chartData;
    }


    /**
     * 跳转到index页面
     *
     * @param model
     * @return
     */
    @RequestMapping("/index.do")
    public String index(Model model) {
        //初始化单位、年等公用参数
        model.addAttribute("firstyear", DateUtils.getCurrentYear() - 2);//前年
        model.addAttribute("secondyear", DateUtils.getCurrentYear() - 1);//去年
        model.addAttribute("nowyear", DateUtils.getCurrentYear());//当前年份
        return "echarts/index";
    }

}
