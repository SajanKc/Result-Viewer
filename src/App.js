import React from 'react';
import StudentDetails from './Components/StudentDetails';
import StudentData from './Components/StudentData';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const studentComponent = StudentData.map(
    student =>
      <StudentDetails
        key={student.id}
        id={student.id}
        rollNum={student.rollNum}
        name={student.name}
        dsa={student.dsa}
        java={student.java}
        sad={student.sad}
        web={student.web}
        stat={student.stat}
      />)

  return (
    <div>
      <h1 style={{textAlign:"center"}}>BCA 3rd Semester Result</h1>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>S.N.</th>
            <th scope="col"> RollNum </th>
            <th scope="col"> Name </th>
            <th scope="col"> DSA </th>
            <th scope="col"> JAVA </th>
            <th scope="col"> SAD </th>
            <th scope="col"> WEB </th>
            <th scope="col"> STAT </th>            
          </tr>
        </thead>
        <tbody>
          {studentComponent}
        </tbody>
      </table>
    </div>
  );
}

export default App;
