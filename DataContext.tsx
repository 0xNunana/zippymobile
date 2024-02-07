import React, { ReactNode, createContext, useContext, useState } from 'react';

// Define the shape of your data
interface LoginResponse {
  responseCode: string;
  responseDesc: string;
  accessToken: string;
  data: {
    email: string;
    password: string;
    name: string;
  };
}

// Create a context and provide an initial value
const DataContext = createContext<{ data: LoginResponse | null; setData: (value: LoginResponse | null) => void }>({
  data: null,
  setData: () => {},
});

// Create a context provider component
export const DataProvider= ({ children }:{children:ReactNode}) => {
  // State to hold the data
  const [data, setData] = useState<LoginResponse | null>(null);

  // Function to set data
  const setDataValue = (value: LoginResponse | null) => {
    setData(value);
  };

  return (
    <DataContext.Provider value={{ data, setData: setDataValue }}>
      {/* Pass children through */}
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to consume the context
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
