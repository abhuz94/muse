import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import PropTypes from 'prop-types';
import React from 'react';
import _map from 'lodash/map';

import { BREAK_POINTS, PAGINATION_CONFIG, SLIDES_PER_VIEW } from './ProductSlider.constants';
import ProductCard from '../../molecules/ProductCard';

import 'swiper/css/navigation';
import 'swiper/css';

SwiperCore.use([Navigation, Pagination]);

function ProductSlider({ products, slidesPerView }) {
  return (
    <Swiper
      breakpoints={BREAK_POINTS}
      loop
      loopFillGroupWithBlank
      navigation
      pagination={PAGINATION_CONFIG}
      slidesPerView={slidesPerView || SLIDES_PER_VIEW}
      className="flex "
    >
      {
        _map(products, (product) => (
          <SwiperSlide className="flex justify-center items-center" key={product.id}>
            <ProductCard product={product} key={product.id} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

ProductSlider.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})),
  slidesPerView: PropTypes.number,
};

ProductSlider.defaultProps = {
  products: [],
  slidesPerView: 0,
};

export default ProductSlider;
