import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Center, Text } from '@chakra-ui/react';

const Galary = () => {
  const arr = [
    {
      img: "https://www.unccd.int/sites/default/files/styles/towebp/public/2021-12/Land_Management_Restoration_Header_Img.jpg.webp"
    },
    {
      img: "https://land.copernicus.eu/en/daren-37rhauu3u1a-unsplash.jpg/@@images/image/huge"
    },
    {
      img: "https://www.unccd.int/sites/default/files/styles/towebp/public/2021-12/Land_Degradation_Neutrality_Header_Img_0.jpg.webp"
    },
    {
      img: "https://www.99acres.com/microsite/articles/files/2022/11/West-Bengal-Land-Reforms-Act.jpg"
    },
    {
        img:"https://www.bankrate.com/2022/09/01170817/How-to-sell-land.jpg"  
      },
      {
        img:"https://www.landsrl.com/wp-content/uploads/2024/03/land-landgermany-essengreencapital-krupppark-phkassenberg-1-2400x1800.jpg"
      },
      {
        img:"https://assets.weforum.org/article/image/GLWDNgzw3BLTLOXlMA1AJWNgtaIpl3RwDKf1QKSPbLo.jpg"
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
      <Text className='pageHeading'>
        GALLERY
      </Text>
      <Slider {...settings}>
        {arr.map((ele, index) => (
          <div key={index} style={{backgroundImage:'url("")'}}> 
          
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
      <Text fontSize="2xl" fontWeight={"bold"} textAlign="center" className='defaultPageParagraph' mb={4} mt={5}>
      Where Every View is a Scenic Escape
      </Text>
      <Text className='defaultPageParagraph' justifyContent={"center"} align={'center'}>
      Redefine your weekends and choose the luxury of being one with nature! With three sides covered by a 27,000 acre lush forest, a hillock within the project, a stream flowing through its centre and the melody of birds chirping around you,
      ReWild Doddaballapura brings you close to nature whilst letting it bask in its natural glory. Just 40 minutes away from North Bengaluru, this hidden gem awaits you.
      </Text>

    </div>
  );
};

export default Galary;
