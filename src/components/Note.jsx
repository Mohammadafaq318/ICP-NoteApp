import React from "react";




function Note(props) {
    const d = new Date();
    let year = d.getFullYear();

    return (<div className="note">
        <h1>{props.Title}</h1>
        <p>{props.para}</p>
    </div>
    );
    
  }

export default Note;