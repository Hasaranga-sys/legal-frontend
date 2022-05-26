import axios from 'axios'

const URL ="http://localhost:5000/legalsteps/"

class LegalStepService{

    getAllLegalSteps(){
        return axios.get(URL).then((res)=>res.data)
    }

    createLegalStep(legalstep){
        return axios.post(URL, legalstep)
    }

    getLegalStepbyId(legalstepId){
        return axios.get(URL + legalstepId);
    }
 
    updateLegalStep(legalstepId, legalstep){
        return axios.put(URL + legalstepId, legalstep);
    }
 
    deleteLegalStep(legalstepId){
        return axios.delete(URL + legalstepId);
    }

}

export default new LegalStepService();