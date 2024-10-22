import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text } from "@chakra-ui/react";
import "../../pages/page.css";
import "../../helper/style.css"

const DashboardHome = () => {
  const arr = [
    {
      img: "https://4kwallpapers.com/images/wallpapers/agriculture-farm-land-countryside-aerial-view-green-1920x1080-3985.jpg",
    },
    {
      img: "https://data.freehdw.com/landscapes-nature-spring-land-pictures-hd.jpg",
    },
    {
      img: "https://e1.pxfuel.com/desktop-wallpaper/291/809/desktop-wallpaper-land-scape-full-backgrounds-road-scape.jpg",
    },
    ,
    {
      img: "https://www.hdwallpapers.in/download/landscape_view_of_mountains_under_cloudy_blue_sky_near_ocean_and_colorful_flowers_covered_land_hd_nature-1920x1080.jpg",
    },,
    {
      img: "https://c4.wallpaperflare.com/wallpaper/428/376/851/forest-4k-desktop-background-hd-wallpaper-preview.jpg",
    },,
    {
      img: "https://c4.wallpaperflare.com/wallpaper/428/376/851/forest-4k-desktop-background-hd-wallpaper-preview.jpg",
    },,
    {
      img: "https://c4.wallpaperflare.com/wallpaper/428/376/851/forest-4k-desktop-background-hd-wallpaper-preview.jpg",
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
    cssEase: "linear", // Smooth transition
  };

  return (
    <div id="gallery" style={{ margin: "auto" }}>
     
      <Slider {...settings}>
        {arr.map((ele, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={ele.img}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "auto", // Responsive height
                maxHeight: "100vh", // Maximum height
                objectFit: "cover",
                // marginTop:"10px"
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
     
    </div>
  );
};

export default DashboardHome;
