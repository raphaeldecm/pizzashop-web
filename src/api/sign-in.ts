import { api } from "@/lib/axios";

export interface SignInData {
  email: string;
}

export async function signIn({ email }: SignInData) {
  await api.post('/authenticate', { email })
}