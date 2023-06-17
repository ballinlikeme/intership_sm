import Joi from "joi";

const registrationSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string()
    .min(4)
    .pattern(new RegExp("^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$"))
    .required(),
  name: Joi.string().min(3).required(),
  surname: Joi.string().min(3).required(),
  passwordConfirmation: Joi.string().valid(Joi.ref("password")).required(),
});

export const registrationValidator = (req, res, next) => {
  const { error } = registrationSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error);
  }
  next();
};
