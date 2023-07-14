import React from 'react';
import { useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [circles, setcircles] = useState([{id:1, count: 0, color: 'yellow'}]);

 const getColor = () => {
  const colors = ['green' , ' orange', 'purple', 'red' , 'violet', 'blue',] ;
  const Index = Math.floor(Math.random()* colors.length);
  return colors[Index];
 };

 const duplicateCircle = (circleID) => {
  const circleduplicate = circles.find((circle) => circle.id === circleID);
  if (!circleduplicate) 
  return;
  if(circles.length >= 10)
  return ;

  const newId = circles.length + 1;
  const newCircle = { ...circleduplicate, id: newId, count: 0 };
  setcircles([...circles, newCircle]);
 };
 
const addCount = (circleID) =>{
  setcircles((prevCircles) =>
  prevCircles.map((circle) =>{
    if(circle.id === circleID){
      const randomColor = getColor();
      return { ...circle, count: circle.count + 1, color: randomColor };
    }
    return circle;
  })
  );
};
 


const renderCircle = (circle) => {
  return (
    <div className="circle" style={{ backgroundColor: circle.color }}>
      <div className="count">{circle.count}</div>
      <div className="color">{circle.color}</div>
      
    </div>
  );
};

  
return (
 <div className="circle-container">
    
    {circles.map((circle) => (
      <React.Fragment key={circle.id}>
        {renderCircle(circle)}
        <button onClick={() => addCount(circle.id)}>Increase</button>
        <button onClick={() => duplicateCircle(circle.id)}>Duplicate</button>
      </React.Fragment>
    ))}
    </div>
  
  
     
  
);
};
 
  


export default Home