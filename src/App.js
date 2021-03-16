import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/Card-list';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch(`http://jsonplaceholder.typicode.com/users`)
      .then(data => data.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App;
