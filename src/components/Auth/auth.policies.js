const joi = require("joi");

const signUpSchema = joi.object({
  username: joi.string().alphanum().min(5).max(15).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  password: joi.string().alphanum().min(6).required(),
});

const logInSchema = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  password: joi.string().alphanum().min(6).required(),
});

exports.validateSignUp = (signUpdata) => signUpSchema.validate(signUpdata);

exports.validateLogin = (loginData) => logInSchema.validate(loginData);
