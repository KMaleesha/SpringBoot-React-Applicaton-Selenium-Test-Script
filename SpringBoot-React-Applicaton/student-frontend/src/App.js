import './App.css';
import AppBar from './components/AppBar';
import AddStudent from './components/AddStudent';
import ViewStudents from './components/ViewStudents';
import ViewStudent from './components/ViewStudent';
import Login from './components/Login';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <AppBar/>
      <Routes>
          <Route path="/" element={<Navigate to="/addStudent" />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/addStudent" element={<AddStudent/>}/>
          <Route path="/ViewStudents" element={<ViewStudents/>}/>
          <Route exact path="/students/:id" element={<ViewStudent/>} />
      </Routes>
    </div>
  );
}


export default App;
