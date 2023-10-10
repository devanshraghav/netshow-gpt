export const performValidation = (email, password) => {
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isValidPassword =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  if (!isValidEmail && !isValidPassword) return "Invalid Email & Password"
  if (!isValidEmail) return "Invalid Email";
  if (!isValidPassword) return "Invalid Password";

  return null;
};
