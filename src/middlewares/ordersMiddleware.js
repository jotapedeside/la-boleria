import { orderSchema }from '../models/ordersSchema.js';

export const validateOrder = async (req, res, next) => {
  const validateOrder = orderSchema.validate(req.body, { abortEarly: false });

  if (validateOrder.error) {
    const erros = validateOrder.error.details.map((error) => error.message);
    return res.status(400).json({ status: 400, message: erros });
  }
  console.log(validateOrder.value);
  res.locals.order = validateOrder.value;
  next();
};