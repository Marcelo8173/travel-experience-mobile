export const validateFields = (values: any) => {
  const requiredFields = ["name", "email", "date_of_birth", "password"];
  const fieldsEmptys = [];

  for (const campo of requiredFields) {
    if (!(campo in values)) {
      fieldsEmptys.push(campo);
    }
  }

  if (fieldsEmptys.length > 0) {
    return fieldsEmptys;
  }

  return [];
};
