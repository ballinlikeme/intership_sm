import Joi from "joi";

const registrationSchema = Joi.object({
  username: Joi.string()
    .min(3)
    .message("Username should be at least 3 characters long")
    .required(),
  password: Joi.string()
    .min(4)
    .message("Password should be at least 4 characters long")
    .pattern(new RegExp("^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$", "i"))
    .message("Password should contain at least 1 number and 1 letter")
    .required(),
  name: Joi.string()
    .min(3)
    .message("Frist Name should be at least 3 characters long")
    .required(),
  surname: Joi.string()
    .min(3)
    .message("Last Name should be at least 3 characters long")
    .required(),
  passwordConfirmation: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "any.only": "Password must match",
    }),
  age: Joi.number().min(1).message("Age must be bigger then zero").required(),
});

export const registrationValidator = (req, res, next) => {
  const { error } = registrationSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error);
  }
  next();
};
