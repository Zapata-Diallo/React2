import React from 'react'
import FullName from './FullName';
import Adresse from './Adresse'
import ProfilPhoto from './ProfilPhoto'
function App() {
  return (
    <div className="App">
      <ProfilPhoto />
     <FullName />
     <Adresse />
    </div>
  );
}

export default App;
