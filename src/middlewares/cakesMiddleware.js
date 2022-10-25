import { cakeSchema, cakeImageURLSchema }from '../models/cakesSchema.js';

export const validateCake = async (req, res, next) => {
  const { name, price, description, image } = req.body;

  const cakeImageURLValidation = cakeImageURLSchema.validate({image}, { abortEarly: false });
  const cakeValidation = cakeSchema.validate({name, price, description}, { abortEarly: false });

  if (cakeImageURLValidation.error) {
    const imageURLerrors = cakeImageURLValidation.error.details.map((error) => error.message);
    return res.status(422).json({ status: 422, message: imageURLerrors });
  }

  if (cakeValidation.error) {
    const erros = cakeValidation.error.details.map((error) => error.message);
    return res.status(400).json({ status: 400, message: erros });
  }
  
  res.locals.cake = cakeValidation.value;
  next();
};