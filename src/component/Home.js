import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {
constructor () {
super();
this.state = {
// count: 0,
fruits: ['banana', 'apple', 'orange'],
persons: []
}
// this.addcount = this.addcount.bind(this);
}

// addcount () {
// let count = this.state.count;
// this.setState ({
// count: ++count
// })
// }

componentDidMount() {
  axios.get(`https://jsonplaceholder.typicode.com/users`)
  .then(res => {
  const persons = res.data;
  this.setState({ persons });
  })
}

  render(){
    return(
    <div>
      <ul>
      {this.state.fruits.map((fruits, index) => {
        return <li key={index}>{fruits}</li>
      })}
      </ul>
      <ul>
        { this.state.persons.map(person => <li>{person.email}</li>)}
      </ul>
    </div>
    );
    }
  }
  export default App;
