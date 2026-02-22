# Running Revelt Privately

This project can run without sending data to third parties. Below is what can leak or block and how to avoid it.

## No code changes needed (env only)

- **Analytics** – Umami is loaded only when both `VITE_ANALYTICS_ENDPOINT` and `VITE_ANALYTICS_WEBSITE_ID` are set. **Do not set these** and no analytics script runs.
- **OAuth / Login** – If `VITE_OAUTH_PORTAL_URL` or `VITE_APP_ID` are unset, login redirect is disabled and the app does not call any external auth server. **Do not set these** for private use.

## Optional: stricter privacy

- **Google Fonts** – `client/index.html` loads fonts from `fonts.googleapis.com` and `fonts.gstatic.com`. For no external requests, remove or comment out the `<link rel="preconnect">` and `<link href="https://fonts.googleapis.com/...">` lines and rely on system fonts, or self-host the same fonts.
- **Maps** – The Map component (if used) loads scripts from `VITE_FRONTEND_FORGE_API_URL` (default: `https://forge.butterfly-effect.dev`). For private use, don’t use the map, or point this env at a self-hosted proxy and keep keys local.
- **Hero / section images** – Use local or self-hosted assets for fully offline or air-gapped use.

## What stays local

- **App logic** – No built-in telemetry or “phone home”; the only external calls are those above when you configure them.

## Summary

To run as privately as possible:

1. Do **not** set: `VITE_ANALYTICS_ENDPOINT`, `VITE_ANALYTICS_WEBSITE_ID`, `VITE_OAUTH_PORTAL_URL`, `VITE_APP_ID`.
2. (Optional) Remove or replace Google Fonts in `client/index.html` if you want zero external requests.
3. (Optional) Avoid or self-host the Map backend and use local images if you need full offline/air-gapped use.
