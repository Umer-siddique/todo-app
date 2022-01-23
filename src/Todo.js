import React, { useState } from 'react';

const Todo = () => {

    const [saveItem, setSaveItem] = useState([]);
    const [item, setItems] = useState("");

    const inputEvent = (event) => {
        setItems(event.target.value);
    }

    const addItem = () => {
        
        if(item == ""){
            alert("Please Add Something first....")
            return false;
        }
        else{
        setSaveItem((prevData) => {
            return [...prevData, item]
        });
        setItems("")
    }
      
    }

    const deleteItem=(id)=>{
         setSaveItem((oldItems)=>{
             return oldItems.filter((currElem,index)=>{
                return index!==id;
             })
         })
    }

    const deleteAllItem=()=>{
        setSaveItem([]);
    }

    return (

        <>

            <div className='todo-container'>
                <div className='img-container'>
                    <img src="./images/todo-img.jpg" alt="todo-img" />
                </div>
                <h2 className='todo-heading'>Add your list here 👌</h2>
                <div className='input-container'>
                    <input type="text" placeholder="✍️ Add Items..."
                        onChange={inputEvent}
                        value={item.value}
                    />
                    <i className="fas fa-plus plus-icon"
                        title="Add Item"
                        onClick={addItem}
                    ></i>
                </div>
                <div className='list-container'>
                    <ul>
                        {saveItem.map((currElem,index) => {
                            return (
                                <li className='item-list' key={index}><span>{currElem}</span>
                                    <i className="far fa-trash-alt"
                                        title="Delete Item"
                                        onClick={()=>deleteItem(index)}
                                        ></i>
                                </li>
                            )
                        })}

                    </ul>
                </div>
                <div className='clear-btn-div'>
                    <button className='dlt-list' 
                    title='Clear List'
                    onClick={deleteAllItem}
                    >Clear List</button>
                </div>
            </div>

        </>

    );
};

export default Todo;
function newFunction(setItem) {
    setItem("myname");
}

