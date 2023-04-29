import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div>
      <h2>This Is Our Terms & Condition</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores repellat repellendus officia facere vitae modi rerum, iure rem deserunt facilis dolor ut praesentium magnam repudiandae omnis, sed at maiores odit?</p>
      <p>go back to <Link to='/register'>Register</Link></p>
    </div>
  );
};

export default Terms;