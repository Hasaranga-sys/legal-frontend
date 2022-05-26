import React, { useEffect,useState } from 'react'
import LegalStepsService from '../services/LegalStepsService';
import{Link, useNavigate} from 'react-router-dom'
const LegalStepsTable = () => {

    const [legalsteps, setLegalsteps] = useState([])

    const history = useNavigate();

    useEffect(()=>{
        getAllSteps();
    },[])

    const getAllSteps = () =>{
        LegalStepsService.getAllLegalSteps()
        .then((data)=>{
            setLegalsteps(data.legalsteps)
        })
        
    }

    const deleteLegalstep = (legalstepId) =>{
       
        console.log(legalstepId)
        LegalStepsService.deleteLegalStep(legalstepId).then((response) =>{
            getAllSteps()
            history('/')
        }).catch(error =>{
            console.log(error)
        })
    }



  return (
    <div style={{height:640}} className='bg-light'>
        
    <div style={{marginTop: 20,}} className='container'>
    <h2 style={{marginLeft: 600}} >Legal Steps</h2>
        
    </div>



<div style={{marginTop: 20,}} className='container'>
<div className='row'>
    <div className='card col-md-10 offset-md-1 offset-md-2'>

    <Link style={{width:90,marginTop:10}} to="/addLegalSteps" className="btn btn-primary mb-2">Add</Link>
<table class="table table-striped">
<thead>
<tr>
  
  <th scope="col">Step</th>
  <th scope="col">Action</th>
 
</tr>
</thead>
<tbody>
    {
        legalsteps.map(
            (legalstep)=>
            <tr key={legalstep._id}>
                <td>{legalstep.legalStep}</td>

                <td><Link className='btn btn-info' to={`/UpdateLegalStep/${legalstep._id}`}> Update</Link></td>
                <td>
                    <button type="button" class="btn btn-danger" onClick={()=>deleteLegalstep(legalstep._id)}>Delete</button>
                </td>
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

export default LegalStepsTable