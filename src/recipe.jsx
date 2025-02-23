import React, { forwardRef } from 'react';
import ReactMarkDown from 'react-markdown';

const Recipe = forwardRef((props, ref) => {
  return (
    <section className='recipe-list' ref={ref} aria-label='polite'>
      {props.recipes ? <ReactMarkDown>{props.recipes}</ReactMarkDown> : <div className="loader" id="loader"></div>}
    </section>
  );
});

export default Recipe;
