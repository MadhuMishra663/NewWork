import React, { useContext, useState } from "react";
import "../Style/sidebar.css";
import { ChevronLeft, ChevronRight, Plus, X } from "react-feather";
import { Popover } from "react-tiny-popover";
import { BoardContext } from "./context/BoardContext";

const Sidebar = () => {
  const [disappear, setDisappear] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const [newBoardTitle, setNewBoardTitle] = useState("");
  const [newBoardColor, setNewBoardColor] = useState("#ffffff");
  const { allboards, setAllboards } = useContext(BoardContext);

  const setActiveBoard = (i) => {
    const newBoard = { ...allboards };
    newBoard.active = i;
    setAllboards(newBoard);
  };

  const createBoard = () => {
    if (newBoardTitle.trim() === "") return;

    const newBoard = {
      id: Date.now(),
      title: newBoardTitle,
      bgcolor: newBoardColor,
      list: [],
    };

    setAllboards((prevBoards) => ({
      ...prevBoards,
      boards: {
        ...prevBoards.boards,
        list: [...prevBoards.boards.list, newBoard],
      },
    }));

    setNewBoardTitle("");
    setNewBoardColor("#ffffff");
    setShowPop(false);
  };

  return (
    <div className="sidebar" style={{ width: disappear ? "40px" : "280px" }}>
      {disappear ? (
        <div>
          <button className="arrow" onClick={() => setDisappear(!disappear)}>
            <ChevronRight size={18} />
          </button>
        </div>
      ) : (
        <div className="sidebar-content">
          <div className="workspace">
            <h3>Workspace</h3>
            <button className="arrow" onClick={() => setDisappear(!disappear)}>
              <ChevronLeft size={18} />
            </button>
          </div>
          <div className="boards">
            <div className="lists">
              <h4>Boards</h4>
              <Popover
                isOpen={showPop}
                align="start"
                positions={["right", "top", "bottom", "left"]}
                content={
                  <div className="popover-content">
                    <div className="content4">
                      <button onClick={() => setShowPop(!showPop)} className="x-bar">
                        <X />
                      </button>
                      <h3>Create Board</h3>
                      <div className="formelement">
                        <label htmlFor="title">
                          Board Title<span>*</span>
                        </label>
                        <input
                          type="text"
                          className="titlebox"
                          value={newBoardTitle}
                          onChange={(e) => setNewBoardTitle(e.target.value)}
                        />
                        <label htmlFor="color">
                          Board Color<span>*</span>
                        </label>
                        <input
                          type="color"
                          className="colorbox"
                          value={newBoardColor}
                          onChange={(e) => setNewBoardColor(e.target.value)}
                        />
                        <button className="createButton" onClick={createBoard}>
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                }
                onClickOutside={() => setShowPop(false)}
              >
                <div className="popover-trigger" onClick={() => setShowPop(!showPop)}>
                  <button className="plusicon">
                    <Plus size={16} />
                  </button>
                </div>
              </Popover>
            </div>
          </div>
          <ul>
            {allboards.boards.list.map((board, i) => (
              <li key={board.id} className="liststyle">
                <button className="spanButton" onClick={() => setActiveBoard(i)}>
                  <span className="forColor" style={{ backgroundColor: `${board.bgcolor}` }}>&nbsp;</span>
                  <span>{board.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
