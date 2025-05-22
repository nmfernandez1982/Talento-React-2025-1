import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => 
  {
  const [user, setUser] = useState(null);

      const fetchRandomUser = async () => 
        {
        const res = await fetch('https://randomuser.me/api/');
        const data = await res.json();
        setUser(data.results[0]);
      };

      useEffect(() => 
        {
        fetchRandomUser(); 
      }, []);

      return (
        <UserContext.Provider value={{ user, fetchRandomUser }}>
          {children}
        </UserContext.Provider>
      );
};


