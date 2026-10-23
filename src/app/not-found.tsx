import Link from "next/link";

export default function NotFound() {
  return <section className="container inner-page not-found"><p className="eyebrow">ERREUR 404</p><h1 className="page-title">Reprenons le bon chemin.</h1><p>Cette page n’existe pas ou n’est plus disponible.</p><Link href="/" className="button button-primary">Revenir à l’accueil</Link></section>;
}
