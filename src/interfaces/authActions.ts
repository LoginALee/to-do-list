export type User = {
  id: number
  email: string
  password_digest: string
  created_at: string
  updated_at: string
  username: string
}

export type LoginPayload = {
  username: string
  password: string
}

export type SignUpPayload = {
  username: string
  password: string
  email: string
}

export type LoginResponse = {
  user: User
  token: string
  error?: string
}
