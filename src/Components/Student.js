import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { StudentContext } from './StudentContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function Student({st,data}) {
    const {deleteStudent} = useContext(StudentContext)
    const {idHandle} = useContext(StudentContext)
    const edithandle=()=>{
        data()
        idHandle(st)
    }
    const res = st.name.replace(/ /g, '')
    return (
       <>
       <td>{st.name}</td>
       <td>{st.age}</td>
       <td>{st.course}</td>
       <td>{st.batch}</td>
       <td><div className='action-i'>
       <div><Link to={'./updateStudent/' + res}><EditIcon fontSize='medium' onClick={edithandle}/></Link></div>
       <div className='delete'><DeleteIcon fontSize='medium' onClick={()=>deleteStudent(st.id)}/></div>
       </div>
       </td>
       </>
    )
}

export default Student;
