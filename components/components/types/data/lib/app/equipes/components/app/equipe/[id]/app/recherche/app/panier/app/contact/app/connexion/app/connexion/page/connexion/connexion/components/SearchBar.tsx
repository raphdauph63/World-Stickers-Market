"use client";

import {Search} from "lucide-react";

export default function SearchBar(){

return(

<div className="searchBar">

<Search size={20}/>

<input

placeholder="Rechercher une carte"

/>

</div>

)

}
