import React , {useEffect} from "react";
import axios from'axios';
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import "../index.css";
 
function App(){
const [listname,getToDo]=React.useState({
  item:"",
  _id:""
});
const [items,setToDo]=React.useState([]);
function setToDoList(event){
  const nvalue=event.target.value;
  
    getToDo({item:nvalue});
  
  
}
function writeList()
{
  setToDo(previtem=>( [...previtem ,listname.item]));
   
  const item = {item:listname.item};
 
  axios.post('http://localhost:5000/items/add', item)
  .then(res => console.log(res.data));

  getToDo({item:""});

}
useEffect(()=>{
  axios.get('http://localhost:5000/items/')
  .then(res=>{setToDo(res.data)})
  .catch(err => console.log(err))
})

function deleteItem(id){
 setToDo(prev=>{return prev.filter((item)=>{return item._id!==id})});

 axios.delete(`http://localhost:5000/items/${id}`)
 .then(res => console.log(res.data));
}

 return(
  <div className="container">
  <div className="heading">
<h1>To DO List</h1>
</div>  
<InputArea name="item" value={listname.item} onsetToDoList={setToDoList} onwriteList={writeList} />
<ul>
  {items.map((todoitem,index)=><ToDoItem key={index} id={todoitem._id} text={todoitem.item} onChecked={deleteItem}/>)}
</ul>
</div>

   
    );
}
export default App;