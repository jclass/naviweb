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
package com.enpasos.skill.web2service;

import com.enpasos.oo.commons.ResponseMessage;
import com.enpasos.oo.commons.WebExceptionHandler;
import com.enpasos.skill.command.CommandGetLandschaft;
import com.enpasos.skill.service.CommandManager;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import com.enpasos.navi.Landschaft;


@WebExceptionHandler
@Path("service")
@Stateless
public class Service {
    
    @Inject CommandManager commandManager;
            
    @POST
    @Path("CommandGetLandschaft")
    @Produces("application/json")
    @Consumes("application/json")
    public ResponseMessage execute(CommandGetLandschaft command) throws Exception {
        Object o = commandManager.execute(command);
        return new ResponseMessage(o);
    } 

}
