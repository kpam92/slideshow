import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './gallery';
document.addEventListener('DOMContentLoaded',() => {
  const root = document.getElementById('content');
  ReactDOM.render(<Gallery/>,root)
})
