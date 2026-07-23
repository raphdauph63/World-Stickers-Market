"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({

card

}:{

card:any

}){

const {addToCart}=useCart();

return(

<button

className="primaryButton"

onClick={()=>addToCart(card)}

>

Ajouter au panier

</button>

)

}
