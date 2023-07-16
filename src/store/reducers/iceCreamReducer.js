import { BUY_ICECREAM } from '../types/iceCreamTypes';

const initialIceCreamState = {
    numOfIceCream: 20
}
export const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        default:
            return state;
    }
}