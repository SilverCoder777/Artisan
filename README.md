# Artisan de lumière

Refonte de **artisandelumiere.com** en français avec **Next.js 16**, App Router, React et TypeScript. Interface responsive ivoire et sauge, photographies optimisées et polices hébergées localement.

## Développement

Node.js 20.9 ou supérieur est nécessaire. Cet environnement dispose de Node.js 24.

```sh
cd /workspace/Artisan
npm ci --cache /workspace/.cache/npm
npm run dev
```

Le serveur écoute sur le port 3000. Pour une installation hors de cet environnement, utiliser simplement `npm ci` dans le dossier du projet.

## Vérification et production

```sh
npm run typecheck
npm run build
npm run start
```

Les tests de navigation, réservation, images, responsive et page 404 se lancent avec `npm run test:e2e`. Ils utilisent Chromium installé dans l’environnement. Sur une autre machine, lancer `npx playwright install chromium` au préalable, ou définir `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`. Après `npm run build`, Playwright démarre automatiquement le serveur de production si le port 3000 est libre ; arrêter le serveur de développement pour tester la version de production.

## Contenus et parcours

- Accueil, trois accompagnements, à propos, tarifs et contact.
- Textes, tarifs, coordonnées et photographies repris du site de référence, consulté le 23 octobre 2026. Les images sont conservées dans `public/images` et leurs sources sont documentées dans `public/images/SOURCES.md`.
- Les boutons de réservation ouvrent les calendriers Google Agenda existants, au cabinet ou à distance. La confirmation se fait chez Google. Le choix d’accompagnement dans la fenêtre présente les tarifs et n’est pas transmis au calendrier externe.
- Les coordonnées et fiches d’accompagnement sont dans `src/lib/content.ts`. Les tarifs sont dans `src/app/tarifs/page.tsx` ; les tarifs affichés dans le dialogue sont dans `src/components/booking-dialog.tsx`.
- Les liens juridiques renvoient aux pages existantes du site d’origine. Aucun paiement, formulaire serveur, suivi publicitaire ou CMS n’est ajouté. Le journal et la boutique WordPress ne sont pas migrés.

La réalisation et la validation locales ne publient pas le site et ne modifient pas le domaine de production.
