import { CardsList } from "./types";

export const randomizeCards = (cardsList:CardsList) => {
    const result = [];
    const selectedNumbers:number[] = [];
  
    
    while (selectedNumbers.length < cardsList.length) {
      let index = Math.floor(Math.random() * cardsList.length);
      if (selectedNumbers.includes(index)) {
        let i = 0;
        let size = selectedNumbers.length;
  
        while (i < cardsList.length && selectedNumbers.length === size) {
            if (!selectedNumbers.includes(i)) {
              selectedNumbers.push(i);
            } else {
              i++;
            }
        }
        index = i;
      } else {
        selectedNumbers.push(index);
      }
      result.push(cardsList[index]);
    }
  
    return result;
  
  }