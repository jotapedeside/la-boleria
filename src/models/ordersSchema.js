import joi from 'joi';

export const orderSchema = joi.object({
    clientId: joi.number().integer().required(),
    cakeId: joi.number().integer().required(),
    quantity: joi.number().integer().min(1).max(5).required(),
    totalPrice: joi.number().min(0).required()
});