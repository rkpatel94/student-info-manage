import { fetchAllStudent } from "../slice/studentsSlice";

export const signInUserApi = async (userData) => {
    const res = await fetch('http://localhost:5000/users')
    const data = await res.json()
    if (data.filter((item) => item.email === userData.email && item.password === userData.password).length) {
        localStorage.setItem("auth", true);
    }else{
        alert("Worng email or password");
    }
}

export const fetchStudentsData = async (dispatch) => {
    const res = await fetch('http://localhost:5000/students')
    const data = await res.json()
    dispatch(fetchAllStudent(data))
}


export const signUpUserApi = async (userData) => {
    await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    }).then(() => {
        return alert("User Added Success");
    }).catch((error) => { })
}

export const addStudentApi = async (studentData) => {
    await fetch('http://localhost:5000/students', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(studentData),
    }).then(() => {
        return alert("Student Added Success");
    }).catch((error) => { })
}