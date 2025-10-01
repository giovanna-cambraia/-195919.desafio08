import { DiscountRule } from './DiscountRule.js';

export class WinterDiscountRule extends DiscountRule {
    isValid(code) {
        return code === 'WINTER15';
    }

    calculate(price) {
        return price * 0.15;
    }
}