import React, { useEffect } from 'react';
import Navigation from '../Navigation';


function Header(props) {

   const {
      currentPage,
      setCurrentPage
   } = props;

   return (
      <header>
         <h1>
            Amelia Rawls
         </h1>
         <Navigation
         currentPage={currentPage}
         setCurrentPage={setCurrentPage}
         />
      </header>
   );

}

export default Header;