import { createGlobalState } from "react-hooks-global-state";


const state: State = {
    scene: 'menu',
    cardFlippedPosition: -1,
    reset: false
}

export const {useGlobalState} = createGlobalState(state);

interface State {
    scene: string,
    cardFlippedPosition: number,
    reset: boolean
}
