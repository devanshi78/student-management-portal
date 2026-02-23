import React from 'react'

const ViewAttendance = ({ attendanceList, students }) => {

    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                <div className="body-wrapper">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-4">View Attendance</h5>

                                {attendanceList.length === 0 ? (
                                    <p>No Attendance Records Found</p>
                                ) : (
                                    attendanceList.map((record, index) => (
                                        <div key={index} className="mb-5">
                                            <h6 className="fw-bold">
                                                Date: {record.date}
                                            </h6>

                                            <div className="table-responsive">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Student Name</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {students.map((student, i) => (
                                                            <tr key={student.id}>
                                                                <td>{i + 1}</td>
                                                                <td>{student.stdname}</td>
                                                                <td>
                                                                    {record.records[student.id] ? (
                                                                        record.records[student.id] === "Present" ? (
                                                                            <span className="badge bg-success">
                                                                                Present
                                                                            </span>
                                                                        ) : (
                                                                            <span className="badge bg-danger">
                                                                                Absent
                                                                            </span>
                                                                        )
                                                                    ) : (
                                                                        <span className="badge bg-secondary">
                                                                            Not Marked
                                                                        </span>
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    ))
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewAttendance