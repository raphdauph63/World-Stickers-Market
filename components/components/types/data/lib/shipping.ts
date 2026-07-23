export function calculateShipping(total:number){

if(total>=60){

return 0;

}

if(total<=10){

return 1.80;

}

if(total<=30){

return 2.90;

}

return 4.90;

}
