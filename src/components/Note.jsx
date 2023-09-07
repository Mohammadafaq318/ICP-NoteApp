import React from "react";




function Note() {
    const d = new Date();
    let year = d.getFullYear();

    return (<div className="note">
        <h1>Title</h1>
        <p>para</p>
    </div>
    );
    
  }

export default Note;