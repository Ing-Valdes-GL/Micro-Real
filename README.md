# Micro Realm Society – Refonte Next.js + Supabase

Clone du site [microrealmsociety.eu](https://microrealmsociety.eu) en Next.js 15 (App Router) et Supabase.

## Démarrage

```bash
npm install
cp .env.example .env.local
# Éditer .env.local avec votre NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Supabase

1. Créer un projet sur [supabase.com](https://supabase.com).
2. Dans le SQL Editor, exécuter le script `supabase/schema.sql` pour créer les tables.
3. Renseigner l’URL et la clé anon dans `.env.local`.

## Routes

| Route | Description |
|-------|-------------|
| `/` | Accueil (Hero, Aphorismes, Produits en promo, Popular, Staria, Témoignages) |
| `/shop` | Boutique avec tri et pagination |
| `/shop/[category]` | Produits par catégorie (ex. `/shop/awaken`) |
| `/product/[slug]` | Fiche produit (variantes, ajout au panier) |
| `/our-beliefs` | Page Our Beliefs |
| `/cart` | Panier |
| `/checkout` | Checkout |
| `/my-account` | Connexion |
| `/my-account/lost-password` | Mot de passe oublié |

## Repo Git

Remote configuré : `https://github.com/Ing-Valdes-GL/Micro-Real.git`

```bash
git add .
git commit -m "Initial clone Next.js + Supabase"
git branch -M main
git remote add origin https://github.com/Ing-Valdes-GL/Micro-Real.git
git push -u origin main
```
