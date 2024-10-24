import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text } from "@chakra-ui/react";
import "../helper/style.css";


const Clubhouse = () => {
  const arr = [
    {
      img: "https://kelsa-clients-production.s3.ap-south-1.amazonaws.com/uploads/accounts/5/pipelines/10/files/cf7261ef-b74d-4d97-b48a-7dd055a47a6a/WhatsApp+Image+2024-10-10+at+4.29.11+PM.jpeg",
    },
    {
      img: "https://kelsa-clients-production.s3.ap-south-1.amazonaws.com/uploads/accounts/5/pipelines/10/files/3406d1f2-c0f0-4243-980b-38989e02cc9a/WhatsApp+Image+2024-10-22+at+5.21.27+PM.jpeg",
    },
    {
      img: "https://kelsa-clients-production.s3.ap-south-1.amazonaws.com/uploads/accounts/5/pipelines/10/files/7f31be93-c61b-4ade-b4ab-b12b0756a0d7/WhatsApp+Image+2024-10-22+at+5.21.26+PM.jpeg",
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
    autoplaySpeed: 2000,
    fade: true, // Faded effect
    cssEase: "linear", // Smooth transition
  };

  return (
    <div id="gallery" style={{ margin: "auto" }}>
      <Text
        className="pageHeading"
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} // Responsive font size
        fontWeight="bold"
        textAlign="center"
        mb={4}
      >
       Clubhouse Gallery
      </Text>
      <Slider {...settings}>
        {arr.map((ele, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={ele.img}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "auto", // Responsive height
                maxHeight: "80vh", // Maximum height
                objectFit: "cover",
              }}
              onError={(e) => {
                e.target.src = "fallback-image-url.jpg";
              }} // Add fallback image URL
            />
          </div>
        ))}
      </Slider>
     
    </div>
  );
};

export default Clubhouse;
