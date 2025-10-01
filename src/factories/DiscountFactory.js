import { SummerDiscountRule } from "../entities/SummerDiscountRule.js";
import { WinterDiscountRule } from "../entities/WinterDiscountRule.js";
import { DefaultDiscountRule } from "../entities/DefaultDiscountRule.js";
import { CalculateRepository } from "../repositories/CalculateRepository.js";

export class DiscountFactory {
  static create(code) {
    const repo = new CalculateRepository();
    const discountValue = repo.getDiscountByCode(code);

    if (code === "SUMMER10") return new SummerDiscountRule(discountValue);
    if (code === "WINTER15") return new WinterDiscountRule(discountValue);
    return new DefaultDiscountRule();
  }
}
