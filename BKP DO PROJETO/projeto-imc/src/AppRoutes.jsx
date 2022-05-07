import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";


import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import PacientesPage from './pages/PacientesPage';
import ConsultasPage from './pages/ConsultasPage';

import { AuthContext, AuthProvider} from './contexts/auth';

const AppRoutes = () => {
    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading) {
            return <div className="loading">CALMA PORRA</div>
        }
       if (!authenticated){
           return <Navigate to="/login" />;
       }

       return children;
    };
    return(
        <Router>
            <AuthProvider>
            <Routes>
                <Route exact path="/login" element={<LoginPage></LoginPage>}/>
                <Route exact path="/" element={<Private><HomePage></HomePage></Private>}/>
                <Route exact path="/pacientes" element={<Private><PacientesPage></PacientesPage></Private>}/>
                <Route exact path="/consultas" element={<Private><ConsultasPage></ConsultasPage></Private>}/>
            </Routes>
            
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;