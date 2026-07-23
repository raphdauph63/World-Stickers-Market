interface Props {
  number: number;
  player: string;
  team: string;
  price: number;
  image: string;
}

export default function CardItem({
  number,
  player,
  team,
  price,
  image,
}: Props) {
  return (
    <div className="cardItem">

      <img
        src={image || "/placeholder.png"}
        alt={player}
      />

      <h3>{player}</h3>

      <p>N° {number}</p>

      <strong>{price.toFixed(2)} €</strong>

      <button>
        Ajouter au panier
      </button>

    </div>
  );
}
