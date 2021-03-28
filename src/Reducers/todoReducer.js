const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const COMPLETED_TODO = "COMPLETED_TODO";

const initialState = [
    {id: 1, title: "Learn javascript", completed: true},
    {id: 2, title: "Learn React js", completed: false},
]

 let lastId = 2;

const todoReducer = (state = initialState, action) => {
     switch(action.type) {
    case ADD_TODO:
        return [ ...state, {
            id: ++lastId,
            title: action.payload.title,
            completed: false
        }]
    case REMOVE_TODO:
        return state.filter((item) => item.id !== action.payload.id) 
    case UPDATE_TODO:
        return state.map((item) => {
             if(item.id === action.payload.id)
             return {
                 ...item,title:action.payload.title
             }
            return item
        })
    case COMPLETED_TODO: 
       return state.map((item) => {
           if(item.id === action.payload.id)
           return {
               ...item, completed: !action.payload.completed
           }
           return item
       })
    default:
        return state
     }

}

export default todoReducer;