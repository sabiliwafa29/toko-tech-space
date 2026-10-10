# Deployment Guide: Toko Tech Space

**Target Domain:** `tokotechkekinian.biz.id`  
**Hosting Platform:** [Vercel](https://vercel.com)  
**Project Path:** `/media/wafa/Data1/Workspace/Project Front End/toko-tech-space`

---

## 1. Initialize Git Repository (if deploying via GitHub)

Inside `/media/wafa/Data1/Workspace/Project Front End/toko-tech-space`:

```bash
git init
git add .
git commit -m "feat: initial release of toko-tech-space landing page"
```

Create a new repository on your GitHub account (`sabiliwafa29/toko-tech-space`), then push:

```bash
git remote add origin https://github.com/sabiliwafa29/toko-tech-space.git
git branch -M main
git push -u origin main
```

---

## 2. Deploy on Vercel

### Option A: Via Vercel Web Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **Add New...** → **Project**.
3. Import the `toko-tech-space` GitHub repository.
4. Keep the default build settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./`
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
5. Click **Deploy**. Vercel will automatically build and deploy the project to an active `.vercel.app` URL.

### Option B: Via Vercel CLI
```bash
npx vercel
# Follow prompts to link and deploy to production:
npx vercel --prod
```

---

## 3. Attach Custom Domain `tokotechkekinian.biz.id`

1. In your project dashboard on Vercel, go to **Settings** → **Domains**.
2. Enter `tokotechkekinian.biz.id` and click **Add**.
3. Also enter `www.tokotechkekinian.biz.id` and configure it to redirect to `tokotechkekinian.biz.id`.

### Configure DNS Records in Your Domain Registrar / DNS Manager:
Configure the following DNS records with your registrar (e.g. Niagahoster, DomaiNesia, Cloudflare, IDwebhost):

| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` (or leave blank) | `76.76.21.21` | Automatic / 3600 |
| **CNAME** | `www` | `cname.vercel-dns.com` | Automatic / 3600 |

> **Note:** Once DNS propagation completes (usually within 5–30 minutes), Vercel will automatically provision a free SSL certificate (Let's Encrypt), and your site will be live securely at `https://tokotechkekinian.biz.id`.
