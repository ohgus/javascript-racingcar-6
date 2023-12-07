import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/messages.js";
import Validator from "../utils/validator.js";

class InputView {
  static async readCarName() {
    const input = await Console.readLineAsync(MESSAGE.READ.CAR_NAME);
    return input;
  }

  static async getCarName() {
    const input = await this.readCarName();
    Validator.validateCarName(input);
    return input.split(",");
  }

  static async readMoveCount() {
    const input = await Console.readLineAsync(MESSAGE.READ.MOVE_COUNT);
    return input;
  }
}

export default InputView;
