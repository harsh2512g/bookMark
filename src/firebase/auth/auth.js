import { auth } from '../app'

export async function firebaseLogout() {
  await auth.signOut()
}
