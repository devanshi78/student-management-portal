import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Aside from './components/Aside'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AddStudent from './pages/AddStudent'
import StudentList from './pages/StudentList'
import Attendance from './pages/Attendance'
import ViewAttendance from './pages/ViewAttendance'
import Login from './pages/Login'

const App = () => {
  const [student, setStudent] = useState({});
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [attendanceList, setAttendanceList] = useState([]);
  const [attendanceDate, setAttendanceDate] = useState("");
  const [attendanceRecord, setAttendanceRecord] = useState({});
  const navigator = useNavigate();

  useEffect(() => {
    let oldlist = JSON.parse(localStorage.getItem('Student')) || [];
    setList(oldlist);
  }, []);

  useEffect(() => {
    const oldAttendance = JSON.parse(localStorage.getItem("Attendance")) || [];
    setAttendanceList(oldAttendance);
  }, []);

  useEffect(() => {
    const searchData = list.filter((item) =>
      item.stdname?.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredList(searchData);
  }, [search, list]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  }

  const handleDelete = (id) => {
    let newList = list.filter(stud => stud.id != id);
    setList(newList);
    localStorage.setItem("Student", JSON.stringify(newList));
  }

  const handleEdit = (id) => {
    let editdata = list.find(stud => stud.id === id);
    setStudent(editdata)
    navigator('/addStudent')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newlist;
    if (student.id) {
      newlist = list.map((stud) => {
        if (stud.id == student.id) {
          return student;
        }
        return stud;
      })
      navigator('/studentList')
    } else {
      newlist = [...list, { ...student, id: Date.now() }];
    }
    setList(newlist);
    localStorage.setItem('Student', JSON.stringify(newlist));
    setStudent({});
  }

  const handleAttendanceChange = (id, status) => {
    setAttendanceRecord({
      ...attendanceRecord,
      [id]: status
    });
  };

  const handleAttendanceSubmit = (e) => {
    e.preventDefault();

    if (!attendanceDate) {
      alert("Please select date");
      return;
    }

    const attendanceData = {
      date: attendanceDate,
      records: attendanceRecord
    };

    const updatedAttendance = [...attendanceList, attendanceData];

    setAttendanceList(updatedAttendance);
    localStorage.setItem("Attendance", JSON.stringify(updatedAttendance));

    setAttendanceDate("");
    setAttendanceRecord({});
  };

  return (
    <>

      <Routes>
        <Route element={<Login />} path='/' />
        <Route element={
          <div className="d-flex">
            <Aside />
            <div className="w-100">
              <Header search={search}
                setSearch={setSearch} />
              <Home />
            </div>
          </div>
        } path='/home' />
        <Route
          path="/addStudent"
          element={
            <div className="d-flex">
              <Aside />
              <div className="w-100">
                <Header search={search} setSearch={setSearch} />
                <AddStudent
                  student={student}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              </div>
            </div>
          }
        />

        <Route
          path="/studentList"
          element={
            <div className="d-flex">
              <Aside />
              <div className="w-100">
                <Header search={search} setSearch={setSearch} />
                <StudentList
                  list={filteredList}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              </div>
            </div>
          }
        />

        <Route
          path="/attendance"
          element={
            <div className="d-flex">
              <Aside />
              <div className="w-100">
                <Header search={search} setSearch={setSearch} />
                <Attendance
                  students={list}
                  date={attendanceDate}
                  setDate={setAttendanceDate}
                  attendance={attendanceRecord}
                  handleAttendanceChange={handleAttendanceChange}
                  handleSubmit={handleAttendanceSubmit}
                />
              </div>
            </div>
          }
        />

        <Route
          path="/viewAttendance"
          element={
            <div className="d-flex">
              <Aside />
              <div className="w-100">
                <Header search={search} setSearch={setSearch} />
                <ViewAttendance
                  attendanceList={attendanceList}
                  students={list}
                />
              </div>
            </div>
          }
        />
      </Routes >
    </>
  )
}

export default App