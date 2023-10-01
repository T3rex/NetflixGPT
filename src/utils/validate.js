export const checkValidData = (email, password, name, repassword) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  let isNameValid = true;
  if (name) {
    isNameValid = /^[a-zA-Z ]*$/.test(name);
  }

  if (!isNameValid) return "Please enter valid name";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not correct";
  if (repassword && password !== repassword) return "Passwords do not match";
};
