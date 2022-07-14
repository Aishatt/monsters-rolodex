import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    //Monsters rolodex is a tool that shows you a bunch of diff users
    this.state = {
      monsters: [], //initialize our array as empty
    };
  }
  //when to make API request to get our info,o the mthd nly happens once
  componentDidMount() {
    //fetch from api
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
        () => {
          console.log(this.state);
        }
      ));
  }
  //render our app function
  render() {
   
    const filtered = this.state.monsters.filter((monster) => {
      //return user name if it includes the typed letters
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className='search-box'
          placeholder='search-monster'
          onChange={ //anonnymous function
            (event) => {
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
        />

        {
          //.map method allows you to iterate over every single element
          //inside of the array from left to right
          
            filtered.map((monster) => {
              return (
                <div key={monster.id}>
                  <h1 > {monster.name}  </h1>
                </div>
              );
            })
            //console.log(state.monster1)
          }
      </div>
    );

  }
}
export default App;
