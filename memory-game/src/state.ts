import { createGlobalState } from "react-hooks-global-state";


const state: State = {
    scene: 'menu',
    previousScene: '',
    cardFlippedPosition: -1,
    scoredId: [],
    timeUp: false
}

export const {useGlobalState} = createGlobalState(state);

interface State {
    scene: string,
    previousScene: string,
    cardFlippedPosition: number,
    scoredId: number[],
    timeUp: boolean
}
