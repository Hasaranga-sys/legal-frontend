import React,{ useEffect,useState }  from 'react'
import { Link,useNavigate } from 'react-router-dom'
import UserRoleService from '../services/UserRoleService'

const UserRoleTable = () => {

  const [userroles, setUserroles] = useState([])

  const history = useNavigate();

  useEffect(() => {
   getAllUserRoles();
  }, [])

  const getAllUserRoles = () =>{
    UserRoleService.getAllUserRoles()
    .then((data) =>{
      setUserroles(data.userroles)
      console.log(userroles);
    })
  }

  const deleteUserRole = (userroleId) =>{
    UserRoleService.deleteUserRoles(userroleId).then((response)=>{
      getAllUserRoles();
      history('/');
      history('/UserRoleTable');
    }).catch(error =>{
      console.log(error);
    })
  }
  

  return (
    <div style={{height:700}} className='bg-light'>
      
        
<div style={{marginTop: 20,}} className='container'>
<h2 style={{marginLeft: 660,}}>User Roles</h2>
<div className='row'>
<div className='card col-md-10 offset-md-1 offset-md-2'>
<Link style={{width:90,marginTop:10}} to="/addUserRole" className="btn btn-primary mb-2">Add</Link>
<table class="table table-striped">
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

          <td><Link className='btn btn-info' to={`/addUserRole/${userrole._id}`}> Update</Link></td>
          <td><button type="button" onClick={()=>deleteUserRole(userrole._id)} class="btn btn-danger">Delete</button></td>
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

export default UserRoleTable