package com.enpasos.navi;

import java.util.HashSet;
import java.util.Set;


public class Stadt {
    String name;
    Set<Strasse> strassen;
    int kuerzesterWegLaenge;
    Weg kuerzesterWeg;
    
       
    public Stadt(String name) {
        this.name = name;
        this.strassen = new HashSet<>();
        kuerzesterWegLaenge = Integer.MAX_VALUE;
    }

    

    public boolean bin_da(Weg meinWeg) {
      if (meinWeg.laenge() < kuerzesterWegLaenge){
          kuerzesterWegLaenge = meinWeg.laenge();
          kuerzesterWeg = meinWeg;
          return true;
      }
      return false;
    }

    public boolean bistDuErreicht() {
        return kuerzesterWegLaenge != Integer.MAX_VALUE;
    }
    
    public String toString() {
        return name;
    }
}