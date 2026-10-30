export const groupValidationErrors = (errors) => {
  const errorsByField = {};

  errors.array().forEach((err) => {
    if (!errorsByField[err.path]) {
      errorsByField[err.path] = [];
    }

    errorsByField[err.path].push(err.msg);
  });

  return errorsByField;
};
