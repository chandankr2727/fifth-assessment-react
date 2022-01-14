import { useContext, useEffect, useState } from 'react';
import { StudentContext } from './StudentContext';
import React from 'react';
import Student from './Student'
import { Link } from 'react-router-dom';
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';

const StudentList = () => {

    const {students} = useContext(StudentContext);
    const [show,setShow] = useState(true)
    const [add,setAdd] = useState(false)
    const [edit,setEdit] = useState(false)


    useEffect(() => {
        setShow(true);
        setAdd(false)
    }, [students])
    const backHandle =()=>{
        setShow(true)
        setAdd(false)
        setEdit(false)
    }
    const addstud=()=>{
        setShow(false)
        setAdd(true)
    }
    const editStud=()=>{
        setShow(false)
        setAdd(false)
        setEdit(true)
    }

    return (
            <>
            {show?<div className='container'>
                <h1>Student Details</h1>
                <Link to="./addStudent" ><button onClick={addstud} className='btn-add'>Add <b>Student</b></button></Link>
                <table className='table' >
                    <thead>
                        <tr className='tr-1'>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Course</th>
                            <th>Batch</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
    
                        {
                           students.map((a)=>{
                               return(
                                <tr key={a.id} >
                                <Student st={a} data={editStud}/>
                                </tr>
                               )
                           })
                        }
    
    
                    </tbody>
                </table></div>:null}
                {add?<AddStudent set={backHandle}/>:null}
                {edit?<UpdateStudent set={backHandle}/>:null}
                </>
            
    )
}

export default StudentList;
