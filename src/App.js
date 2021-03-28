import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function App() {

  const [title, setTitle] = useState();
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
     
     <div className="">
       <input type="text" className="" value={title} onChange={(e) => setTitle(e.target.value)}  placeholder="Enter Todo" />
       <button onClick={() =>  dispatch({ type:"ADD_TODO", payload:{title} })}>Save</button>
     </div>
     {
       state.map((item) => {
         return <div key={item.id}>
          <div><span className={`${item.completed? "line": ""}`}>{item.title}</span> <button onClick={() => dispatch({ type:"REMOVE_TODO", payload:{ id:item.id }})}>Remove</button>
          <button onClick={() => setTitle(item.title)}>Select item</button>
          <button onClick={() => dispatch({ type: "UPDATE_TODO", payload: {id: item.id, title: title}})}>update</button>
          <button onClick={() => dispatch({ type: "COMPLETED_TODO", payload: {id: item.id, completed: item.completed}})}>completed</button>
          </div>
         </div>
       })
     }
    </div>
  );
}

export default App;
