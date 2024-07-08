import React, {useState} from "react";

function CreateArea(props) {

  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  })
  

  function handleChange(event){
    const {name, value} = event.target
    var newInputText = {...inputText,[name]:value}
    setInputText(newInputText)

    }
    
  function handleSubmit(event){
    props.clicked(inputText)
          setInputText({
            title: "",
            content: ""
          })

    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" placeholder="Title" value={inputText.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={inputText.content} />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
