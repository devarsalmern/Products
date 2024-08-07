import { useState } from "react";
import "../App.css";

function NewStudents() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState(["arslan", "ali", "abbas"]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`A new student was added: ${name}`);
    setStudents((currentStudents) => [...currentStudents, name]);
    setName("");
  };
  const handleDelete = (deletingStudent) => {
    const newStudent = students.filter(
      (student) => student !== deletingStudent
    );
    setStudents(newStudent);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>Add a new student</div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
      <br />
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}{" "}
            <button
              onClick={() => {
                handleDelete(student);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NewStudents;
