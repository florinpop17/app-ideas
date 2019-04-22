package com.sortinn.bintodec.controller;

import com.sortinn.bintodec.service.BinToDecService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;

/**
 * @author tian.gao
 * @create 2019.04.22 11:47 PM
 **/
@Slf4j
@Controller
@RequestMapping("/cal")
public class BinToDecController {

    @Resource
    private BinToDecService binToDecService;

    @PostMapping("/b2d/{binary}")
    public ModelAndView b2d(@PathVariable("binary") String binary) {
        Integer res = binToDecService.binToDecConvert(binary);
        ModelAndView modelAndView = new ModelAndView("home-list");
        modelAndView.addObject("res", res);
        return modelAndView;
    }
}
