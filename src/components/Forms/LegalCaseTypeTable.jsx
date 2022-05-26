import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import CaseTypeService from '../services/CaseTypeService'

const URL ="http://localhost:5000/legalcases"

const fetchHandler = async()=>{
    //we will ge all the data from axios
return await axios.get(URL).then((res)=>res.data)
}

const LegalCaseTypeTable = () => {

    const [legalcases, setLegalcases] = useState([])

    const history = useNavigate();

    useEffect(() => {

      getAllCaseTypes();

      //  CaseTypeService.getAllCaseTypes()
      //   .then((data)=>{
      //     setLegalcases(data.legalcases)
      //     console.log(legalcases);          
      //  })

    }, [])

    const getAllCaseTypes = () =>{
      CaseTypeService.getAllCaseTypes()
        .then((data)=>{
          setLegalcases(data.legalcases)
          // console.log(legalcases);    
             
       })
    }

    const deleteLegalcase = (casetypeId) =>{
      
      CaseTypeService.deleteCaseType(casetypeId).then((response) =>{
        getAllCaseTypes();
        history('/');
      })
      .catch(error =>{
        console.log(error);
      })
    }
    


  return (
    <div style={{height:640}} className='bg-light'>
      
        <h2 style={{marginLeft: 680, padding:20}} >Legal Case Types</h2>

<div style={{marginTop: 20,}} className='container'>
    <div className='row'>
        <div className='card col-md-10 offset-md-1 offset-md-2'>
       
        <Link style={{width:90,marginTop:10}} to="/addCaseType" className="btn btn-primary mb-2">Add</Link>

<table class="table table-striped">
  <thead>
    <tr>
      
      <th scope="col">Case Type</th>
      <th scope="col">Action</th>
     
    </tr>
  </thead>
  <tbody>
      {
          legalcases.map(
              (legalcase)=> 
              <tr key={legalcase._id}>
              <td>{legalcase.caseType}</td>
      
              <td><Link className='btn btn-info' to={`/UpdateLegalCase/${legalcase._id}`}> Update</Link></td>
              <td><button type="button" class="btn btn-danger" onClick={()=>deleteLegalcase(legalcase._id)}>Delete</button></td>

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

export default LegalCaseTypeTable