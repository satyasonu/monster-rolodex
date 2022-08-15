import React, {Component} from 'react'

import { CardList } from './component/card-list/card-list.component';

import './App.css'
import SearchBar from './component/search-bar/search-bar.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    this.handleChange = this.handleChange.bind(this);
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  handleChange(e){
    this.setState({searchField: e.target.value})
  }

  render(){
    const { monsters, searchField} = this.state;
    const monstersFiltered = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className='App'>
        <h1 className='title'>Monster Rolodex</h1>
        <SearchBar placeholder={`Search Monsters`} handleChange={this.handleChange} />
        {/* <input type='search' placeholder='Search Monsters' onChange={(e) => this.setState({searchField:e.target.value})}/> */}
        <CardList monsters={monstersFiltered}/>
      </div>
    )
  }
}

export default App;