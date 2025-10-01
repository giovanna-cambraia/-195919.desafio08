import { DiscountRule } from "./DiscountRule.js";

export class WinterDiscountRule extends DiscountRule {
  constructor(discountValue) {
    super();
    this.discountValue = discountValue;
  }

  isValid(code) {
    return code === "WINTER15";
  }

  calculate(price) {
    return price * this.discountValue;
  }
}
