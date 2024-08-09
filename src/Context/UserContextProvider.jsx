import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

// import { useState } from "react";

// import UserContext from "./UserContext";

// const UserContextProvider = (children) => {
//     const [user, setUser] = useState(null);
//   return(
//     // value is used to give access to the property we want to give them
//     // and it is passed inside a object using {}, this can also be seen as as we are passing the prop
//     <UserContext.Provider value={{user, setUser} }>
//     {children}
//     </UserContext.Provider>
//   );

// export default UserContextProvider
