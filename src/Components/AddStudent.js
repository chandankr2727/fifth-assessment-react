import React from 'react'
import { useContext ,useState } from 'react'
import { StudentContext } from './StudentContext'
import { Link } from 'react-router-dom'


const AddStudent = (props) => {


    const {addStudent} = useContext(StudentContext)

    const [newStudent, setNewStudent] = useState({
        name:"", age:"", course:"", batch:""
    });

    const onInputChange = (e) => {
        setNewStudent({...newStudent,[e.target.name]: e.target.value})
    }

    const {name, age, course, batch} = newStudent;

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(name, age, course, batch);
        props.set()
    }
    return (
        <div>
            <h1>Add Student</h1>
        <form className='form-a'>
            <label>Name</label>
            <input className='input-a' type="text" onChange={onInputChange} name='name' value={name} required /><br />
            <label>Age</label>
            <input className='input-a' type="text" onChange={onInputChange} name='age' value={age} required /><br />
            <label>Course</label>
            <input className='input-a' type="text" onChange={onInputChange} name='course' value={course} required /><br />
            <label>Batch</label>
            <input className='input-a' type="text" onChange={onInputChange} name='batch' value={batch} required /><br />
            <br />

            <button type='submit' className='btn-sb' onClick={(e)=>handleSubmit(e)}><Link to="/students" >Submit</Link></button>
        </form>
        <Link to="/students" onClick={props.set}><button className='btn-bb'>Back</button></Link>
    </div>
    )
}

export default AddStudent
