import React, { useState } from 'react';
import '../index.css'; // Ensure you import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {
    const [activeTab, setActiveTab] = useState("personal-info");

    return (
        <div className="container-fluid border bg-light">
            {/* Top Section */}
            <div className="border-light bg-white p-2 d-flex justify-content-end align-items-center">
                <span className="username" style={{ marginRight: '16px', fontSize: '12px', fontWeight: 'normal' }}>John Doe</span>
                <img 
                src="profile-pic-placeholder.png" // Replace with your profile picture URL
                alt="Profile Picture"
                className="profile-pic me-2"
                />
            </div>

            {/* Profile Title */}
            <h2 className="my-profile-title mt-4 ms-3" style={{ fontWeight: 'normal' }}>My Profile</h2>
            <div className="container my-4">
                <div className="shadow-sm border p-4 bg-white rounded">
                    <div className="row">
                        <div className="col-12 d-flex flex-column mt-5 mb-4">
                            {/* Profile Picture and Username Container */}
                            <div className="d-flex flex-column flex-md-row align-items-start mb-2 ms-4">
                                <div className="d-flex flex-column me-3" style={{ marginTop: '10px' }}>
                                    <img src="path/to/profile-picture.jpg" alt="Profile Picture" className="profile-pic-new" style={{ marginLeft: '-0.4em' }} />
                                    <div className="username mt-3 text-center fw-bold" style={{ fontSize: '16px', marginLeft: '-0.4em' }}>John Doe II</div>
                                </div>

                                {/* Buttons */}
                                <div className="d-flex flex-column align-items-end ms-auto" style={{ marginRight: '20px', marginTop: '4em' }}>
                                    <div>
                                        <button className="btn btn-primary mb-2 m-2" style={{ fontSize: '14px' }}>Change Password</button>
                                        <button className="btn btn-secondary mb-2 m-2" style={{ fontSize: '14px' }}>Print</button>
                                        <button className="btn btn-primary m-2" style={{ fontSize: '14px' }}>Update</button>
                                    </div>

                                    {/* Columns (Under Buttons) */}
                                    <div className="d-flex justify-content-center gap-5 mt-3 me-3">
                                        <div className="text-center">
                                            <h4 className="text-primary">1</h4>
                                            <p className="text-secondary">EVENTS ATTENDED</p>
                                        </div>
                                        <div className="text-center">
                                            <h4 className="text-primary">8</h4>
                                            <p className="text-secondary">CPD CREDITS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <ul className="nav nav-tabs justify-content-start mt-3">
                        {[
                            { key: "personal-info", label: "Personal Info" },
                            { key: "home-office", label: "Home And Office" },
                            { key: "contact-info", label: "Contact Info" },
                            { key: "membership-afilliation", label: "Membership Afilliation" },
                            { key: "interest-social", label: "Interest/Social Media" }
                        ].map(tab => (
                            <li className="nav-item" key={tab.key}>
                                <a 
                                    className={`nav-link text-secondary ${activeTab === tab.key ? 'active text-secondary' : 'text-primary'}`} 
                                    href="#" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveTab(tab.key);
                                    }}
                                >
                                    {tab.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Sections */}
                    <div className="row mt-4">
                        <div className="col-12">

                            {/* Personal Info Section */}
                            {activeTab === "personal-info" && (
                                <div className="container">
                                    <h5 className="mb-4 text-secondary" style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'normal' }}>PRC INFORMATION</h5>
                                    <div className="row mb-3">
                                        <div className="col-md-2 col-12">
                                            <label className="form-label fw-bold text-secondary">PRC no.</label>
                                            <input type="text" className="form-control text-secondary bg-light" value="000001" readOnly />
                                        </div>
                                        <div className="col-md-2 col-12">
                                            <label className="form-label fw-bold text-secondary">Registration Date</label>
                                            <input type="date" className="form-control text-secondary bg-light" value="1923-04-26" readOnly />
                                        </div>
                                        <div className="col-md-2 col-12">
                                            <label className="form-label fw-bold text-secondary">Expiration Date</label>
                                            <input type="text" className="form-control text-secondary bg-light" placeholder="dd/mm/yyyy" />
                                        </div>
                                    </div>

                                    <h5 className="mt-5 mb-4 text-secondary" style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'normal' }}>BASIC INFORMATION</h5>
                                    <div className="row mb-3">
                                        <div className="col-md-2 col-12">
                                            <label className="form-label fw-bold text-secondary">FIRST NAME</label>
                                            <input type="text" className="form-control text-secondary bg-light" value="John" style={{ backgroundColor: '#ddd' }} readOnly />
                                        </div>
                                        <div className="col-md-2 col-12">
                                            <label className="form-label fw-bold text-secondary">MIDDLE NAME</label>
                                            <input type="text" className="form-control text-secondary bg-light" value="MANIO" style={{ backgroundColor: '#ddd' }} readOnly />
                                        </div>
                                        <div className="col-md-2 col-12">
                                            <label className="form-label fw-bold text-secondary">LAST NAME</label>
                                            <input type="text" className="form-control text-secondary bg-light" value="Doe" style={{ backgroundColor: '#ddd' }} readOnly />
                                        </div>
                                        <div className="col-md-2 col-12">
                                            <label className="form-label fw-bold text-secondary">SUFFIX</label>
                                            <input type="text" className="form-control text-secondary bg-light" value="II" style={{ backgroundColor: '#ddd' }} readOnly />
                                        </div>
                                        <div className="col-md-2 col-12">
                                            <label className="form-label fw-bold text-secondary">Civil Status</label>
                                            <select className="form-select text-secondary bg-light" style={{ backgroundColor: '#ddd' }}>
                                                <option>Single</option>
                                                <option>Married</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-2 col-12">
                                            <label className="form-label fw-bold text-secondary">BIRTHDAY</label>
                                            <input type="text" className="form-control text-secondary bg-light" value="11/08/2023" style={{ backgroundColor: '#ddd' }} readOnly />
                                        </div>
                                        <div className="col-md-2 col-12">
                                            <label className="form-label fw-bold text-secondary">Gender</label>
                                            <select className="form-select text-secondary bg-light" style={{ backgroundColor: '#ddd' }}>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div>

                                    <h5 className="mt-5 mb-4 text-secondary" style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'normal' }}>TELL US ABOUT YOU</h5>
                                    <div className="row mb-3">
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">NICKNAME</label>
                                            <input type="text" className="form-control bg-light" style={{ backgroundColor: '#ddd' }} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-12 col-12">
                                            <label className="form-label fw-bold text-secondary">About Your Self</label>
                                            <textarea className="form-control bg-light" rows="3" style={{ backgroundColor: '#ddd' }} readOnly></textarea>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Home And Office Section */}
                            {activeTab === "home-office" && (
                                <div className="container">
                                    <h5 className="mb-4 text-secondary" style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'normal' }}>HOME ADDRESS</h5>
                                    <div className="row mb-3">
                                        <div className="col-md-12 col-12">
                                            <label className="form-label fw-bold text-secondary">Home Address</label>
                                            <input type="text" className="form-control text-secondary bg-light" value="6 FLEURDELIZ STREET GREENPARK VILLAGE CAINTA RIZAL" readOnly />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Home City</label>
                                            <select className="form-select text-secondary bg-light" disabled>
                                                <option>Sandbox</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Zip Code</label>
                                            <input type="text" className="form-control text-secondary bg-light" value="1900" readOnly />
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Country</label>
                                            <input type="text" className="form-control text-secondary bg-light" />
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Home Contact#</label>
                                            <input type="text" className="form-control text-secondary bg-light" />
                                        </div>
                                    </div>

                                    <h5 className="mt-5 mb-4 text-secondary" style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'normal' }}>COMPANY/OFFICE</h5>
                                    <div className="row mb-3">
                                        <div className="col-md-12 col-12">
                                            <label className="form-label fw-bold text-secondary">Company Name</label>
                                            <input type="text" className="form-control text-secondary bg-light" value="NA" readOnly />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Current Position</label>
                                            <input type="text" className="form-control text-secondary bg-light" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-12 col-12">
                                            <label className="form-label fw-bold text-secondary">Office Address</label>
                                            <input type="text" className="form-control text-secondary bg-light" value="6 FLEURDELIZ STREET GREENPARK VILLAGE CAINTA RIZAL" readOnly />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-4 col-12">
                                            <label className="form-label fw-bold text-secondary">Office City</label>
                                            <select className="form-select text-secondary bg-light" disabled>
                                                <option>Sandbox</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Zip Code</label>
                                            <input type="text" className="form-control text-secondary bg-light" />
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Country</label>
                                            <input type="text" className="form-control text-secondary bg-light" />
                                        </div>
                                        <div className="col-md-2 col-12">
                                            <label className="form-label fw-bold text-secondary">Office Contact#</label>
                                            <input type="text" className="form-control text-secondary bg-light" value="N/A" readOnly />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">TIN no.</label>
                                            <input type="text" className="form-control text-secondary bg-light" />
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Business Style</label>
                                            <input type="text" className="form-control text-secondary bg-light" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Contact Info Section */}
                            {activeTab === "contact-info" && (
                                <div className="container">
                                    <h5 className="mb-4 text-secondary" style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'normal' }}>Contact Information</h5>
                                    <div className="row mb-3">
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Email Address</label>
                                            <input type="email" className="form-control bg-light text-secondary" value="email@gmail.com" readOnly />
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Alternate Email Address</label>
                                            <input type="email" className="form-control bg-light text-secondary" readOnly />
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Contact Number</label>
                                            <input type="text" className="form-control bg-light text-secondary" value="09178931457" readOnly />
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Contact Number 2</label>
                                            <input type="text" className="form-control bg-light text-secondary" readOnly />
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-3">
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Tel No.</label>
                                            <input type="text" className="form-control bg-light text-secondary" readOnly />
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Preferred Mailing Address</label>
                                            <select className="form-select bg-light text-secondary" disabled>
                                                <option>Office</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Membership Afilliation Section */}
                            {activeTab === "membership-afilliation" && (
                                <div className="container">
                                    <h5 className="mb-4" style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'normal' }}>CHAPTER</h5>
                                    <div className="row mb-3">
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Chapter Reference City</label>
                                            <select className="form-select bg-light text-secondary" disabled>
                                                <option>Residence Address</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Chapter</label>
                                            <select className="form-select bg-light text-secondary" disabled>
                                                <option>National Office (Sandbox)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <h5 className="mt-5 mb-4 text-secondary" style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'normal' }}>CHAPTER DETAIL</h5>
                                    <div className="row mb-3">
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Geographical Area Office (GAO)</label>
                                            <input type="text" className="form-control bg-light text-secondary" value="Luzon" readOnly />
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Region</label>
                                            <input type="text" className="form-control bg-light text-secondary" value="1 - Metro Manila" readOnly />
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Sector</label>
                                            <select className="form-select bg-light text-secondary" disabled>
                                            <option>Commerce & Industry</option>
                                            </select>
                                        </div>
                                    </div>

                                    <h5 className="mt-5 mb-4 text-secondary" style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'normal' }}>MEMBERSHIP DETAIL</h5>
                                        <div className="row mb-3">
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Member Type</label>
                                            <input type="text" className="form-control bg-light text-secondary" value="Regular" readOnly />
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Membership Status</label>
                                            <input type="text" className="form-control bg-light text-secondary" value="Good Standing" readOnly />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Interest/Social Media Section */}
                            {activeTab === "interest-social" && (
                                <div className="container">
                                    <h5 className="mb-4 text-secondary" style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'normal' }}>Social Media</h5>

                                    <div className="row mb-3">
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Sports</label>
                                            <input type="text" className="form-control bg-light" readOnly />
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Interest</label>
                                            <input type="text" className="form-control bg-light" readOnly />
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Other Skills</label>
                                            <input type="text" className="form-control bg-light" readOnly />
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Facebook (Link)</label>
                                            <input type="text" className="form-control bg-light" readOnly />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Instagram (Link)</label>
                                            <input type="text" className="form-control bg-light" readOnly />
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">LinkedIn (Link)</label>
                                            <input type="text" className="form-control bg-light" readOnly />
                                        </div>
                                        <div className="col-md-3 col-12">
                                            <label className="form-label fw-bold text-secondary">Twitter (Link)</label>
                                            <input type="text" className="form-control bg-light" readOnly />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
