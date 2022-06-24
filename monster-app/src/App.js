import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Thanos',
          id: '23e456ty'
        },
        {
          name: 'Lucifer',
          id: '23l856ty'
        },
        {
          name: 'Franklith',
          id: '45e456ty'
        },
        {
          name: 'crix',
          id: '23e46hly'
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          {
            this.state.monsters.map((monster) => {
              return(
                 <div key={monster.id}>
                 <h1 >{monster.name}</h1> 
              </div>
              );
              })
            //console.log(state.monster1)
          }

        </header>
      </div>
    );
  }
}
export default App;
