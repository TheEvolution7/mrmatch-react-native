// IsIconOnStyleContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface IsIconOnStyleContextType {
  isIconOn: boolean;
  setIsIconOn: (isOn: boolean) => void;
}

const IsIconOnStyleContext = createContext<IsIconOnStyleContextType | undefined>(undefined);

export const IsIconOnStyleProvider: React.FC = ({ children }) => {
  const [isIconOn, setIsIconOn] = useState(false);

  return (
    <IsIconOnStyleContext.Provider value={{ isIconOn, setIsIconOn }}>
      {children}
    </IsIconOnStyleContext.Provider>
  );
};

export const useIsIconOnStyle = (): IsIconOnStyleContextType => {
  const context = useContext(IsIconOnStyleContext);
  console.log(context)
// //   if (!context) {
//     throw new Error('useIsIconOnStyle must be used within an IsIconOnStyleProvider');
//   }
  return context;
};
