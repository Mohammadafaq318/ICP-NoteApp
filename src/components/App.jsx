import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note";
import React from "react";
import notes from "../notes";


function show_notes(note){
    return <Note key= {note.key} Title={note.title} para={note.content} />
}
function App() {
    return (
        <div>
            <Header />
            {notes.map(show_notes)}
            <Footer />
        </div>
    )
  }

export default App;