import { createContext, useContext, useState } from 'react';

const GraphContext = createContext(null);

export const GraphProvider = ({ children }) => {
  const [fillColor, setFillColor] = useState('#E800A4');
  const colors = ['#E800A4', '#A81AE9', '#FFC700', '#C5FF55', '#3B72FF', '#93B1FF', '#BBE8AA'];
  
  const handleColorChange = (color) => {
    setFillColor(color);
  };

  const value = {
    fillColor,
    setFillColor,
    colors,
    handleColorChange,
  };

  return <GraphContext.Provider value={value}>{children}</GraphContext.Provider>;
};

export const useGraph = () => {
  const context = useContext(GraphContext);
  if (!context) {
    throw new Error('useGraph must be used within a GraphProvider');
  }
  return context;
};

export default GraphContext;
