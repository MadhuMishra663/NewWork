import React, { createContext, useState } from 'react';

export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [allboards, setAllboards] = useState({
    active: 0,
    boards: {
      name: 'Task Trekker',
      bgcolor: '#254C7E',
      list: [
        { id: 1, title: "Your Task", items: [{ id: "ghd", title: "Description 1" }] },
        // { id: 2, title: "Doing", items: [{ id: "ghdi", title: "Description 2" }] },
        // { id: 3, title: "Done", items: [{ id: "ghdj", title: "Description 3" }] }
      ]
    }
  });

  return (
    <BoardContext.Provider value={{ allboards, setAllboards }}>
      {children}
    </BoardContext.Provider>
  );
};
