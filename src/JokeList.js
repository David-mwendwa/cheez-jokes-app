import React, { Component } from 'react';
import axios from 'axios';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  state = { jokes: [] };

  async componentDidMount() {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      });
      jokes.push(res.data.joke);
    }

    this.setState({ jokes: jokes });
  }

  render() {
    return (
      <div className='JokeList'>
        <h1>Dad jokes</h1>
        <div className='JokeList-jokes'>
          {this.state.jokes.map((joke) => (
            <div>{joke}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
