import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStudentsData } from "../Api";

const Dashboard = () => {
    const students = useSelector((state) => state.students.students)
    const dispatch = useDispatch();

    useEffect(() => {
        fetchStudentsData(dispatch);
    }, [])

    return (<div className="container">
        <div className="card">
            <div className="card-title">
                <h2>Students List</h2>
                <Link to="/student-registration" className=""> Add Student </Link>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Father Name</td>
                                <td>Email Id</td>
                                <td>Address</td>
                                <td>Mobile No.</td>
                                <td>Gender</td>
                                <td>DOB</td>
                                <td>Country</td>
                            </tr>
                        </thead>
                        <tbody>
                            {students.length ? students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.fname}</td>
                                    <td>{student.lname}</td>
                                    <td>{student.fatherName}</td>
                                    <td>{student.email}</td>
                                    <td>{student.address}</td>
                                    <td>{student.mobileNo}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.dob}</td>
                                    <td>{student.country}</td>
                                </tr>
                            )): "No Data"}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>)
}

export default Dashboard;