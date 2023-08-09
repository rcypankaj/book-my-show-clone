import { Fragment } from "react";
import Slider from "react-slick";
import Poster from "./Poster";

const PosterSlider = (props) => {
  const { posters, title, subtitle, isDark, config } = props;

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <div className="flex flex-col items-start sm:ml-3 ml-0 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subtitle}
        </p>
      </div>
      {config && (
        <Slider {...config}>
          {posters.map((each) => (
            <Poster {...each} isDark={isDark} key={each.id} />
          ))}
        </Slider>
      )}
      {!config && (
        <Slider {...settings}>
          {posters.map((each) => (
            <Poster {...each} isDark={isDark} key={each.id} />
          ))}
        </Slider>
      )}
    </Fragment>
  );
};

export default PosterSlider;
