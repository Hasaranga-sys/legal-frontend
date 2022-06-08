import Header from "./components/Header";
import NavBar from "./components/NavBar";
import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import MasterDashboard from "./components/MasterDashboard";
import AdminModule from "./components/AdminModule"
import LegalUserRole from "./components/Forms/LegalUserRole";
import AddCaseTypes from "./components/Forms/AddCaseTypes";
import AddLegalSteps from "./components/Forms/AddLegalSteps";
import UserRoleTable from "./components/Forms/UserRoleTable";
import { Login } from "./components/Login";
import UserRoleUpdate from "./components/Forms/UserRoleUpdate";
import LegalCaseTypeTable from "./components/Forms/LegalCaseTypeTable";
import LegalStepsTable from "./components/Forms/LegalStepsTable";
import UserRoleForm from "./components/Forms/UserRoleForm";
import LitigationDash from "./components/Litigation/LitigationDash";
import CaseDocumnet from "./components/Litigation/CaseDocumnet";




function App() {
  return (
    <div>
      <React.Fragment>
      
      <header>            
       <NavBar/>
       <Header/> 
      </header>
      <main>
        <Routes>     
          <Route path="/" element={<Home/>} exact/>
          <Route path="/MasterDash" element={<MasterDashboard/>} exact/>
          <Route path="/Admin" element={<AdminModule/>} exact/>
          {/* userRoles */}
          <Route path="/addUserRoleTable" element={<LegalUserRole/>} exact />

          <Route path="/UserRoleTable" element={<UserRoleTable/>} exact />
          <Route path="/addUserRole" element={<UserRoleForm/>} exact />
          <Route path="/addUserRole/:_id" element={<UserRoleForm/>} exact />


          <Route path="/UserRoleUpdate/:_id" element={<UserRoleUpdate/>} exact />
          {/* case types */}
          <Route path="/addCaseType" element={<AddCaseTypes/>} exact/>
          <Route path="/UpdateLegalCase/:_id" element={<AddCaseTypes/>} exact/>
          <Route path="/LegalCaseTable" element={<LegalCaseTypeTable/>} exact/>
          {/* legal steps */}
          <Route path="/addLegalSteps" element={<AddLegalSteps/>} exact/>
          <Route path="UpdateLegalStep/:_id" element={<AddLegalSteps/>} exact/>
          <Route path="/LegalStepsTable" element={<LegalStepsTable/>} exact/>
          <Route path="/login" element={<Login/>} exact/>


          {/* litigation routes */}
          <Route exact path="/LitigationDash" element={<LitigationDash/>} />
          <Route exact path="/LitigationDash/CaseDocument" element={<CaseDocumnet/>} />


          
        </Routes>
      </main>
     

      

    </React.Fragment>
    </div>
    
    
  );
}

export default App;
