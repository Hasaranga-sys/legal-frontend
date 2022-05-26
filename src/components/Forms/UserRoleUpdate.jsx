// import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import React,{ useEffect, useState} from 'react'
import axios from 'axios';

const UserRoleUpdate = () => {

  const [UserRoles, setUserRoles] = useState('')
  const history = useNavigate();
  const {_id} = useParams();

  const saveOrUpdateUserRole = (e) =>{
    e.preventDefault();

    const UserRole = {UserRoles}
  }
    
    
  return (
    <div>UserRoleUpdate</div>
  )
}

export default UserRoleUpdate