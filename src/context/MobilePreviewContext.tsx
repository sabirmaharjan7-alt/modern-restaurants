import React, { createContext, useContext } from 'react';

const MobilePreviewContext = createContext<boolean>(false);

export const useMobilePreview = () => useContext(MobilePreviewContext);

export const MobilePreviewProvider: React.FC<{ value: boolean; children: React.ReactNode }> = ({ value, children }) => {
  return (
    <MobilePreviewContext.Provider value={value}>
      {children}
    </MobilePreviewContext.Provider>
  );
};
