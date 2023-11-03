import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  
  const [index,setIndex]=useState(0);
  const [people,setPeople]=useState(data);
  const {id,image,name,title,quote}=people[index];
  



setInterval(() => {
  
  
  
  

    if (index<people.length-1)
    {
      setIndex(index+1)
    
    }
    else{

      setIndex(0)


    }
  


  
}, 2000);


  const checkNumber = (number) =>{
    if (number>people.length -1)
    {
      return 0;
    }
    if (number<0)
    {
      return people.length -1;
    }

    return number;
  }

  const nextPerson = () =>
  {
    setIndex((index) => {
      let newIndex = index +1;
      return checkNumber(newIndex);
    });
  };


 

  const prevPerson = () =>
  {
    setIndex((index) => {
      let newIndex = index -1;
      return checkNumber(newIndex);
    });
  };

  return (

    <main>

      <div className="give" key={id}>

      <h4>{name}</h4>
      <img src={image} alt="" className="person-img" />
      <p className="title">{title}</p>
      <p className='text'>{quote}</p>
      </div>







      <button className="prev" onClick={prevPerson}>
          <FiChevronLeft />
        </button>





        <button className="next" onClick={nextPerson}>
          <FiChevronRight />
          </button>

    </main>
  );
}

export default App;
