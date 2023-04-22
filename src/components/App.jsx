import { Component } from 'react';
import { Audio } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import * as API from './service/api';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button/Button';

import css from './App.module.css';

export class App extends Component {
  state = {
    collection: [],
    isLoading: false,
    isButton: false,
    namePictures: '',
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { namePictures, page } = this.state;

    if (prevState.namePictures !== namePictures || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const response = await API.fetchPictures(namePictures, page);

        this.setState(({ collection }) => ({
          collection: [...collection, ...response],
        }));

        if (response.length < 12) {
          this.setState({ isLoading: false, isButton: false });
          return;
        }

        this.setState({ isLoading: false, isButton: true });
      } catch (error) {
        this.setState({ isLoading: false });
        console.log(error.message);
      }
    }
  }

  handleStateChange = namePictures => {
    if (namePictures === this.state.namePictures) {
      return;
    }
    this.setState({ namePictures, page: 1, collection: [], isButton: false });
  };

  handlePageChange = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isButton: false,
    }));
  };

  render() {
    const { isLoading, isButton, collection } = this.state;

    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleStateChange}></Searchbar>
        <ImageGallery items={collection}></ImageGallery>
        {isLoading && <Audio wrapperClass={css.loader}></Audio>}
        {isButton && <Button onClick={this.handlePageChange}></Button>}
      </div>
    );
  }
}
