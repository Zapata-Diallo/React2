import React from 'react';
import dv from './dv.jpeg'
function Profil () {
    let firstName = "ALpha"
    let lastName = "Diallo"
  return (<div>
    <img src={dv} className='MON-profil' alt ="AlphaDIallo" />
    <p>{firstName} {lastName}</p>
  </div>)
}
export default Profil