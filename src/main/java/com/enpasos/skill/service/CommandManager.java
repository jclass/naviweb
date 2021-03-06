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
package com.enpasos.skill.service;

import com.enpasos.navi.App;
import com.enpasos.navi.Landschaft;
import com.enpasos.oo.commons.MethodDurationLogger;
import com.enpasos.skill.command.CommandGetLandschaft;
import java.io.Serializable;
import javax.ejb.Stateless;
import javax.inject.Named;



@Named
@Stateless
@MethodDurationLogger
public class CommandManager implements Serializable { 

   
    public Object execute(CommandGetLandschaft command) throws Exception {
       
        Landschaft landschaft = App.getLandschaft();
        return landschaft.getDTO();
    }
        
}