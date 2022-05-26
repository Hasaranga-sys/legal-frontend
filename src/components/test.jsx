<div>
                <h1>Employee Details</h1>
                    {/* {message && <div className="alert alert-success">{message}</div>}  */}
                    <div className="container-lg">
                    <div>
                        <input type="text" placeholder="search" className="form-control" style={{ 
                            marginTop:20, marginBottom:20, marginLeft: 390, width:"40%" }}
                            onChange={(e)=>{setSearch(e.target.value)}}></input>
                        </div>
                        <table className="table table-sm table-light">
                            <thead>
                                <tr>
                                {/* <th>id</th> */}
                                <th>EID</th>
                                <th >Name</th>
                                <th >NIC</th>
                               
                                <th>Address</th>  
                                <th>Gender</th> 
                                <th>Contact NO</th>
                                <th>Designation</th>
                                <th>Birth Date</th>
                                {/* <th>IS completed</th>  */}
                                <th>Update</th>
                                <th>Delete</th>
                                <th>Profile</th> 
                                </tr>
                            </thead>
                                <tbody>
                                    {Myapp.filter((val)=>{
                    if(search===""){
                      return val
                    }else if(
                      val.name.toLowerCase().includes(search.toLocaleLowerCase()) || val.eid.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          
                    ){
                      return val
                    }
                    return 0;
                    }).map((Myapp) => (
                                        <tr key={Myapp.id}>
                                           
                                            <td>{Myapp.eid}</td>
                                            <td>{Myapp.name}</td>
                                            <td>{Myapp.nic}</td>
                                            <td>{Myapp.address}</td> 
                                            <td>{Myapp.gender}</td>
                                            <td>{Myapp.contactno}</td>
                                            <td>{Myapp.designation}</td>
                                            
                                            <td>{Myapp.targetDate}</td>
                                           
                                            <td><button className="btn btn-success" onClick={() => updateMyapplistClicked(Myapp.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => deleteMyapplistClicked(Myapp.id)}>Delete</button></td>
                                            <td><button className="btn btn-info" onClick={() => ProfileMyapplistClicked(Myapp.id)}>Profile</button></td>

                                        </tr>
                                    ))}
                                </tbody>

                        </table>
                       
                    </div>
                    <button className="btn btn-success " onClick={addMyapplistClicked}>Add</button>
                    <div>
                    <button type="button" className="btn btn-info" style={{marginRight: -900}} onClick={() =>print({
                            printable: Myapp, header: 'Employee Details',
                            properties:
                            [
                            {field: 'eid', displayName:'Employee ID'},
                            {field: 'name', displayName:'Name'},
                            {field: 'nic', displayName:'NIC'},
                            {field: 'address', displayName:'Address'},
                            {field: 'gender', displayName:'Gender'},
                            {field: 'targetDate', displayName:'DOB'},
                            {field: 'designation', displayName:'Designation'},
                            {field: 'contactno', displayName:'Contact No'},
                        ],
                            type:'json'
                            })}> print Details
                    </button>
                    </div>
            </div>