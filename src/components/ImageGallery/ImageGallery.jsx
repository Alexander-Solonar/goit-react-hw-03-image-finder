import ImageGalleryItem from 'components/ImageGalleryItem/';
import * as API from '../service/api';
import { Audio } from 'react-loader-spinner';
import css from './ImageGallery.module.css';
import { Component } from 'react';

class ImageGallery extends Component {
  state = {
    pictures: [],
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { namePictures } = this.props;

    if (prevProps.namePictures !== namePictures) {
      try {
        this.setState({ isLoading: true });
        const pictures = await API.getImages(namePictures);
        this.setState({ pictures });
        this.setState({ isLoading: false });
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const { pictures, isLoading } = this.state;

    return (
      <div>
        {isLoading ? (
          <div className={css.loader}>
            <Audio></Audio>
          </div>
        ) : (
          <ul className={css.gallery}>
            {pictures.map(item => (
              <ImageGalleryItem key={item.id} item={item}></ImageGalleryItem>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ImageGallery;
