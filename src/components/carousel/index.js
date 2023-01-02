import { Carousel } from "react-carousel-minimal";

const captionStyle = {
  fontSize: "2em",
  fontWeight: "bold",
};
const slideNumberStyle = {
  fontSize: "20px",
  fontWeight: "bold",
};

function CostumCarousel({ data = [] }) {
  return (
    <Carousel
      data={data}
      time={100000}
      width="650px"
      height="450px"
      captionStyle={captionStyle}
      radius="10px"
      slideNumber={true}
      slideNumberStyle={slideNumberStyle}
      captionPosition="bottom"
      automatic={true}
      dots={true}
      pauseIconColor="white"
      pauseIconSize="40px"
      slideBackgroundColor="#011047"
      slideImageFit="contain"
      thumbnails={true}
      thumbnailWidth="100px"
      style={{
        textAlign: "center",
        maxWidth: "850px",
        maxHeight: "500px",
        margin: "40px auto",
      }}
    />
  );
}

export default CostumCarousel;
