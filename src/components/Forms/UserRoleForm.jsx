import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import UserRoleService from '../services/UserRoleService';

const UserRoleForm = () => {

    const [userRole, setUserRole] = useState('')
    const [roleId, setRoleId] = useState("")
    const [roleName, setRoleName] = useState("")
    const history = useNavigate();
    const{_id} = useParams();

    const saveOrUpdateUserRole = (e) =>{
        e.preventDefault();

        const UserRole = {roleId,roleName}

        if(_id){
            UserRoleService.updateUserRoles(_id, UserRole).then((response)=>{
                history('/UserRoleTable')
            }).catch(error =>{
                console.log(error);
            })
        }else{
            UserRoleService.createUserRoles(UserRole).then((response)=>{
                history('/UserRoleTable')
            }).catch(error =>{
                console.log(error)
            })
        }
    }

    useEffect(() => {
        UserRoleService.getUserRoleById(_id).then((res)=>{

            setRoleId(res.data.roleId)
            setRoleName(res.data.roleName)
        }).catch(error =>{
            console.log(error)
        })     
    }, []);


    const title =() =>{
        if(_id){
            return <h2 className='text-center'>Update User Roles</h2>
        }else{
            return <h2  className='text-center'> Add UserRoles</h2>
        }
    }
    


  return (
    <div style={{height:640}} className='bg-light'>
        
        <div style={{marginTop: 20,}} className='container'>
        <br></br>
            <div className='row'>
                <div className='card col-md-7 offset-md-3 offset-md-3'>
                <h3>{title()}</h3>
        <form >
        <div style={{marginTop: 20,}} class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Role ID</label>
            <div class="col-sm-9">
            <input
                value={roleId}
                onChange={(e) => setRoleId(e.target.value)}
                type="text"
                class="form-control"
                name='roleId'/>
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">RoleName</label>
            <div class="col-sm-9">
            <input 
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)} 
                type="text" 
                class="form-control" 
                name="roleName"/>
            </div>
        </div>
        <div className='text-center'>
        <button style={{marginBottom: 20,}} onClick={(e)=>saveOrUpdateUserRole(e)} class="btn btn-primary">Save</button>
        </div>
        </form>
        </div>
        </div>
        </div>
    </div>
  )
}

export default UserRoleForm