import React,{useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import CaseTypeService from '../services/CaseTypeService';

const AddCaseTypes = () => {

  const [caseType, setCaseType] = useState('')
  const history = useNavigate();
  const {_id} = useParams();
 

  // const legalCaseType = {caseType}

  const saveOrUpdateCaseType = (e) =>{

    e.preventDefault();

    const legalCaseType = {caseType}
    console.log(legalCaseType)

    if (_id) {

      CaseTypeService.updateCaseType(_id, legalCaseType).then((response)=>{
          history('/LegalCaseTable')
      })
      .catch(error =>{
        console.log(error);
      })
      
    }else{
      CaseTypeService.createCaseType(legalCaseType).then((response)=>{

        console.log(response.data)
        history('/LegalCaseTable');
      }).catch(error => { 
        console.log(error)
      })

    }

  }

  //update

  useEffect(() => {
    CaseTypeService.getCaseTypebyId(_id)
.then((response)=>{
      setCaseType(response.data.caseType)
    })
    .catch(error =>{console.log(error)})    
  }, [])

  const title = () =>{
    if(_id){
      return <h2 className='text-center'>Update Legal case type</h2>
    }else{
      return <h2 className='text-center'>Add Legal case type</h2>
    }
  }






  return (
    <div style={{height:640}} className='bg-light'>
        
        <div style={{marginTop: 20,}} className='container '>
        <br></br>
        
            <div className='row'>
                <div className='card col-md-7 offset-md-3 offset-md-3'>
                    <h3>{
          title()
        }</h3>

        <form>
        <div style={{marginTop: 20,}} class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Case Type</label>
            <div class="col-sm-9">

            <input type="text"
                   className="form-control"
                   name="caseType"
                   placeholder="{caseType}"
                   value={caseType}
                   onChange = {(e) => setCaseType(e.target.value)}
                   />
            </div>
        </div>

        <div className='text-center'>
        <button style={{marginBottom: 20,}} onClick={(e)=> saveOrUpdateCaseType(e)} class="btn btn-primary">Save</button>
        </div>
        </form>

        </div>
        </div>
        </div>

       
        
</div>
  )
}

export default AddCaseTypes

