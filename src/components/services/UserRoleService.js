import axios from 'axios'

const URL = "http://localhost:5000/userroles";

class UserRoleService{
    
    getAllUserRoles(){
        return axios.get(URL).then((res)=>res.data);
    }
    createUserRoles(userrole){
        return axios.post(URL, userrole);
    }
    getUserRoleById(_id){
        return axios.get(URL + '/' + _id).then((res)=>res.data);
    }
    updateUserRoles(userroleId, userrole){
        return axios.put(URL+'/'+ userroleId, userrole);
    }
    deleteUserRoles(userroleId){
        return axios.delete(URL + '/' + userroleId);
    }
}

export default new UserRoleService();