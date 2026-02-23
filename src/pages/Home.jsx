import React, { useEffect, useState } from 'react'

const Home = () => {

  const [totalStudents, setTotalStudents] = useState(0)
  const [presentCount, setPresentCount] = useState(0)
  const [absentCount, setAbsentCount] = useState(0)

  useEffect(() => {

    const students = JSON.parse(localStorage.getItem("Student")) || [];
    const attendance = JSON.parse(localStorage.getItem("Attendance")) || [];

    // Total Students
    setTotalStudents(students.length);

    // If no attendance yet
    if (attendance.length === 0) {
      setPresentCount(0);
      setAbsentCount(0);
      return;
    }

    // Get latest attendance
    const latestAttendance = attendance[attendance.length - 1];
    const records = latestAttendance.records;

    let present = 0;
    let absent = 0;

    // Simple counting logic
    for (let id in records) {
      if (records[id] === "Present") {
        present++;
      } else if (records[id] === "Absent") {
        absent++;
      }
    }

    setPresentCount(present);
    setAbsentCount(absent);

  }, []);

  return (
    <>
      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        <div className='body-wrapper'>
          <div className="container-fluid">
            {/*  Row 1 */}
            <div className="row">
              <div className="col-lg-12 d-flex align-items-strech">
                <div className="card w-100">
                  <div className="card-body">
                    <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                      <div className="container-fluid mt-4">

                        <h3 className="mb-4 fw-bold">Dashboard Overview</h3>

                        <div className="row">

                          {/* Total Students */}
                          <div className="col-md-4">
                            <div className="card shadow border-0 text-center">
                              <div className="card-body">
                                <h5 className="fw-semibold text-muted">Total Students</h5>
                                <h2 className="text-primary fw-bold">{totalStudents}</h2>
                              </div>
                            </div>
                          </div>

                          {/* Present Students */}
                          <div className="col-md-4">
                            <div className="card shadow border-0 text-center">
                              <div className="card-body">
                                <h5 className="fw-semibold text-muted">Present Students</h5>
                                <h2 className="text-success fw-bold">{presentCount}</h2>
                              </div>
                            </div>
                          </div>

                          {/* Absent Students */}
                          <div className="col-md-4">
                            <div className="card shadow border-0 text-center">
                              <div className="card-body">
                                <h5 className="fw-semibold text-muted">Absent Students</h5>
                                <h2 className="text-danger fw-bold">{absentCount}</h2>
                              </div>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
