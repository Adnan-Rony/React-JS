const getStoredCard=()=>{
   const storeCardString= localStorage.getItem('card');
   if(storeCardString)
   {
    return JSON.parse(storeCardString)
   }
   return [];
}
const addTols=id=>{
    const cart=getStoredCard();
    cart.push(id);
}
