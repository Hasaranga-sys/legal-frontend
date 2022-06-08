import React from 'react'
import { Router, Route,Routes } from 'react-router-dom'
import LitigationDash from '../Litigation/LitigationDash'

function LitigationRoutes(){
    return(
        <div>
            <Router>
                <div>
                    <Routes>
                        <Route exact path="/LitigationDash" element={<LitigationDash/>} />
                    </Routes>
                </div>

            </Router>
        </div>
    )
}

export default LitigationRoutes