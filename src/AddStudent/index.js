import { useState } from "react";
import { addStudentApi } from "../Api";

const AddStudent = () => {
    const [studentState, setStudentState] = useState({});
    const handleSignUp = (e) => {
        e.preventDefault();
        addStudentApi(studentState)
    }

    const handleChange = (type, value) => {
        setStudentState({ ...studentState, [type]: value });
    }

    return (
        <div className="signup template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
            <div className="40-w p-5 rounded bg-white">
                <form>
                    <h3>Student Registration</h3>
                    <div className="mb-2">
                        <label>First Name</label>
                        <input type="fname"
                            required
                            placeholder="Enter First Name"
                            onChange={(e) => handleChange("fname", e.target.value)}
                            value={studentState.fname}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-2">
                        <label>Last Name</label>
                        <input type="lname"
                            required
                            placeholder="Enter Last Name"
                            onChange={(e) => handleChange("lname", e.target.value)}
                            value={studentState.lname}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-2">
                        <label>Father Name</label>
                        <input type="fathername"
                            required
                            placeholder="Enter Father Name"
                            onChange={(e) => handleChange("fatherName", e.target.value)}
                            value={studentState.fatherName}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-2">
                        <label>Email</label>
                        <input type="email"
                            required
                            placeholder="Enter Email"
                            onChange={(e) => handleChange("email", e.target.value)}
                            value={studentState.email}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-2">
                        <label>Address</label>
                        <input type="address"
                            required
                            placeholder="Enter address"
                            onChange={(e) => handleChange("address", e.target.value)}
                            value={studentState.address}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-2">
                        <label>Mobile NO.</label>
                        <input type="number"
                            required
                            placeholder="9876543210"
                            onChange={(e) => handleChange("mobileNo", e.target.value)}
                            value={studentState.mobileNo}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-2">
                        <label>Gender</label>
                        <input type="radio" onClick={() => handleChange("gender", "male")} value="Male" name="gender" checked={studentState.gender === "male"} /> Male
                        <input type="radio" onClick={() => handleChange("gender", "feMale")} value="Female" name="gender" checked={studentState.gender === "feMale"} /> Female
                        <input type="radio" onClick={() => handleChange("gender", "other")} value="Other" name="gender" checked={studentState.gender === "other"} /> Other
                    </div>
                    <div className="mb-2">
                        <label>Date of Birth</label>
                        <input type="date"
                            required
                            placeholder="01/01/0101"
                            onChange={(e) => handleChange("dob", e.target.value)}
                            value={studentState.dob}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-2">
                        <label>Country</label>
                        <input type="country"
                            required
                            placeholder="Enter Country Name"
                            onChange={(e) => handleChange("country", e.target.value)}
                            value={studentState.country}
                            className="form-control"
                        />
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary"
                            onClick={(e) => handleSignUp(e)}
                        >
                            Add Student
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddStudent;