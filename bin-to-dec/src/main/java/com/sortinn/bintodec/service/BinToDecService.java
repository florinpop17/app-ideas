package com.sortinn.bintodec.service;

import lombok.extern.slf4j.Slf4j;
import org.apache.logging.log4j.util.Strings;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author tian.gao
 * @create 2019.04.22 11:47 PM
 **/
@Slf4j
@Service
public class BinToDecService {

    private static final int MAX_LENGTH = 8;

    public Integer binToDecConvert(String binary) {
        if (Strings.isEmpty(binary)) {
            log.error("binary empty");
            return null;
        }
        if (binary.length() > MAX_LENGTH) {
            log.error("more than max length");
            return null;
        }

        String regex = "^[01]+$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(binary);
        Double res = 0.0;

        if (matcher.find()) {
            String[] binaryArr = binary.split("");
            int length = binaryArr.length;
            for (int i = 0; i < length; i++) {
                res += Integer.parseInt(binaryArr[i]) * Math.pow(2, length - 1 - i);
            }
        } else {
            log.error("input is not binary number");
            return null;
        }
        return res.intValue();

    }

    public static void main(String[] args) {
        System.out.println(new BinToDecService().binToDecConvert("11111110"));
    }
}
