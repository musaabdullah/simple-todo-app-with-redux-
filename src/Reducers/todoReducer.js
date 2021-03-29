

const todoReducer = (state = ["javascript", "reactjs", "reactify"], action) => {
     switch(action.type) {
         case "ADD_TODO": 
           return [
               ...state,
               action.payload.todo
           ]
         default : 
         return state
     }
}

export default todoReducer;