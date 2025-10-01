import { TaxFactory } from "../factories/TaxFactory.js";
import { DiscoutFactory } from "../factories/DiscountFactory.js";

export class CalculateService {
  calculate({ country, state, category, price, discountCode }) {
    const taxRule = TaxFactory.create(country);
    const discountRule = DiscoutFactory.create(discountCode);

    const tax = taxRule.calculate(state, category, price);
    const discount = discountRule.calculate(price);
    const finalPrice = price + tax - discount;

    return {
      country,
      state,
      category,
      price,
      discountCode,
      tax: parseFloat(tax.toFixed(2)),
      discount: parseFloat(discount.toFixed(2)),
      finalPrice: parseFloat(finalPrice.toFixed(2)),
    };
  }
}
