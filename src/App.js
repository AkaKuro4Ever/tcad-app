import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
      githubInfo: []
    }

  handleClick = e => {
    e.preventDefault();
    fetch('https://github.com/users/akakuro4ever/repos', {
      credentials: 'include', // Useful for including session ID (and, IIRC, authorization headers)
      mode: 'no-cors'
    })
    .then(response => response.json())
    .then(data=> {this.setState({githubInfo: [data]})
    });
  }
  showRepositories = (event, data) => {
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}
showRepositories1 = (event, data) => {
  //this is set to the XMLHttpRequest object that fired the event
  console.log(this.responseText)
}
  newHandleClick = e => {
    const req = new XMLHttpRequest()
    req.addEventListener("load", this.showRepositories1);
    req.open("GET", 'https://api.github.com/users/octocat/repos')
    req.send()
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="#" onClick={this.newHandleClick}>
            Click here to Find some of Deborah's Projects
          </a>
          <p> Welcome to the Learn About Deborah Page!</p>
          <div id="respositories">
          {this.state.githubInfo}
          </div>
        </header>
      </div>
    );
  }
}


export default App;
