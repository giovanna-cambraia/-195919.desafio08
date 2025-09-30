import { DiscountRule } from './DiscountRule.js';

export class DefaultDiscountRule extends DiscountRule{
    isValid(code) {
        return true;
    }

    calculate(price) {
        return 0;
    }
}