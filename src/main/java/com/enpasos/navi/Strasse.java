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
    
    
    public int hashCode() {
        return stadtA.hashCode() + 13 * stadtB.hashCode();
    }
    
    
    public boolean equals(Object o) {
        if (!(o instanceof Stadt)) {
            return false;
        }
        Strasse s = (Strasse)o;
        return s.stadtA.name.equals(this.stadtA.name)  && s.stadtB.name.equals(this.stadtB.name);
       
    }
    
}
 