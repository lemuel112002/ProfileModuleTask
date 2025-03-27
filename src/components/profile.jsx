import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {
    const [activeTab, setActiveTab] = useState("personal-info");
    
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showCertificateModal, setShowCertificateModal] = useState(false);
    const [showEIDModal, setShowEIDModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Handle file drop event
    const handleDrop = (event) => {
        event.preventDefault();
        if (event.dataTransfer.files.length > 0) {
        setFile(event.dataTransfer.files[0]);
        }
    };

    // Handle drag-over event
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="container-fluid border bg-light">
            {/* Top Section */}
            <div className="border-light bg-white p-2 d-flex justify-content-end align-items-center" style={{ boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.250)" }}>
                <div style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
                    <span className="username" style={{ marginRight: "8px", fontSize: "12px", fontWeight: "normal", cursor: "pointer" }}
                        onClick={toggleModal}> John Doe
                    </span>
                    <img src="profile-pic-placeholder.png" alt="Profile Picture" className="rounded-circle align-content-center custom-border"
                        style={{ cursor: "pointer" }} onClick={toggleModal} />

                    { isModalOpen && (
                        <div className="modal-container">
                            <button onClick={() => alert("Profile Clicked")} className="modal-button">
                                👤 Profile
                            </button>
                            <hr className="modal-divider" />
                            <button onClick={() => alert("Settings Clicked")} className="modal-button">
                                🚪 Log Out
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Profile Title */}
            <h2 className="my-profile-title mt-4 ms-3" style={{ fontWeight: 'normal' }}>My Profile</h2>
            <div className="container my-4">
                <div className="shadow-sm border p-4 bg-white rounded">
                    <div className="row">
                        <div className="col-12 d-flex flex-column mt-5 mb-4">
                            {/* Profile Picture and Username Container */}
                            <div className="d-flex flex-column flex-md-row align-items-start mb-2 ms-4">
                                <div className="position-relative d-inline-block me-3" style={{ marginTop: '10px' }}>
                                    <img src="profile-picture.jpg" alt="Profile Picture" className="rounded-circle align-content-center custom-border-two" />

                                    <div className="position-relative">
                                        {/* Profile Picture Button (Pencil Icon) */}
                                        <div className="position-absolute top-0 end-0 bg-primary"
                                            style={{ transform: "translate(16%, -160px)", cursor: "pointer", width: "40px", height: "40px",
                                                    display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px",
                                                    fontSize: "16px", }}
                                            onClick={() => setShowProfileModal(true)}>
                                            ✏️
                                        </div>

                                        {/* Profile Picture Modal */}
                                        <Modal show={showProfileModal} onHide={() => setShowProfileModal(false)} centered>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Update Your Photo</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                            <div className="upload-container" style={{ border: "1px dashed #ccc", padding: "20px", textAlign: "center" }}
                                                onDrop={handleDrop} onDragOver={handleDragOver}>
                                                <input type="file" onChange={handleFileChange} style={{ display: "none" }} id="fileInput" />
                                                <label htmlFor="fileInput" className="btn btn-primary">Upload</label>
                                                <span style={{ marginLeft: "10px", color: "#aaa" }}>Drag & Drop Files</span>
                                            </div>
                                            { file && <p style={{ textAlign: "center", marginTop: "10px" }}>Selected file: {file.name}</p> }
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={() => setShowProfileModal(false)}>Close</Button>
                                                <Button variant="primary">Update</Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>

                                    <div className="username mt-3 text-center fw-bold" style={{ fontSize: '16px', marginLeft: '-0.4em' }}>
                                        John Doe II
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="d-flex flex-column align-items-end ms-auto" style={{ marginRight: '20px', marginTop: '4em' }}>
                                    <div>
                                        {/* Change Password Button */}
                                        <Button className="btn btn-primary mb-2 m-2" style={{ fontSize: "14px" }} onClick={() => setShowPasswordModal(true)}>
                                            🔑 Change Password
                                        </Button>

                                        {/* Change Password Modal */}
                                        <Modal show={showPasswordModal} onHide={() => setShowPasswordModal(false)} centered>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Update Password</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <form>
                                                    {/* Current Password */}
                                                    <div className="mb-3">
                                                        <label className="form-label">Current Password</label>
                                                        <input type="password" className="form-control" />
                                                    </div>

                                                    {/* New Password */}
                                                    <div className="mb-3">
                                                        <label className="form-label">New Password</label>
                                                        <input type="password" className="form-control" />
                                                    </div>

                                                    {/* Confirm New Password */}
                                                    <div className="mb-3">
                                                        <label className="form-label">Confirm New Password</label>
                                                        <input type="password" className="form-control" />
                                                    </div>
                                                </form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={() => setShowPasswordModal(false)}>Close</Button>
                                                <Button variant="primary">Update</Button>
                                            </Modal.Footer>
                                        </Modal>

                                        <div className="btn-group">
                                            <button className="btn mb-2 m-2 dropdown-toggle" style={{ fontSize: '14px', boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.150)' }} data-bs-toggle="dropdown" aria-expanded="false">
                                                🖨️ Print
                                            </button>
                                            <ul className="dropdown-menu">
                                                {/* Dropdown Item */}
                                                <li>
                                                    <a className="dropdown-item" href="#" onClick={() => setShowCertificateModal(true)}>
                                                        Good Standing Certificate
                                                    </a>
                                                </li>

                                                {/* Modal */}
                                                <Modal show={showCertificateModal} onHide={() => setShowCertificateModal(false)} centered size="lg">
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Good Standing Certificate</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body className="text-center">
                                                        <img
                                                            src="/path-to-your-image/image.png"  // Update this path accordingly
                                                            alt="Good Standing Certificate"
                                                            style={{ width: "100%", height: "auto", border: "1px solid #ddd", borderRadius: "8px" }}
                                                        />
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={() => setShowCertificateModal(false)}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={() => window.open("/path-to-your-image/image.png", "_blank")}>
                                                            Download
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>

                                                {/* Dropdown Item */}
                                                <li>
                                                    <a className="dropdown-item" href="#" onClick={() => setShowEIDModal(true)}>
                                                        E-ID
                                                    </a>
                                                </li>

                                                {/* Modal */}
                                                <Modal show={showEIDModal} onHide={() => setShowEIDModal(false)} centered size="lg">
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>E-ID Payment</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        {/* Payment Method Section */}
                                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                                                            {/* Left Section - Payment Method */}
                                                            <div style={{ flex: 1, marginRight: "20px" }}>
                                                                <h5>Payment Method</h5>
                                                                <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", textAlign: "center" }}>
                                                                    <img src="/path-to-your-image/image.png" alt="Bank Transfer" style={{ width: "100px", marginBottom: "10px" }} />
                                                                    <h6>Bank Transfer</h6>
                                                                    <p>Proof of bank transfer (.png, .jpeg, .pdf)</p>
                                                                    <p><strong>Bank:</strong> Union Bank of the Philippines</p>
                                                                    <p><strong>Account Name:</strong> Philippine Institute of Certified Public Accountants, Inc.</p>
                                                                    <p><strong>Account No:</strong> <span style={{ fontWeight: "bold" }}>100840069691</span></p>
                                                                    <input type="file" />
                                                                </div>
                                                            </div>

                                                            {/* Right Section - Payment Details */}
                                                            <div style={{ flex: 1 }}>
                                                                <h5>Payment Details</h5>
                                                                <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
                                                                    <p><strong>Subtotal:</strong> ₱200</p>
                                                                    <p><strong>Deductions:</strong> ₱0</p>
                                                                    <p><strong>Total:</strong> ₱200</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={() => setShowEIDModal(false)}>Back</Button>
                                                        <Button variant="primary">Checkout</Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </ul>
                                        </div>

                                        { isEditing ? (
                                            <>
                                                {/* Cancel Button */}
                                                <button className="btn btn-primary m-2" 
                                                    style={{ fontSize: "14px", backgroundColor: "#4C84FF", border: "none" }}
                                                    onClick={() => setIsEditing(false)}> ❌ Cancel
                                                </button>

                                                {/* Save Button */}
                                                <button className="btn btn-success m-2"
                                                    style={{ fontSize: "14px", backgroundColor: "#1BC5BD", border: "none" }}>
                                                    💾 Save
                                                </button>
                                            </>
                                        ) : (
                                            /* Update Button */
                                            <button className="btn btn-primary m-2" style={{ fontSize: "14px" }}
                                                onClick={() => setIsEditing(true)}>✏️ Update
                                            </button>
                                        )}
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
            
            {/* Footer */}
            <div className="container-fluid bg-white py-4 mt-2" style={{ boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.250)" }}>
                <p className="mb-0 text-center text-secondary" style={{ fontSize: "14px" }}>Copyright &copy; PICPA 2022</p>
            </div>
        </div>
    );
}
