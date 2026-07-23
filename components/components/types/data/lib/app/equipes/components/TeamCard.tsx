import Link from "next/link";

interface Props{

id:string;

name:string;

flag:string;

}

export default function TeamCard({

id,

name,

flag

}:Props){

return(

<Link

href={`/equipe/${id}`}

className="teamCard"

>

<div className="flag">

{flag}

</div>

<h2>

{name}

</h2>

</Link>

)

}
