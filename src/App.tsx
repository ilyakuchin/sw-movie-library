import React from 'react';
import FilmsList from './FilmsList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import CharactersList from './CharactesList';

const url = 'http://swapi.dev/api/films/';

export interface IAppProps {}

export interface IAppState {
  filmsUrlList: string[];
  charactersUrlList: string[];
}

export default class App extends React.Component<{}, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      filmsUrlList: [],
      charactersUrlList: [],
    };

    this.updateCharactersUrlList = this.updateCharactersUrlList.bind(this);
    this.updateFilmsUrlList = this.updateFilmsUrlList.bind(this);
  }

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

  updateCharactersUrlList(charactersUrlList: string[]) {
    this.setState({ charactersUrlList });
  }

  updateFilmsUrlList(filmsUrlList: string[]) {
    this.setState({ filmsUrlList });
  }

  public render() {
    return (
      <Router>
        <div>Filters</div>
        <Switch>
          <Route exact path='/'>
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
