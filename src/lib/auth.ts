import { cookies } from "next/headers";

const SESSION_COOKIE = "admin_session";

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  const secret = process.env.ADMIN_SESSION_SECRET;
  return Boolean(session && secret && session === secret);
}

export function getSessionCookieName() {
  return SESSION_COOKIE;
}
