import { ConsoleLogger } from "./out/console-logger/console-logger";
import { FfmpegExecutor } from "./commands/ffmpeg/ffmpeg.executor";

class App {
   async run () {
      await new FfmpegExecutor(ConsoleLogger.getInstance()).execute()
   }
}

const app = new App()
app.run();
