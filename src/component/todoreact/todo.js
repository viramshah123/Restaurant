import React from 'react'
import "./style.css";

const Todo = () => {
  return (
    <>
     <div className='mail_div'>
        <div className='child_div'>
            <figure>
               <p>Add Your List</p>
            </figure>
            <div className='addItems'>
                <imput type="text" placeholder="Add Items" className="form-control" />
                <i className='fa fa-plus'></i>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Todo
