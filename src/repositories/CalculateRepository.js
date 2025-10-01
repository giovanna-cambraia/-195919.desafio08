export class CalculateRepository  {
    constructor() {
        this.taxRates = {
            USA: {
                CA: {
                    eletronics: 0.0825,
                    books: 0.07,
                    default: 0.08,
                },
                TX: {
                    eletronics: 0.08,
                    default: 0.06,
                },
                default: 0.05,
            },
            Canada: {
                eletronics: 0.12,
                default: 0.1,
            },
            default: 0.15,
        };

        this.discounts = {
            SUMMER10: 0.10,
            WINTER15: 0.15,
        };
    }

    getTaxRates(country) {
        return this.taxRates[country] || this.taxRates.default;
    }

    getDiscountByCode(code) {
        return this.discounts[code] || 0
    }
}