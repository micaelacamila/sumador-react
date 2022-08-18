import React from 'react';
import axios from 'axios';

class ChildCreate extends React.Component {
  state = {
    Name: '',
  }

  handleChange = event => {
    this.setState({ Name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      Name: this.state.Name
    };

    axios.post("http://localhost:36882/api/Children",  user )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
class App extends React.Component {
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
export {ChildCreate,App};