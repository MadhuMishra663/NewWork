import React, { useContext } from 'react';
import '../Style/main.css';
import { Edit2, MoreHorizontal, UserPlus } from 'react-feather';
import AddCards from './AddCards';
import { BoardContext } from './context/BoardContext';

const Main = () => {
  const { allboards } = useContext(BoardContext);
  const bdata = allboards.boards.list[allboards.active];

  return (
    <div className='mainDiv'>
      <div className='main1'>
        <h2>My Board</h2>
        <div className='buttondiv'>
          <button className='buttonshare'>
            <UserPlus size={16} /> Share...
          </button>
        </div>
      </div>
      <div className='maincenterdiv'>
        <div className='mainwraper'>
          <div className='maincenter2'>
            <div className='list-body'>
              <div className='listsofspanandpoint'>
                <span>{bdata.name}</span>
                <button className='listhorizontal'><MoreHorizontal size={16} /></button>
              </div>
              <div className='items'>
                <span>Project description</span>
                <span>
                  <button className='edit'><Edit2 size={16} /></button>
                </span>
              </div>
              <AddCards getcard={(e)=>cardData(e)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
