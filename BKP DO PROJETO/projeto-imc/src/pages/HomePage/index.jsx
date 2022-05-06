import React, {useContext,}from 'react';

import { AuthContext } from '../../contexts/auth';



const HomePage = () => {
    const { logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout();

    };
    
    return (
        <>
   <nav className="navbar">
 
     <div className="logo">SIS.?</div>
   
     <ul className="nav-links">
    
     
       <div className="menu">
         <li><a href="/">Home</a></li>
         <li><a href="/">Pacientes</a></li>
         <li className="services">
           <a href="/">Serviços</a>
      
           <ul className="dropdown">
             <li><a href="/">Calcular IMC</a></li>
             <li><a href="/">Calendário</a></li>
           </ul>
         </li>
         <li><a href="/">Consultas</a></li>
         <button className="exit" onClick={handleLogout}>Sair</button>
       </div>
     </ul>
   </nav>
    </>
    );

};
export default HomePage;