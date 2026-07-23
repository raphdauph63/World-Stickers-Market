import Link from "next/link";

export default function Header() {

return(

<header className="header">

<Link href="/">

World Stickers Market

</Link>

<nav>

<Link href="/equipes">

Équipes

</Link>

<Link href="/recherche">

Recherche

</Link>

<Link href="/panier">

Panier

</Link>

</nav>

</header>

)

}
