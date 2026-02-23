import React from 'react'

const StudentList = ({ list, handleDelete, handleEdit }) => {
    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                <div className="body-wrapper">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 d-flex align-items-stretch">
                                <div className="card w-100">
                                    <div className="card-body p-4">
                                        <h5 className="card-title fw-semibold mb-4">Student List</h5>
                                        <div className="table-responsive">
                                            <table className="table text-nowrap mb-0 align-middle w-100">
                                                <thead className="text-dark fs-4">
                                                    <tr>
                                                        <th className="border-bottom-0">
                                                            <h6 className="fw-semibold mb-0">Index</h6>
                                                        </th>
                                                        <th className="border-bottom-0">
                                                            <h6 className="fw-semibold mb-0">Student Name</h6>
                                                        </th>
                                                        <th className="border-bottom-0">
                                                            <h6 className="fw-semibold mb-0">Course</h6>
                                                        </th>
                                                        <th className="border-bottom-0">
                                                            <h6 className="fw-semibold mb-0">Mobile No</h6>
                                                        </th>
                                                        <th className="border-bottom-0">
                                                            <h6 className="fw-semibold mb-0">Email</h6>
                                                        </th>
                                                        <th className="border-bottom-0">
                                                            <h6 className="fw-semibold mb-0">Action</h6>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        list.map((value, index) => {
                                                            return (
                                                                <tr key={value.id}>
                                                                    <td className="border-bottom-0"><h6 className="fw-semibold mb-0">{index + 1}</h6></td>
                                                                    <td className="border-bottom-0">
                                                                        <h6 className="fw-semibold mb-1">{value.stdname}</h6>
                                                                    </td>
                                                                    <td className="border-bottom-0">
                                                                        <span className="fw-normal">{value.course}</span>
                                                                    </td>
                                                                    <td className="border-bottom-0">
                                                                        <p className="mb-0 fw-normal">{value.mobileNo}</p>
                                                                    </td>
                                                                    <td className="border-bottom-0">
                                                                        <p className="mb-0 fw-normal">{value.email}</p>
                                                                    </td>
                                                                    <td className='border-bottom-0'>
                                                                        <button className='btn btn-danger me-2' onClick={() => handleDelete(value.id)}>Delete</button>
                                                                        <button className='btn btn-success' onClick={() => handleEdit(value.id)}>Edit</button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                    {/* <tr>
                                                    <td className="border-bottom-0"><h6 className="fw-semibold mb-0">4</h6></td>
                                                    <td className="border-bottom-0">
                                                        <h6 className="fw-semibold mb-1">Nirav Joshi</h6>
                                                        <span className="fw-normal">Frontend Engineer</span>
                                                    </td>
                                                    <td className="border-bottom-0">
                                                        <p className="mb-0 fw-normal">Hosting Press HTML</p>
                                                    </td>
                                                    <td className="border-bottom-0">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="badge bg-success rounded-3 fw-semibold">Critical</span>
                                                        </div>
                                                    </td>
                                                    <td className="border-bottom-0">
                                                        <h6 className="fw-semibold mb-0 fs-4">$2.4k</h6>
                                                    </td>
                                                </tr> */}
                                                </tbody>
                                            </table>
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

export default StudentList
