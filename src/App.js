import React from 'react';
import StudentDetails from './Components/StudentDetails';
import StudentData from './Components/StudentData';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo2.jpg';

function unitTest(){
  alert('You clicked Unit Test');
}

function secondTerm(){
  alert('You clicked second term');
}

function preBoard(){
  alert('You clicked pre-board');
}

function board(){
  alert('You clicked board');
}

function App() {
  const studentComponent = StudentData.map(
    student =>
      <StudentDetails
        key={student.id}
        id={student.id}
        rollNum={student.rollNum}
        name={student.name}
        cprogramming={student.cprogramming}
        financialAccounting={student.financialAccounting}
        englishII={student.englishII}
        mathematicsII={student.mathematicsII}
        microprocessor={student.microprocessor}
        total={(Math.round(student.cprogramming + student.financialAccounting + student.englishII + student.mathematicsII + student.microprocessor)/5).toFixed(2)}
      />)

  return (
    <div>
      <header style={{ textAlign: "center", color: "white", backgroundColor: "black" }}>
        <img src={logo} alt="college logo" />
        <h4>BCA 2nd Semester Board Result</h4>
        <h5>( 2019/20 )</h5>
        <div>
          <button className="btn btn-primary" onClick={unitTest}>Unit Test</button>
          <button className="btn btn-success" onClick={secondTerm}>2nd Term</button>
          <button className="btn btn-warning" onClick={preBoard}>Pre-Board</button>
          <button className="btn btn-danger" onClick={board}>Board</button>
        </div>
      </header>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>S.N.</th>
            <th scope="col"> RollNo </th>
            <th scope="col"> Name </th>
            <th scope="col"> C Programming </th>
            <th scope="col"> Financial Accounting </th>
            <th scope="col"> English-II </th>
            <th scope="col"> Mathematics-II </th>
            <th scope="col"> Microprocessor & Architecture </th>
            <th scope="col">Total</th>
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
