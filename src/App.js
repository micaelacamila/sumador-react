import React from 'react';

import axios from 'axios';

export default class App extends React.Component {
  state={
    children:[]
  }
  componentDidMount(){
    const axios = require('axios');
    axios.get("http://localhost:36882/api/Children").then(resp=>{
      //console.log(resp.data);
      const children = resp.data;
      this.setState({children});
      console.log(this.state.children);
    });
  }
  render(){
    return (
      <div>
        <h1>List of Children</h1>
        <ul>
          {this.state.children.map(child=><li>{child.name} | {child.gender} | {child.birthDate}</li>)}
        </ul>
      </div>
      
     );
  }
}

