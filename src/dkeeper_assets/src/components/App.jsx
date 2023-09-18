import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper} from "../../../declarations/dkeeper"; //importing objects from main.mo


function App() {

  const [Notes, setNotes] = React.useState([]);


  function addNote(note){
    
    setNotes((prevItems) => { 
      dkeeper.createNote(note.title,note.content);  
      return [note,...prevItems]
    });
    };

  useEffect(()=>{
    console.log("useeffect");
    fetchData();
  },[]); 

  async function fetchData(){
    const notesArray= await dkeeper.readNotes();
    setNotes(notesArray);
  }

  async function deleteNote(index){
    await dkeeper.removeNote(index);
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
