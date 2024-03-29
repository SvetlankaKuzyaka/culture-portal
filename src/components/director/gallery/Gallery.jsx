import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { Carousel } from 'react-responsive-carousel';
import useDirectorsImages from '../../../utils/useDirectorsImages';
import CarouselStyles from './gallery.module.css';
import './carousel.css';

const Gallery = ({ path }) => {
  const images = useDirectorsImages();

  return (
    <Carousel className={CarouselStyles.carousel}>
      {images[path].gallery.map((item) => (
        <img src={item} alt="" key={uniqid()} />
      ))}
    </Carousel>
  );
};

Gallery.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Gallery;
