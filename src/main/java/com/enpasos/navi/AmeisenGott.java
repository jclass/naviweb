package com.enpasos.navi;

import java.util.HashSet;
import java.util.Set;

public class AmeisenGott {

    static Set<Ameise> ameisenBox;

    public static Weg getKuerzesterWeg(Stadt startStadt, Stadt endStadt) {
        Weg weg = null;
        ameisenBox = new HashSet<>();
        starteAmeisen(null, startStadt);
        
//        boolean zielerreicht = false;
        boolean initial = true;
                
        while(!ameisenBox.isEmpty()  || initial) {
            initial = false;
            
//            zielerreicht = endStadt.bistDuErreicht();
            Set<Ameise> aktuelleAmeisen = new HashSet<>();
            aktuelleAmeisen.addAll(ameisenBox);

            for (Ameise a : aktuelleAmeisen) {
                if (a.weg.laenge() > endStadt.kuerzesterWegLaenge) {
                    ameisenBox.remove(a);
                } else {
                    Stadt stadt = a.getAktuelleStadt();
                    starteAmeisen(a, stadt);
                }
            }
        }

        return endStadt.kuerzesterWeg;
    }
 
    public static void starteAmeisen(Ameise prototypAmeise, Stadt stadt) {
        if (prototypAmeise == null)
                prototypAmeise = new Ameise();
 
        for (Strasse s : stadt.strassen) {
            Ameise a = prototypAmeise.clone();
            ameisenBox.add(a);
            Stadt zwischenZielStadt = s.getZielStadtWennStartVon(stadt);
            boolean ameiseHatteDenKuerzestenWeg = a.geh(stadt, s, zwischenZielStadt);
            if (!ameiseHatteDenKuerzestenWeg) {
                ameisenBox.remove(a);
            }
        }
        ameisenBox.remove(prototypAmeise);
    }
 
}
