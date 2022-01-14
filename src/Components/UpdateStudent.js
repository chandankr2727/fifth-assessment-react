import React from 'react'
import { useContext ,useState } from 'react'
import { StudentContext } from './StudentContext'
import { Link } from 'react-router-dom'

const UpdateStudent = (s) =>{
    const {updateStudent} = useContext(StudentContext);
    const {idGet} = useContext(StudentContext)

    const id = idGet.id;

    const [name, setName] = useState(idGet.name);
    const [age, setAge] = useState(idGet.age);
    const [course, setCourse] = useState(idGet.course);
    const [batch, setBatch] = useState(idGet.batch);


    

    const updatedStudent = {id, name, age, course, batch}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(id, updatedStudent)
        s.set()
    }

     return (

        <div>
            <h1>Update Student</h1>
        <form className='form-a' >
            <label>Name</label>
            <input className='input-a' type="text" onChange={(e)=>setName(e.target.value)} name='name' value={name} /><br />
            <label>Age</label>
            <input className='input-a' type="text" onChange={(e)=>setAge(e.target.value)} name='age' value={age} /><br />
            <label>Course</label>
            <input className='input-a' type="text" onChange={(e)=>setCourse(e.target.value)} name='course' value={course} /><br />
            <label>Batch</label>
            <input className='input-a' type="text" onChange={(e)=>setBatch(e.target.value)} name='batch' value={batch} /><br />
            <br />

            <button type='submit' className='btn-sb' onClick={(e)=>handleSubmit(e)}><Link to="/students" >Submit</Link></button>
        </form>
        <Link to="/students" ><button className='btn-bb' onClick={s.set}>Back</button></Link>
    </div>

     )
}

export default UpdateStudent;