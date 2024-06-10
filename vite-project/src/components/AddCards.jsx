import React, { useState } from 'react'
import '../Style/addcard.css'
import { Plus, X } from 'react-feather'
const AddCards = (props) => {
    const [appear, setAppear]= useState(false);
    const [cards, setCards] = useState("");
    const saveCard=()=>{
        if(!cards){
            return;
        }
        props.getcard(cards);
        setCards("");
        setAppear(!appear)
    }
    const close=()=>{
        setAppear(!appear);
        setCards("");
    }
  return (
    <>
    <div className='cardadd'>
      {appear && <div>
        <textarea className='text-area' value={cards} onChange={(e)=>setCards(e.target.value)} name="" id="" cols="38" rows="8" placeholder='Enter Title'></textarea>
        <div className='buttonsandcrossicon'> 
            <button onClick={()=>saveCard()} className='add-button'>Add Card</button>
            <button onClick={()=>close()} className='x-button'><X size={16}/></button>
        </div>
      </div>}
     { !appear && <button onClick={()=>setAppear(!appear)}className='addacard'>
        <Plus size={16}/> Add a card
      </button>}
    </div>
    </>
  )
}

export default AddCards
