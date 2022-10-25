import joi from 'joi';

export const clientSchema = joi.object({
    name: joi.string().required(),
    address: joi.string().required(),
    phone: joi.number().min(1000000000).max(99999999999).required()
});