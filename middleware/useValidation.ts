import joi from 'joi';


export const registerSchema = joi.object({
    name: joi.string().required().min(3),
    password: joi.string().required().min(6),
    phone: joi.string().exist().required(),
    dob: joi.date().required(),
    address: joi.string().required()
});

export const loginSchema=joi.object({
    phone: joi.string().exist().required(),
    password:joi.string().required().min(6)
})