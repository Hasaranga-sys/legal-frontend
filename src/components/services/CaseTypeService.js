import axios from 'axios'

const URL ="http://localhost:5000/legalcases/";



class CaseTypeService{
    
   getAllCaseTypes(){
       return axios.get(URL).then((res)=>res.data)
   }

   createCaseType(casetype){
       return axios.post(URL, casetype)
   }

   getCaseTypebyId(casetypeId){
       return axios.get(URL + casetypeId);
   }

   updateCaseType(casetypeId, casetype){
       return axios.put(URL + casetypeId, casetype);
   }

   deleteCaseType(casetypeId){
       return axios.delete(URL + casetypeId);
   }
}

export default new CaseTypeService();