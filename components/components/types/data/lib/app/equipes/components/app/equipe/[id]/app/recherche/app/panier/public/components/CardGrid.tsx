import CardItem from "./CardItem";
import { cards } from "@/data/cards";

export default function CardGrid() {

  return (

    <div className="cardsGrid">

      {cards.map((card) => (

        <CardItem
          key={card.id}
          {...card}
        />

      ))}

    </div>

  );

}
