import { DiscountRule } from "./DiscountRule.js";

export class SummerDiscountRule extends DiscountRule {
  constructor(discountValue) {
    super();
    this.discountValue = discountValue;
  }

  isValid(code) {
    return code === "SUMMER10";
  }

  calculate(price) {
    return price * this.discountValue;
  }
}
