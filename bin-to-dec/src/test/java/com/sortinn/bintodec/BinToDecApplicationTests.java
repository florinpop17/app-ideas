package com.sortinn.bintodec;

import com.sortinn.bintodec.service.BinToDecService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BinToDecApplicationTests {

    @Resource
    private BinToDecService binToDecService;

    @Test
    public void contextLoads() {
    }

    @Test
    public void b2d_test() {
        Integer res = binToDecService.binToDecConvert("11111111");
        System.out.println(res);
    }

}
