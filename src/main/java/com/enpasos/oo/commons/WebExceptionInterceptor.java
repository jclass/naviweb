/**
 * Copyright 2008-2011  ENPASOS - Enterprise Patterns & Solutions GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.enpasos.oo.commons;
 
import javax.interceptor.AroundInvoke;
import javax.interceptor.Interceptor;
import javax.interceptor.InvocationContext;


@WebExceptionHandler
@Interceptor

public class WebExceptionInterceptor {

    @AroundInvoke
    public Object aroundInvoke(InvocationContext ctx) throws Exception {
        Object o = null;
        String jsonObject = null;
        ResponseMessage response = new ResponseMessage();
        try {
            response = (ResponseMessage) ctx.proceed();
        } catch (Throwable e) {
            e.printStackTrace();
            response.setSuccess(false);
            response.setMessage(e.getMessage());
            return response;
        }
        response.setSuccess(true);
//        response.setPayload(o);
        return response;
    }

}