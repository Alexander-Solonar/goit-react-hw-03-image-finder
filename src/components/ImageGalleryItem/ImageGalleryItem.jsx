import { Component } from 'react';
import Modal from 'components/Modal';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    isModal: false,
  };

  showModal = () => {
    this.setState({ isModal: true });
  };

  closeModal = e => {
    if (e.currentTarget === e.target) {
      this.setState({ isModal: false });
    }
  };

  onKeyDown = e => {
    console.log(e);
  };

  render() {
    const { item } = this.props;
    const { isModal } = this.state;

    return (
      <li className={css['gallery-item']}>
        <img onClick={this.showModal} src={item.webformatURL} alt="" />
        {isModal && (
          <Modal url={item.largeImageURL} closeModal={this.closeModal}></Modal>
        )}
      </li>
    );
  }
}
export default ImageGalleryItem;
