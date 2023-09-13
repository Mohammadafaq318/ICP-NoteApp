import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [Notes, setNotes] = React.useState([{
    title: "Noteasfasf title",
    content:"Note content"
  }]);

  function addNote(note){
    setNotes((prevItems) => [...prevItems, note]);
  }

  function deleteNote(index){
    setNotes((prevItems) => {
      const updatedNotes = [...prevItems];
      updatedNotes.splice(index, 1);
  
      return updatedNotes;
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {Notes.map((item, index) => (
        <Note deleteItem={deleteNote} key={index} id={index} title={item.title} content={item.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
