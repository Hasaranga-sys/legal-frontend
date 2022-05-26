import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import LegalStepsService from '../services/LegalStepsService';

const AddLegalSteps = (props) => {



  const [legalStep, setLegalStep] = useState('')
  const history = useNavigate();
  const{_id} = useParams();

  const saveOrUpdateLegalStep = (e) =>{
    e.preventDefault();

    const LegalStep = {legalStep} 
    console.log(LegalStep)

    if(_id){
      LegalStepsService.updateLegalStep(_id, LegalStep).then((response)=>{
        history('/LegalStepsTable')
      })
      .catch(error =>{
        console.log(error);
      })
    }else{
      LegalStepsService.createLegalStep(LegalStep).then((response)=>{
        console.log(response.data)
        history('/LegalStepsTable');
      }).catch(error =>{
        console.log(error)
      })
    }
  }

  useEffect(() =>{
    LegalStepsService.getLegalStepbyId(_id)
    .then((res)=>{
      setLegalStep(res.data.LegalStep)
    })
  },[])

  const title = () =>{
    if(_id){
      return <h2 className='text-center'>Update legal step</h2>
    }else{
      return <h2 className='text-center'>Add legal step</h2>
    }
  }



  return (
    <div style={{height:640}} className='bg-light' >
        
    <div style={{marginTop: 20,}} className='container'>
    <br/>
        <div className='row'>
            <div className='card col-md-7 offset-md-3 offset-md-3'>
                <h3>{title()}</h3>
    <form>
    <div style={{marginTop: 20,}} class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Step</label>
        
        <div class="col-sm-9">
        <input  type="text"
                name='legalStep'
                class="form-control"
                id="inputLegalStep"
                value={legalStep}
                onChange ={(e) => setLegalStep(e.target.value)}
                placeholder={legalStep}/>
        </div>
    </div>
    <div className='text-center'>
    <button style={{marginBottom: 20,}} onClick={(e)=> saveOrUpdateLegalStep(e)} class="btn btn-primary">Save</button>
    
    </div>
    </form>
    </div>
    </div>
    </div>
  
    
</div>
  )
}

export default AddLegalSteps