export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email || email.length <= 0) return "Username can't be empty."
 // if (!re.test(email)) return 'Ooops! We need a valid email address.'
 if (email.length <= 2) return "Username can't be lessthan 3"
  return ''
}
