import { DiscountRule } from './DiscountRule.js';

export class SummerDiscountRule extends DiscountRule{
    isValid(code) {
        return code === 'SUMMER10';
    }

    calculate(price) {
        return price * 0.1;
    }
}