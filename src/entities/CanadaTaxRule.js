// CanadaTaxRule.js
import TaxRule from './TaxRule.js';

export class CanadaTaxRule extends TaxRule {
    constructor() {
        super();
        this.taxRates = {
            electronics: 0.15,
            clothing: 0.12,
            default: 0.13
        };
        this.validProvinces = ['ON', 'QC', 'BC', 'AB', 'MB'];
    }

    isValidState(state) {
        return this.validProvinces.includes(state);
    }

    isValidCategory(state, category) {
        return Object.keys(this.taxRates).includes(category);
    }

    calculateTax(state, category, amount) {
        const rate = this.taxRates[category] ?? this.taxRates['default'];
        return amount * rate;
    }
}