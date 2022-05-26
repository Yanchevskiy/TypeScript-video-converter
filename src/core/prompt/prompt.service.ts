import inquirer from 'inquirer'
import { PromptType } from "./prompt.types";

export class PromptService {
    public async input<T>(message: string, type: PromptType) {
        const { result } = await  inquirer.prompt<{ result: T }>([
            {
                type: type,
                name: 'result', // В какую переменную возвращает результат.
                message: message // Сообщение, которое будет отображаться.
            }
        ]);

        return result;
    }
}
