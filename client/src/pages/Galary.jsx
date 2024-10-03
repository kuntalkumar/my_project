import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text } from '@chakra-ui/react';
import "./page.css"

const Gallery = () => {
  const arr = [
    {
      img: "https://kelsa-clients-production.s3.ap-south-1.amazonaws.com/uploads/accounts/5/pipelines/10/files/c3e1de65-2580-49e8-af9b-f6fed5c2454e/WhatsApp+Image+2024-09-28+at+00.12.57+%281%29.jpeg"
    },
    {
      img: "https://kelsa-clients-production.s3.ap-south-1.amazonaws.com/uploads/accounts/5/pipelines/10/files/e7a81348-0f42-4507-ba8a-fa73d8c0dc81/WhatsApp+Image+2024-09-28+at+00.12.57+%282%29.jpeg"
    },
    {
      img: "https://kelsa-clients-production.s3.ap-south-1.amazonaws.com/uploads/accounts/5/pipelines/10/files/e5a75ce5-fdbb-4dfc-b9b5-c3c4076d0468/WhatsApp+Image+2024-09-28+at+00.12.58+%282%29.jpeg"
    },
    // Additional images can be added here
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
    <div id='gallery' style={{ margin:"auto" }}>
      <Text className='pageHeading' fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
        GALLERY
      </Text>
      <Slider {...settings}>
        {arr.map((ele, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img 
              src={ele.img} 
              alt={`slide-${index}`} 
              style={{ 
                width: '100%', 
                height: 'auto', // Responsive height
                maxHeight: '80vh', // Maximum height
                objectFit: 'cover' 
              }} 
              onError={(e) => { e.target.src = 'fallback-image-url.jpg'; }} // Add fallback image URL
            />
          </div>
        ))}
      </Slider>
      <Text fontSize="2xl" fontWeight={"bold"} textAlign="center" className='defaultPageParagraph' mb={4} mt={5}>
        Where Every View is a Scenic Escape
      </Text>
      <Text className='defaultPageParagraph' textAlign="center" mb={4}>
        Redefine your weekends and choose the luxury of being one with nature! With three sides covered by a 27,000 acre lush forest, a hillock within the project, a stream flowing through its center, and the melody of birds chirping around you,
        ReWild Doddaballapura brings you close to nature whilst letting it bask in its natural glory. Just 40 minutes away from North Bengaluru, this hidden gem awaits you.
      </Text>
    </div>
  );
};

export default Gallery;
