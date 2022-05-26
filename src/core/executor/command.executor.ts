import { IStreamLogger } from "../handlers/stream-logger.interface";
import { ChildProcessWithoutNullStreams } from "child_process";
import { ICommandExec } from "./command.types";

export abstract class CommandExecutor<Input> {
    protected constructor(private logger: IStreamLogger) {}

    protected abstract prompt(): Promise<Input>;

    protected abstract build(input: Input): ICommandExec;

    protected abstract spawn(command: ICommandExec): ChildProcessWithoutNullStreams;

    protected abstract processStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger): void;

    public async execute () {
        const input = await this.prompt();
        const command = this.build(input);
        const stream = this.spawn(command);
        this.processStream(stream, this.logger);
    }
}
