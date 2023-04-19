import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    namePictures: '',
  };

  handleNameChange = event => {
    const { value } = event.target;

    this.setState({ namePictures: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { namePictures } = this.state;

    if (namePictures.trim() === '') {
      return;
    }
    this.props.onSubmit(namePictures);
    this.setState({ namePictures: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css['button-label']}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.namePictures}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
