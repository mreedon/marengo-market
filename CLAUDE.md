# Marengo Market — Claude Instructions

## Deployment

**Always deploy via commit + push to main.** GitHub Actions handles the build and deploy to Cloudflare Pages automatically.

Do NOT run `wrangler deploy` manually — that deploys to a Cloudflare Worker (`marengo-market.tcoudal.workers.dev`) which is NOT the live site. The real site is `marengoilmarket.com` served from Cloudflare Pages (`marengo-market.pages.dev`).

Workflow: edit → `git add` → `git commit` → `git push` → CI deploys to Pages.
