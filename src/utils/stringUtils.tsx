export const ToEmailSimplify = (email: any) => {
  const splits = email.split('@')

  if (splits.length !== 2) {
    return email
  }
  return `${splits[0].substr(0, 2)}${splits[0].length > 2 ? '***@' : '@'}${splits[1]}`
}

export const ToPhoneNumberSimplify = (phone: any) => {
  if (phone?.length < 8) {
    return phone
  }
  return `${phone?.slice(0, 4)}${'***'}${phone?.slice(-4)}`
}
