import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../Notes";
// function createNote(note) {
//   return <Note key={note.id} title={note.title} content={note.content} />;
// }
function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
        {Notes.map( note => (
          <Note key={note.id} title={note.title} content={note.content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default App;
