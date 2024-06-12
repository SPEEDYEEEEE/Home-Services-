// // ServiceContext.js
// import React, { createContext, useState, useEffect } from 'react';

// const LoginContext = createContext();

// export const LoginProvider = ({ children }) => {

//   const [login, setLogin] = useState([]);

//   useEffect(() => {
//     axios.post('http://localhost:3000/api/users/u-login', data)
//       .then(response => {
//         const data = response.data;
//         setLogin(data);
//       })
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <ServiceContext.Provider value={[login, setLogin]}>
//       {children}
//     </ServiceContext.Provider>
//   );
// };

// export default LoginContext;