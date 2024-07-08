import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
const [items, setItems] = useState([])

function addItem(inputText){
  const newItems = [...items,inputText]
  setItems(newItems)
}

function deleteItem(id){
  const newItems = items.filter((item, index)=>{
    return index !== id
  })
  setItems(newItems)
}

  return (
    <div>
      <Header />
      <CreateArea clicked={addItem}/>

      {items.map((item, index) => {
        return(
        <Note key={index} id={index} title={item.title} content={item.content} clicked={deleteItem}/>
      )}
      )}
      
      <Footer />
    </div>
  );
}

export default App;
