// app.js
import express from "express";
import { TaxFactory } from "./src/factories/TaxFactory.js";
import { DiscountFactory } from "./src/factories/DiscountFactory.js";

const app = express();
const PORT = 3000;

app.get("/calculate", (req, res) => {
  const { country, state, category, price, discountCode } = req.query;

  if (!country || !state || !category || !price) {
    return res.status(400).json({ error: "Parâmetros obrigatórios faltando." });
  }

  const amount = Number(price);

  // Cria regra de imposto
  const taxRule = TaxFactory.create(country);
  if (!taxRule.isValidState(state)) {
    return res.status(400).json({ error: "Estado inválido para o país." });
  }
  if (!taxRule.isValidCategory(state, category)) {
    return res.status(400).json({ error: "Categoria inválida para o país/estado." });
  }

  const tax = taxRule.calculateTax(state, category, amount);

  // Cria regra de desconto
  let discount = 0;
  if (discountCode) {
    const discountRule = DiscountFactory.create(discountCode);
    if (discountRule.isValid(discountCode)) {
      discount = discountRule.calculate(amount);
    }
  }

  const finalPrice = amount + tax - discount;

  // Log no console
  console.log(`
==== Relatório da Operação ====
País: ${country}
Estado: ${state}
Categoria: ${category}
Preço Base: ${amount}
Impostos: ${tax.toFixed(2)}
Desconto: ${discount.toFixed(2)}
Preço Final: ${finalPrice.toFixed(2)}
===============================
`);

  res.json({
    country,
    state,
    category,
    price: amount,
    discountCode: discountCode || null,
    tax: parseFloat(tax.toFixed(2)),
    discount: parseFloat(discount.toFixed(2)),
    finalPrice: parseFloat(finalPrice.toFixed(2)),
  });
});

app.listen(PORT, () => {
  console.log('🚀 Servidor rodando em 3000');
});
