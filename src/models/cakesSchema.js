import joi from 'joi';

export const cakeSchema = joi.object({
    name: joi.string().min(2).required(),
    price: joi.number().positive().required(),
    description: joi.string().allow("").required()
});

export const cakeImageURLSchema = joi.object({
    image: joi.string().uri().required()
});