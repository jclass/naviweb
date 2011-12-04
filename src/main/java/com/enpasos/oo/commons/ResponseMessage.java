/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.enpasos.oo.commons;

/**
 *
 * @author matthias
 */
public class ResponseMessage extends Message {
    private boolean success = true;
    
    private String message; // = "";
    
    
    public ResponseMessage() {
        super();
    }
    
    public ResponseMessage(Object o) {
        super(o);
    }

    /**
     * @return the success
     */
    public boolean isSuccess() {
        return success;
    }

    /**
     * @param success the success to set
     */
    public void setSuccess(boolean success) {
        this.success = success;
    }

  

    /**
     * @return the message
     */
    public String getMessage() {
        return message;
    }

    /**
     * @param message the message to set
     */
    public void setMessage(String message) {
        this.message = message;
    }

 
    
    
    
    
}
