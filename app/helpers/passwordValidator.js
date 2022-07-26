export function passwordValidator(password) {
  if (!password || password.length <= 0) return "Password can't be empty."
  if (password.length <= 3) return "Password can't be less then 4"
  return ''
}
