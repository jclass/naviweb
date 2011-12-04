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

import java.io.Serializable;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.Logger;


public final class Log implements Serializable {

	private final String loggerName;
	private final Logger logger;

	private Log(String loggerName) {
		this.loggerName = loggerName;
		this.logger = Logger.getLogger(loggerName);
	}

	public static Log getLogger(String loggerName) {
		return new Log(loggerName);
	}

	public static Log getLogger(Class<?> loggingClass) {
		return new Log(loggingClass.getName());
	}

	public static Log getLogger(Class<?> loggingClass, String appendix) {
		return new Log(loggingClass.getName() + "." + appendix);
	}

	public void addHandler(Handler handler) {
		this.logger.addHandler(handler);
	}

	public void removeHandler(Handler handler) {
		this.logger.removeHandler(handler);
	}

	public void log(Level level, String message, Object... arguments) {
		try {
			if (this.logger.isLoggable(level)) {
				this.logger.log(level, String.format(message, arguments));
			}
		} catch (Throwable t) {
                    t.printStackTrace();
		}
	}

	public void log(Level level, String message, Throwable t, Object... arguments) {
		try {
			if (this.logger.isLoggable(level)) {
				this.logger.log(level, String.format(message, arguments), t);
			}
		} catch (Throwable t2) {
                    t2.printStackTrace();
		}
	}

	public void warn(String message, Object... arguments) {
		log(Level.WARNING, message, arguments);
	}

	public void warn(String message, Throwable t, Object... arguments) {
		log(Level.WARNING, message, t, arguments);
	}

	public void info(String message, Object... arguments) {
		log(Level.INFO, message, arguments);
	}

	public void info(String message, Throwable t, Object... arguments) {
		log(Level.INFO, message, t, arguments);
	}

	public void debug(String message, Object... arguments) {
		log(Level.FINE, message, arguments);
	}

	public void debug(String message, Throwable t, Object... arguments) {
		log(Level.FINE, message, t, arguments);
	}

	public void trace(String message, Object... arguments) {
		log(Level.FINER, message, arguments);
	}

	public void trace(String message, Throwable t, Object... arguments) {
		log(Level.FINER, message, t, arguments);
	}

	public void error(String message, Object... arguments) {
		log(Level.SEVERE, message, arguments);
	}

	public void error(String message, Throwable t, Object... arguments) {
		log(Level.SEVERE, message, t, arguments);
	}
}
