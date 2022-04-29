import pino from "pino";
import EnvironmentConfig from "../config/environment.config.js";

const log = pino({
    enabled: !(!!EnvironmentConfig.app.logDisabled),
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
});

export const logger = log;