import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

import { Component } from 'react';

export class App extends Component {
  state = {
    namePictures: '',
  };

  changeStateName = async namePictures => {
    this.setState({ namePictures });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.changeStateName}></Searchbar>
        <ImageGallery namePictures={this.state.namePictures}></ImageGallery>
      </div>
    );
  }
}
