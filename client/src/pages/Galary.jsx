import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text } from '@chakra-ui/react';

const Galary = () => {
  const arr = [
    {
      img: "https://8515463.fs1.hubspotusercontent-na1.net/hubfs/8515463/What%20is%20sustainable%20land%20management%20-Pillar%20%20Combating%20Desertification_featured.png"
    },
    {
      img: "https://d2jdgazzki9vjm.cloudfront.net/definition/images/land-definition.png"
    },
    {
      img: "https://img.freepik.com/free-photo/beautiful-landscape-with-small-village_23-2149721819.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1727136000&semt=ais_hybrid"
    },
    {
      img: "https://cdn.farmjournal.com/s3fs-public/styles/840x600/public/2023-03/Land%20-%20aerial%20-%20Lindsey%20Pound%202.jpg"
    },
    {
        img:"https://www.nobroker.in/blog/wp-content/uploads/2023/01/Types-Of-Land-Zoning-1.jpg"  
      }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Slower transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Faded effect
    cssEase: 'linear' // Smooth transition
  };

  return (
    <div id='gallery' style={{ width: '96%', margin: 'auto' }}>
      <Text fontSize="5xl" fontWeight={"bold"} textAlign="center" color="green" mb={4}>
        GALLERY
      </Text>
      <Slider {...settings}>
        {arr.map((ele, index) => (
          <div key={index}>
            <img 
              src={ele.img} 
              alt={`slide-${index}`} 
              style={{ 
                width: '100%', 
                height: '80vh', 
                objectFit: 'cover' 
              }} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Galary;
