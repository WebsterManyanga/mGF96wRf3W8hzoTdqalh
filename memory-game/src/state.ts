import { createGlobalState } from "react-hooks-global-state";


const state: State = {
    scene: 'menu',
    cardFlippedPosition: -1,
    scoredId: []
}

export const {useGlobalState} = createGlobalState(state);

interface State {
    scene: string,
    cardFlippedPosition: number,
    scoredId: number[]
}
