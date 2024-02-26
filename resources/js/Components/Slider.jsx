import SlickSlider from 'react-slick'
import Icon from "./Icon";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SlickArrow = ({ onClick, children, customClass }) => (
    <div onClick={onClick} className={customClass}>
        {children}
  </div>
);

const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <SlickArrow customClass="absolute -top-7 right-4">
        <Icon name="arrow-next" size="14" className="dark:fill-gray-300"/>
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow customClass="absolute -top-7 right-12">
        <Icon name="arrow-prev" size="14" className="dark:fill-gray-300" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1179,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  }

const Slider = ({children}) => {
    return (  
    <SlickSlider {...settings}>
        {children}
    </SlickSlider>
    );
};

export default Slider;