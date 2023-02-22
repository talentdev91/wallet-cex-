interface authState {
  createUsers: any
  loginUser: any
  securityInfo: securityInfoType
}

interface securityInfoType {
  AntiPhishingCode?: string
  Email?: string
  EmailVerify?: number
  LastLogin?: number
  PhoneNumber?: string
  PhoneVerify?: number
  SecurityKey?: string
  Whitelist?: string[]
  IPAddress?: string
}

export type { authState }
