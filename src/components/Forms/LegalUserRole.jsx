import React, { useEffect,useState } from 'react'
import "../Home.css"
import axios from 'axios'
import userRoleList from './userRoleList';
import {Link, useNavigate} from 'react-router-dom'

import UserRoleService from '../services/UserRoleService'


// const URL = "http://localhost:5000/userroles";

// const fetchHandler = async() =>{
//         return await axios.get(URL).then((res)=> res.data)
// }

const URL="http://localhost:5000/userroles";

const fetchHandler = async()=>{
    //we will ge all the data from axios
return await axios.get(URL).then((res)=>res.data)
}



const LegalUserRole = () => {
  

//***************form */
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    roleId:'',
    roleName:''
  });

  const handleChange = (e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  
  };
  
  const sendRequest = async() =>{
   await axios.post("http://localhost:5000/userroles",{
      roleId:String(inputs.roleId),
      roleName:String(inputs.roleName)
    }).then(res => res.data);

  }

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(inputs);
      sendRequest()
    .then(()=>history('/'))
    .then(()=>history('/addUserRole'));
    
    
  }

const deleteHandler = (userroleId) => {
  UserRoleService.deleteUserRoles(userroleId).then((response)=>{

  } )
  // console.log(userroleId);
 
}



//*************form */

//******tabel */

const [userroles, setUserroles] = useState([])

  useEffect(() => {
    UserRoleService.getAllUserRoles()
    .then((data) =>{
      setUserroles(data.userroles)
      console.log(userroles);
    })
  }, [])

  


   



  return (

 <div>

        
        <div style={{marginTop: 20,}} className='container'>
        <h2 style={{marginLeft: 600}} >Legal User Roles</h2>
            <div className='row'>
                <div className='card col-md-7 offset-md-3 offset-md-3'>
                    <h3>Add User Roles</h3>
        <form onSubmit={handleSubmit}>
        <div style={{marginTop: 20,}} class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Role ID</label>
            <div class="col-sm-9">
            <input value={inputs.roleId} onChange={handleChange} type="text" class="form-control" name='roleId'/>
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">RoleName</label>
            <div class="col-sm-9">
            <input value={inputs.roleName} onChange={handleChange} type="text" class="form-control" name="roleName"/>
            </div>
        </div>
        <div className='text-center'>
        <button style={{marginBottom: 20,}} type="submit" class="btn btn-primary">Save</button>
        </div>
        </form>
        </div>
        </div>
        </div>


        <div style={{marginTop: 20,}} className='container'>
<div className='row'>
    <div className='card col-md-10 offset-md-1 offset-md-2'>

<table class="table">
<thead>
<tr>
  <th scope="col">Role ID</th>
  <th scope="col">Role Name</th>
  <th scope="col">Action</th>
 
</tr>
</thead>
<tbody>
{/* <tr> */}
{
     userroles.map(
        (userrole)=>
        <tr key={userrole._id}>
          <td>{userrole.roleId}</td>
          <td>{userrole.roleName}</td>

          <td><button type="button" class="btn btn-warning">Update</button></td>
          <td><button onClick={()=>deleteHandler(userrole._id)} type="button" class="btn btn-danger">Delete</button></td>
        </tr>
      )

}

</tbody>
</table>
</div>
</div>
</div>





  
</div> 
  )
}
export default LegalUserRole