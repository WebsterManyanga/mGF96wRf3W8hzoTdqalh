import { createGlobalState } from "react-hooks-global-state";
import { CardsList } from "./types";


const state: State = {
    scene: 'menu',
    previousScene: '',
    cardFlippedPosition: -1,
    scoredId: [],
    timeUp: false,
    win: false,
    randomizedCardsList: []
}

export const {useGlobalState} = createGlobalState(state);

interface State {
    scene: string,
    previousScene: string,
    cardFlippedPosition: number,
    scoredId: number[],
    timeUp: boolean,
    win: boolean,
    randomizedCardsList: CardsList
}
