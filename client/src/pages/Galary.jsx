import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text } from "@chakra-ui/react";
import "./page.css";
import "../helper/style.css";

const Gallery = () => {
  const arr = [
    {
      img: "https://kelsa-clients-production.s3.ap-south-1.amazonaws.com/uploads/accounts/5/pipelines/10/files/c3e1de65-2580-49e8-af9b-f6fed5c2454e/WhatsApp+Image+2024-09-28+at+00.12.57+%281%29.jpeg",
    },
    {
      img: "https://kelsa-clients-production.s3.ap-south-1.amazonaws.com/uploads/accounts/5/pipelines/10/files/e7a81348-0f42-4507-ba8a-fa73d8c0dc81/WhatsApp+Image+2024-09-28+at+00.12.57+%282%29.jpeg",
    },
    {
      img: "https://kelsa-clients-production.s3.ap-south-1.amazonaws.com/uploads/accounts/5/pipelines/10/files/e5a75ce5-fdbb-4dfc-b9b5-c3c4076d0468/WhatsApp+Image+2024-09-28+at+00.12.58+%282%29.jpeg",
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
        GALLERY
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
      <Text
        fontSize="2xl"
        fontWeight={"bold"}
        textAlign="center"
        className="defaultPageParagraph"
        mb={4}
        mt={5}
      >
        An Oasis of Lush Greens and Scenic Beauty{" "}
      </Text>
      <Text className="defaultPageParagraph" textAlign="center" mb={4}>
        Nestled in 300 acres of lush greenery, this serene retreat perfectly
        balances nature and convenience. Just 5 minutes from the national
        highway and close to the International Airport and Isha Foundation, this
        hidden gem connects you to tranquility while keeping you within reach.
        Embrace rolling hills, flowing streams, and the soothing song of
        birds—all just a short drive from the city{" "}
      </Text>
    </div>
  );
};

export default Gallery;
