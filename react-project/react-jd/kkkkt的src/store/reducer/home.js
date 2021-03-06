import { GET_JDLIST } from '../actionTypes/home'

const initalState = {
    name: 'home',
    jdList: null
}

const reducer = (state=initalState, action) => {
    switch (action.type) {
        case GET_JDLIST:
            return {...state, jdList: action.jdList}
        default:
            return state
    }
}

export default reducer