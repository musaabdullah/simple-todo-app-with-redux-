import { ADD_USER, REMOVE_USER, UPDATE_USER } from '../actions/actionsTypes';
var initialState = [
    {id: 1, username: "musa", address: "Alwali"},
    {id: 2, username: "ahmed", address: "Khartoum"},
    {id: 3, username: "omer", address: "Omdurman"}
]
let lastId = 3;

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            return [
                ...state,
                {id: ++lastId, username: action.payload.username, address: action.payload.address}
            ]
        case REMOVE_USER:
            return state.filter((item) => item.id !== action.payload.id);
        default: 
        return state

    }
}

export default userReducer;