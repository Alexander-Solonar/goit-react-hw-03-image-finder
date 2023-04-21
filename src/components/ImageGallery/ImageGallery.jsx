import { Component } from 'react';
import * as API from '../service/api';
import { Audio } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/';
import Button from '../Button/Button';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    collection: [],
    isLoading: false,
    isButton: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { namePictures, page } = this.props;

    if (prevProps.namePictures !== namePictures) {
      this.setState({ collection: [] });
      this.setState({ isButton: false });
    }

    if (prevProps.namePictures !== namePictures || prevProps.page !== page) {
      try {
        this.setState({ isLoading: true });
        const response = await API.fetchPictures(namePictures, page);

        if (response.length === 0) {
          this.setState({ isLoading: false });
          return toast.error(
            'Oops, there is no collection of images for this request!'
          );
        }

        this.setState(({ collection }) => ({
          collection: [...collection, ...response],
        }));

        this.setState({ isLoading: false });
        this.setState({ isButton: true });
      } catch (error) {
        this.setState({ isLoading: false });
        toast.error(error.message);
      }
    }
  }

  render() {
    const { collection, isLoading, isButton } = this.state;
    const { handlePageChange } = this.props;

    return (
      <div>
        <ul className={css.gallery}>
          {collection.map(item => (
            <ImageGalleryItem key={item.id} item={item}></ImageGalleryItem>
          ))}
        </ul>
        {isLoading && <Audio wrapperClass={css.loader}></Audio>}
        {isButton && (
          <Button
            handlePageChange={() => {
              handlePageChange();
              this.setState({ isButton: false });
            }}
          ></Button>
        )}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  namePictures: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default ImageGallery;
