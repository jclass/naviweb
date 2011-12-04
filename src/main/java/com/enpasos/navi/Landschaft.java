package com.enpasos.navi;

import java.util.HashSet;
import java.util.Set;


public class Landschaft {
       Set<Stadt> staedte;
       
       public Landschaft() {
           staedte = new HashSet<>();             
       }

    public Stadt getStadt(String name) {
        for (Stadt stadt : staedte) {
            if (stadt.name.equals(name)) {
                return stadt;
            }
        }
        return null;
    }
}
