// USATaxRule.js
import TaxRule from './TaxRule';

class USATaxRule extends TaxRule {
    constructor() {
        super();
        this.taxRates = {
            eletronics: 0.1,
            clothing: 0.05,
            default: 0.08
        };
        this.validStates = ['NY', 'CA', 'TX', 'FL', 'IL'];
    }
    
    isValidState(state) {
        return this.validStates.includes(state);
    }

    isValidCategory(state, category) {
        return Object.keys(this.taxRates).includes(category);
    }

    calculate(state, category, price) {
        const rate = this.taxRates[category] ?? this.taxRates ['default'];
        return price * rate;
    }
}

export default USATaxRule;