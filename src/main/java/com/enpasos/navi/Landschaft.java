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
    
    
    public LandschaftDTO getDTO() {
        LandschaftDTO dto = new LandschaftDTO();
        
        Set<Strasse> strassen = new HashSet<>();
        for(Stadt stadt: staedte) {
            strassen.addAll(stadt.strassen);
        }
        
        
        
        for(Stadt stadt: staedte) {
            StadtDTO s = new StadtDTO();
            s.name = stadt.name;
            dto.staedte.add(s); 
        }
        
        
         for(Strasse strasse: strassen) {
            StrasseDTO s = new StrasseDTO();
            s.laenge = strasse.laenge;
            s.stadt1 = strasse.stadtA.name;
            s.stadt2 = strasse.stadtB.name;
            dto.strassen.add(s); 
        }
        
        return dto;
    }
}
