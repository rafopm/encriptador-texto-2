import React from 'react';

export default function Encriptor ( props) {

    console.log('---->', props.defaultValue);
    
  return (
    <div>
    <input type="text" value={props.defaultValue} onChange={props.onChange} />
    </div>
  );
}
