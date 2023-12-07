import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/messages.js";

class InputView {
  static async readCarName() {
    const input = await Console.readLineAsync(MESSAGE.READ.CAR_NAME);
    return input;
  }
}
