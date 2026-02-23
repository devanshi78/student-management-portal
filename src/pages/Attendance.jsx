import React from 'react'

const Attendance = ({
    students,
    date,
    setDate,
    attendance,
    handleAttendanceChange,
    handleSubmit
}) => {

    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                <div className="body-wrapper">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Attendance Form</h5>

                                <form onSubmit={handleSubmit}>

                                    {/* Date */}
                                    <div className="mb-3">
                                        <label className="form-label">Select Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </div>

                                    {/* Student Table */}
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Present</th>
                                                <th>Absent</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {students.length === 0 ? (
                                                <tr>
                                                    <td colSpan="4" className="text-center">
                                                        No Students Found
                                                    </td>
                                                </tr>
                                            ) : (
                                                students.map((student, index) => (
                                                    <tr key={student.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{student.stdname}</td>
                                                        <td>
                                                            <input
                                                                type="radio"
                                                                name={`attendance-${student.id}`}
                                                                checked={attendance[student.id] === "Present"}
                                                                onChange={() =>
                                                                    handleAttendanceChange(student.id, "Present")
                                                                }
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="radio"
                                                                name={`attendance-${student.id}`}
                                                                checked={attendance[student.id] === "Absent"}
                                                                onChange={() =>
                                                                    handleAttendanceChange(student.id, "Absent")
                                                                }
                                                            />
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>

                                    <button type="submit" className="btn btn-primary">
                                        Save Attendance
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Attendance