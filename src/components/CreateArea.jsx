import React from "react";

function CreateArea(props) {

  const [title,setTitle] = React.useState("");
  const [content,setContent] = React.useState("");

  function titleChange(event){
    setTitle(event.target.value);
  }

  function contentChange(event){
    setContent(event.target.value);
  }

  function addItem(event) {
    event.preventDefault();
    const newItem = {
      title: title,
      content: content
    };
    
    props.onAdd(newItem);

    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form>
        <input onChange={titleChange} name="title" placeholder="Title" value={title}/>
        <textarea onChange={contentChange} name="content" placeholder="Take a note..." rows="3" value={content} />
        <button onClick={addItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
