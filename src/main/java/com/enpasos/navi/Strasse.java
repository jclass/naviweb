package com.enpasos.navi;


public class Strasse {
    int laenge;
    Stadt stadtA;
    Stadt stadtB;
    public Strasse(Stadt stadtA, int laenge, Stadt stadtB) {
        this.stadtA = stadtA;
        this.laenge = laenge;
        this.stadtB = stadtB;
        this.stadtA.strassen.add(this);
        this.stadtB.strassen.add(this);
    }   
    
    
    public Stadt getZielStadtWennStartVon(Stadt stadt) {
        if (stadtA == stadt)  {
            return stadtB;
        } else if (stadtB == stadt) {
            return stadtA;
        } 
        return null;
    }
    
    
    public String toString() {
        return stadtA.toString() + " - " + laenge + " - " + stadtB.toString() ;
    }
    
}
 