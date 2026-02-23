import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
    return (
        <>
            <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
                data-sidebar-position="fixed" data-header-position="fixed">
                <aside className="left-sidebar">
                    {/* Sidebar scroll*/}
                    <div>
                        <div className="brand-logo d-flex align-items-center justify-content-between">
                            <Link to="/" className="text-nowrap logo-img">
                                <img src="../assets/images/logos/dark-logo.svg" width={180} alt />
                            </Link>
                            <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                                <i className="ti ti-x fs-8" />
                            </div>
                        </div>
                        {/* Sidebar navigation*/}
                        <nav className="sidebar-nav scroll-sidebar mt-5" data-simplebar>
                            <ul id="sidebarnav">
                                <li className="sidebar-item">
                                    <Link className="sidebar-link" to="/home" aria-expanded="false">
                                        <span>
                                            <i className="ti ti-layout-dashboard" />
                                        </span>
                                        <span className="hide-menu">Dashboard</span>
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link className="sidebar-link" to="/addStudent" aria-expanded="false">
                                        <span>
                                            <i className="ti ti-file-description" />
                                        </span>
                                        <span className="hide-menu">Add Student</span>
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link className="sidebar-link" to="/studentList" aria-expanded="false">
                                        <span>
                                            <i className="ti ti-cards" />
                                        </span>
                                        <span className="hide-menu">View Student</span>
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link className="sidebar-link" to="/attendance" aria-expanded="false">
                                        <span>
                                            <i className="ti ti-cards" />
                                        </span>
                                        <span className="hide-menu">Attendance</span>
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link className="sidebar-link" to="/viewAttendance" aria-expanded="false">
                                        <span>
                                            <i className="ti ti-cards" />
                                        </span>
                                        <span className="hide-menu">View Attendance</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        {/* End Sidebar navigation */}
                    </div>
                    {/* End Sidebar scroll*/}
                </aside>
            </div>
        </>
    )
}

export default Aside
