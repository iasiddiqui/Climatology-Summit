import React, { useState } from 'react';

const RegistrationType = () => {
  const [selected, setSelected] = useState('poster');

  return (
    <div className="registration-type">
      <h2>Registration Type</h2>
      <div>
        <label>
          <input 
            type="radio" 
            name="registration" 
            value="speaker" 
            checked={selected === 'speaker'}
            onChange={() => setSelected('speaker')}
          />
          Speaker Registration - $799
        </label>
        <label>
          <input 
            type="radio" 
            name="registration" 
            value="poster" 
            checked={selected === 'poster'}
            onChange={() => setSelected('poster')}
          />
          Poster Presentation - $499
        </label>
        {/* Add other registration types similarly */}
      </div>
    </div>
  );
}

export default RegistrationType;
