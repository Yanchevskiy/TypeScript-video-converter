import { IStreamLogger } from "./stream-logger.interface";
import { ChildProcessWithoutNullStreams } from "child_process";


export class StreamHandler {
    constructor(
        private logger: IStreamLogger
    ) {}

    /*
    * ChildProcessWithoutNullStreams тип Node.js для применения нужно устанавливать в Types проекта отдельно.
    * */
    processOutput(stream: ChildProcessWithoutNullStreams) {
        /*
        * Подписываемся на событие из stream для логирования
        * */
        stream.stdout.on('data', (data: any) => {
            this.logger.log(data.toString());
        });

        /*
        * Подписываемся на событие из stream для ошибки
        * */
        stream.stderr.on('data', (data: any) => {
            this.logger.error(data.toString());
        });

        stream.on('close', () => {
            this.logger.end();
        });
    }
}
