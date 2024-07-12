import React from 'react';
// import NewProduct from './components/NewProduct';
import Product from './component/Product';
import NewProduct from './component/NewProduct';


const  App = () => {

  const product = [
    {
      id:'p1',
      title: 'Abhishek',
      amount : 130,
      date : new Date(2001, 12, 28),
     
    },
    {
        id:'p2',
        title:'Krishna',
        amount:450,
        date: new Date(2004, 7, 5),
    },
    {
      id:'p3',
      title:'Amit',
      amount:455,
      date: new Date(2001, 23, 5),
    },
    {
      id:'p4',
      title:'Naman',
      amount:465,
      date: new Date(2003, 7, 5),
    },
  ];

  //function pass
 function printProductDate(data){
  console.log("Iam iside App.js");
  console.log(data);
 }

  return (
    <div className="App">
    {/* //props function passs to NewProduct */}
    <NewProduct printProduct = {printProductDate}/>
       <Product items={product} />
    </div>
  );
}

export default App;
