import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import {ChildCreate,App} from './Create'

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = React.createElement(
    'div',
    {className: 'container'},
    <ChildCreate/>
);
root.render(<App />);
//const create = ReactDOM.createRoot(document.getElementById('create'));
//root.render(<ChildCreate/>);
