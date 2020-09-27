import React from 'react';
import FilmsList from './components/FilmsList/FilmsList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import CharactersList from './components/CharactersList/CharactesList';
import { Filters } from './components/Filters/Filters';

const url = 'http://swapi.dev/api/films/';

interface AppProps {}

interface AppState {
  filmsUrlList: string[];
  charactersUrlList: string[];
}

export default class App extends React.Component<AppProps, AppState> {
  state = {
    filmsUrlList: [],
    charactersUrlList: [],
  };

  componentDidMount() {
    axios.get(url).then((res) => {
      const filmsCount = res.data.count;

      let filmsUrlList = [];
      for (let i = 1; i <= filmsCount; i++) {
        filmsUrlList.push(`${url}${i}`);
      }

      this.setState({ filmsUrlList });
    });
  }

  updateCharactersUrlList = (charactersUrlList: string[]) => {
    this.setState({ charactersUrlList });
  };

  updateFilmsUrlList = (filmsUrlList: string[]) => {
    this.setState({ filmsUrlList });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Filters />
            <FilmsList
              filmsUrlList={this.state.filmsUrlList}
              updateCharacters={this.updateCharactersUrlList}
            />
          </Route>
          <Route path='/characters'>
            <CharactersList
              charactersUrlList={this.state.charactersUrlList}
              updateFilmsUrlList={this.updateFilmsUrlList}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}
