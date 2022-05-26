import { IStreamLogger } from "../../core/handlers/stream-logger.interface";

export class ConsoleLogger implements IStreamLogger{
    private static instance: ConsoleLogger;

    public static getInstance(): ConsoleLogger {
        if (!ConsoleLogger.instance) {
            ConsoleLogger.instance = new ConsoleLogger();
        }

        return ConsoleLogger.instance;
    }

    end(): void {
        console.log('Готово!');
    }

    error(...args: any[]): void {
        console.log(...args);
    }

    log(...args: any[]): void {
        console.log(...args);
    }
}
