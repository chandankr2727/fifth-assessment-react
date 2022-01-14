import {createContext, useEffect, useState} from 'react';

export const StudentContext = createContext()

const StudentContextProvider  = (props) => {

    const [students, setStudents] = useState([{ id: 1, name: "Jhon Doe", age: 25, course: "MERN", batch: 2017},
    { id: 2, name: "Chandan Kumar", age: 23, course: "MERN", batch: 2031},
    { id: 3, name: "Ayushi Kumari", age: 20, course: "MEVN", batch: 2022},
    { id: 4, name: "Bhavesh Onkar", age: 22, course: "MEAN", batch: 2020}])
    const [idGet,setIdGet] = useState()

useEffect(()=> {
    setStudents(JSON.parse(localStorage.getItem('students')))
},[])

useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
})



const addStudent=(name,age,course,batch)=>{
    setStudents([...students,{id:new Date().getTime().toString(),name,age,course,batch}]);
}

const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id))
}

const updateStudent = (id, updatedStudent) => {
    setStudents(students.map((student) => student.id === id ? updatedStudent : student))
}
const idHandle =(id)=>{
    setIdGet(id)
}

    return (
        <StudentContext.Provider value={{students,idGet,addStudent,deleteStudent,updateStudent,idHandle}}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentContextProvider;