export function ValidateParams(req, res, next) {
    const { country, state, category, price } = req.query;

    if (!country || !state || !category || !price || isNaN(parseFloat(price))) {
        return res.status(400).json({ error: 'Missing or invalid parameters' });
    }

    next();
}