import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Circle = (props) => {
//   const percentage = 60;

  return (
    <div className="w-32 h-32">
        <div>
        <CircularProgressbar 
        value={props.percentage} 
        text={`${props.percentage}%`} 
        styles={{
          path: {
            stroke: '#ff9f05', // Customize color
            strokeWidth: 9, // Customize stroke width
          },
          text: {
            fill: '#333', // Customize text color
            fontSize: '16px', // Customize text size
          },
        }}
      />
        </div>
     
    </div>
  );
};

export default Circle;