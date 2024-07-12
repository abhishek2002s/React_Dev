import { useState } from 'react';
// import { setDate } from 'react';
import './ProductForm.css';

function ProductForm(props){

const [newtitle,setTitle] = useState('');
const [newdate, setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
        // console.log(event.target.value);
    }




    function dateChangeHandler(event){
         setDate(event.target.value);
    }

    //craete object by create button preventDefault;
   function submitHandler(event){
     event.preventDefault();

     const productData = {
       title:newtitle,
       date:newdate
     };

    //  console.log(productData);

    //call propsFuntion
   props.onSaveProduct(productData);

     setTitle('');
     setDate('');


   }

    return(
        <form onSubmit={submitHandler}>
 
 <div className='new-products'>
 <div className='new-prod'>
                <label>Title</label>
                <input type='text' value={newtitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-prod'>
                <label>Date</label>
                <input type='date' value={newdate}  onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
            </div>
            <div className='new-productbutton' >
                <button type='submit'>Added to cart</button>
            </div>
 </div>


    
        </form>
    )
}

export default ProductForm;