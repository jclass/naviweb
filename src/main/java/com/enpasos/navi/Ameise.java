package com.enpasos.navi;


public class Ameise {
 
   
   Weg weg;
   Stadt aktuelleStadt;
   
    @Override
       public Ameise clone() {
        Ameise clone = new Ameise();
            clone.weg = weg.clone();
        
        
        return clone;
    }
   
   
   public Ameise() { 
       weg = new Weg();
   }

    public boolean geh(Stadt startstadt, Strasse s, Stadt zielstadt) {
       aktuelleStadt =  zielstadt;
       weg.add(startstadt, s, zielstadt);
       return zielstadt.bin_da(weg);
    }
    
    
 

    public Stadt getAktuelleStadt() {
        return aktuelleStadt;
    }
    
}
