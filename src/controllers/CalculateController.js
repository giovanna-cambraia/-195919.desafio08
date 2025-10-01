import { CalculateService } from "../services/CalculateService";

export class CalculateController {
    static handle(req, res) {
        try {
            const { country, state, category, price, discountCode} = req.query;

            const service = new CalculateService();
            const result = service.calculate({
                country,
                state,
                category,
                pricee: parseFloat(price),
                discountCode,
            });

            console.table(result);
            res.json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}