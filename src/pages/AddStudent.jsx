import React from 'react'

const AddStudent = ({ student, handleChange, handleSubmit }) => {
    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                <div className="body-wrapper">
                    <div className="container-fluid">
                        <div className='row justify-content-center'>
                            <div className='col-md-8'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title fw-semibold mb-4">Forms</h5>
                                        <div className="card">
                                            <div className="card-body">
                                                <form method='post' onSubmit={handleSubmit}>
                                                    <div className='mb-3'>
                                                        <label htmlFor="stdname" className="form-label">Student Name</label>
                                                        <input type="text" name='stdname' onChange={handleChange} value={student.stdname || ''} className="form-control" id="stdname" placeholder='Enter Name' />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="email" className="form-label">Email address</label>
                                                        <input type="email" name='email' onChange={handleChange} value={student.email || ''} className="form-control" id="email" aria-describedby="emailHelp" placeholder='Enter Email Address' />
                                                    </div>
                                                    <div className='mb-3'>
                                                        <label htmlFor="mobileNo" className="form-label">Mobile No.</label>
                                                        <input type="number" name='mobileNo' onChange={handleChange} value={student.mobileNo || ''} className="form-control" id="mobileNo" placeholder='00000-00000' />
                                                    </div>
                                                    <div className='mb-3'>
                                                        <label htmlFor="course" className="form-label">Course</label>
                                                        <input type="text" name='course' onChange={handleChange} value={student.course || ''} className="form-control" id="course" placeholder='Enter Cource Name' />
                                                    </div>
                                                    <div className='mb-3'>
                                                        <label htmlFor="batch" className="form-label">Batch</label>
                                                        <input type="text" name='batch' onChange={handleChange} value={student.batch || ''} className="form-control" id="batch" placeholder='Enter Batch Name' />
                                                    </div>
                                                    <div className='mb-3'>
                                                        <label htmlFor="address" className="form-label">Address</label>
                                                        <textarea type="text" name='address' onChange={handleChange} value={student.address || ''} className="form-control" id="address" placeholder='Enter Address' />
                                                    </div>
                                                    <div className='mb-3'>
                                                        <label htmlFor="profileImg" className="form-label">Profile Image</label>
                                                        <input type="text" name='profileImg' onChange={handleChange} value={student.profileImg || ''} className="form-control" id="profileImg" placeholder='Enter URL' />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </form>
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

export default AddStudent
