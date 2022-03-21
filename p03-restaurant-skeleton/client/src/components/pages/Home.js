import React from 'react';

export default function Home() {
  function buttonT() {
    console.log('hellobtn')
  }

  return (
  
    <button type="button" className="btn btn-outline-primary" onClick={() => buttonT()}>Primary</button>
   
  );
}
