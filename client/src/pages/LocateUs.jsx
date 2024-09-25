import { Text } from '@chakra-ui/react'
import React from 'react'

const LocateUs = () => {
  return (
    <div id='location'>

<Text fontSize="5xl" fontWeight={"bold"} textAlign="center" color="green" mb={4}>
Locate Us</Text>

    <div>
    <div>
 <div >
          <iframe
            className="iframe"
            style={{
              height: "450px",
              border: "0  px",
              loading: "lazy",
              left: "0px",
              //   position:"absolute",
              top: "0px",
              width: "100%",
            }}
            id="iframe"
            //   width="600"
            //   height="450"
            //   style="border: 0"
            //   loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCJ50P3i-sk5hbxpI4mwppCAkio4ATadi0
                    &q=${"kelsa"}`}
          ></iframe></div>
 </div>
    </div>
      
    </div>
  )
}

export default LocateUs
