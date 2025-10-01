import { USATaxRule } from '../entities/USATaxRule.js';
import { CanadaTaxRule } from '../entities/CanadaTaxRule.js';
import { CalculateRepository } from '../repositories/CalculateRepository.js';

export class TaxFactory {
    static create(country) {
        const repo = new CalculateRepository();
        const taxRates = repo.getTaxRates();

        if (country === "USA") return new USATaxRule(taxRates);
        if (country === "Canada") return new CanadaTaxRule(taxRates);
    }
}