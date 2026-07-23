"use client";

import {useState} from "react";

export default function Recherche(){

const[text,setText]=useState("");

return(

<main className="container">

<h1>

Recherche

</h1>

<input

value={text}

onChange={(e)=>setText(e.target.value)}

placeholder="Nom ou numéro"

/>

</main>

)

}
