import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import css from './App.module.css';

export class App extends Component {
  state = {
    namePictures: '',
    page: 1,
  };

  handleNameChange = namePictures => {
    this.setState({ namePictures, page: 1 });
  };

  handlePageChange = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { namePictures, page } = this.state;

    return (
      <div className={css.app}>
        <Searchbar onSearch={this.handleNameChange}></Searchbar>
        <ImageGallery
          namePictures={namePictures}
          page={page}
          handlePageChange={this.handlePageChange}
        ></ImageGallery>
        <ToastContainer></ToastContainer>
      </div>
    );
  }
}
