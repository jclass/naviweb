/**
 * Copyright 2011  ENPASOS - Enterprise Patterns & Solutions GmbH
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


import java.util.logging.Level;
import java.util.logging.Logger;
import javax.interceptor.AroundInvoke;
import javax.interceptor.Interceptor;
import javax.interceptor.InvocationContext;

@Interceptor 
@MethodDurationLogger

//@Interceptor(stateless = true, type = InterceptorType.ANY)
public class MethodDurationInterceptor {
    
//    @Inject Log log;

    @AroundInvoke
    public Object aroundInvoke(InvocationContext ctx) throws Exception {
        Object o = null;
        try {

            long startTime = System.currentTimeMillis();
            o = ctx.proceed();
            long endTime = System.currentTimeMillis();
            long d = endTime - startTime;
            Logger.getLogger(ctx.getClass().getName()).log(Level.INFO, ctx.getMethod().getName() + " took " +  d + " millisec");
//            log.info("%s took %d millisec", ctx.getMethod().getName(), d);

        } catch (Exception e) {
            e.printStackTrace();
            throw new Exception(e.toString());

        }
        return o;
    }

}