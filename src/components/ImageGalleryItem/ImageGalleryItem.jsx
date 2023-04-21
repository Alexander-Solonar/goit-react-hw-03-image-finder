import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    isModal: false,
  };

  openModal = () => {
    this.setState({ isModal: true });
  };

  handleClick = e => {
    if (e.currentTarget === e.target) {
      this.setState({ isModal: false });
    }
  };

  handlePress = e => {
    if (e.key === 'Escape') {
      this.setState({ isModal: false });
    }
  };

  render() {
    const { largeImageURL, tags, webformatURL } = this.props.item;

    const { isModal } = this.state;

    return (
      <li
        className={css['gallery-item']}
        tabIndex="0"
        onKeyDown={this.handlePress}
      >
        <img onClick={this.openModal} src={webformatURL} alt={tags} />
        {isModal && (
          <Modal
            url={largeImageURL}
            tag={tags}
            closeModal={this.handleClick}
          ></Modal>
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
