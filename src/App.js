import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addUser, removeUser } from './actions/index';
function App() {

  const [username, setUsername] = useState();
  const [address, setAddress] = useState();
  const [todo, setTodo] = useState();
  const usersState = useSelector(state => state.users);
  const todosState = useSelector(state => state.todos);
  console.log(todosState);
  const dispatch = useDispatch();
  return (
    <div className="App">
     
     <div className="">
       <input type="text" className="" value={username} onChange={(e) => setUsername(e.target.value)}  placeholder="Enter username" />
       <input type="text" className="" value={address} onChange={(e) => setAddress(e.target.value)}  placeholder="Enter address" />
       <button onClick={() =>  dispatch(addUser({username,address}))}>Save</button>
     </div>
     {
       usersState.map((item) => {
         return <div key={item.id}>
              <div>{item.username} {item.address} <button onClick={() => dispatch(removeUser(item.id))}>Remove</button></div>
         </div>
       })
     }


     <div className="">
       <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter todo" />
       <button onClick={() => dispatch({type: "ADD_TODO", payload:{todo}})}>Add todo</button>
     </div>

    </div>
  );
}

export default App;
