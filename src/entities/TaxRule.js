// TaxRule.js
class TaxRule {
    isValidState(state) {
        throw new Error("Method 'isValidState' must be implemented,");
    }

    isValidCategory(state, category) {
        throw new Error("Method 'isValidCategory' must be implemented,");
    }

    calculateTax(state, category, price) {
        throw new Error("Method 'calculateTax' must be implemented,");
    }
}

export default TaxRule;