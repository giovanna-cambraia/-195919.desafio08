// DefaultTaxRule.js
import TaxRule from './TaxRule';

class DefaultTaxRule extends TaxRule {
    isValidState(state) {
        return true;
    }

    isValidCategory(state, category) {
        return true;
    }

    calculateTax(state, category, price) {
        return price * 0.05;
    }
}

export default DefaultTaxRule;