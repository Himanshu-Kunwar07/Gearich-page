import React from 'react';

import {images } from '../../constants';

const SubHeading = (probs) => (
  <div style = {{marginBottom: '1rem'}}>
    <p className = "p__cormorant">{probs.title}</p>
    <img src={images.spoon} alt="spoon" />
  </div>
);

export default SubHeading;
