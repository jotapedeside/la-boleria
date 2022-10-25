import { clientSchema }from '../models/clientsSchema.js';

export const validateClient = async (req, res, next) => {
  const clientValidation = clientSchema.validate(req.body, { abortEarly: false });

  if (clientValidation.error) {
    const erros = clientValidation.error.details.map((error) => error.message);
    return res.status(400).json({ status: 400, message: erros });
  }
  
  res.locals.client = clientValidation.value;
  next();
};