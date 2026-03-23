# drkelvinbrown.com — Personal Brand Website

Personal website for Dr. Kelvin Brown, MD, MPH — physician, health tech founder, marathoner, and author.

## Development

```bash
cd sites/drkelvinbrown
npm install
npm run dev
```

## Build & Preview

```bash
npm run build
npm run preview
```

## Deployment to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import the Git repository (SyncoSystem-Monorepo)
4. Set **Root Directory** to `sites/drkelvinbrown`
5. Framework Preset: Vite
6. Deploy

### Domain Redirect

After deployment:
1. In Vercel project settings, go to **Domains**
2. Add `drkelvinbrown.com` and `www.drkelvinbrown.com`
3. Update DNS at your domain registrar:
   - Add an `A` record pointing to `76.76.21.21`
   - Add a `CNAME` record for `www` pointing to `cname.vercel-dns.com`
4. Vercel will auto-provision SSL

## Hosting Costs (CFO Summary)

| Item | Cost | Notes |
|------|------|-------|
| Vercel Hobby (free tier) | $0/month | Sufficient for personal site traffic |
| Vercel Pro (if needed) | $20/month | Only needed if >100GB bandwidth or team features |
| Domain (drkelvinbrown.com) | Already owned | Renewal ~$12-15/year |
| **Total** | **$0-20/month** | Free tier is recommended to start |

No backend, no database, no API costs. Pure static site.
