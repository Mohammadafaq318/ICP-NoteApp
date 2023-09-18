import List "mo:base/List";
import Debug "mo:base/Debug";

actor DKeeper { //Our cannister

  public type Note = { //New datatype aka class type public so that it can be accessed by index.jsx
    title: Text;
    content: Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>(); //Empty List with Note data type
  //notes := List.nil<Note>();


  public func createNote(titleText: Text,contentText: Text){

    let newNote: Note = { // Creating new Note
      title = titleText;
      content = contentText;
    };

    notes:= List.push(newNote,notes);
    Debug.print(debug_show(notes));
  };

  public query func readNotes(): async [Note] {
    return List.toArray(notes);
  }; 

  public func removeNote(id: Nat){
    let listFront=List.take(notes,id);
    let listBack=List.drop(notes,id+1);
    notes :=List.append(listFront,listBack);
  };
};