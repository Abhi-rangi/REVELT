export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const getContactApiUrl = (): string => {
  const url = import.meta.env.VITE_CONTACT_API_URL;
  if (!url) return "";
  return url.replace(/\/$/, "");
};

export async function submitContactForm(body: Record<string, string>): Promise<void> {
  const apiUrl = getContactApiUrl();
  if (!apiUrl) {
    throw new Error("Contact API is not configured. Set VITE_CONTACT_API_URL in .env and restart the dev server.");
  }

  let res: Response;
  try {
    res = await fetch(`${apiUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error(
      "Could not reach the contact API. Ensure revelt_express is running on port 3000.",
    );
  }

  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(data.error || `Request failed (${res.status})`);
  }
}

// Generate login URL at runtime so redirect URI reflects the current origin.
// Returns "" when OAuth env is unset so the app runs privately without external redirects.
export const getLoginUrl = (): string => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  if (!oauthPortalUrl || !appId) return "";

  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
