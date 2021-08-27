import react from "react";
import "./style.css";
const data = [
  {
    title: "Things Fall Apart",
    city: "islamabad",
    image:
      "https://www.orangesmile.com/common/img_cities_original/islamabad-nobo21-0.jpg",
    description:
      "aaaaaaaasdsadlksahdlsajdlkjsakldjsalkdjlsakjdlkasjdlksajdlksajldkjaslkdja",
    id: 1,
  },
];

const ViewDiary = () => {
  return (
    <div className="main d-flex">
      <div className="left-section">
        <div className="blog-layout">
          <div className="blog-img">
            <img src={data[0].image} />
          </div>
          <div className="blog-title">
            {" "}
            <h1> {data[0].title}</h1>
          </div>
          <div className="blog-contant">
            <h2>my journey to islamabad </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h2> Monal Islamabad </h2>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <hr className="line" />
          <div style={{justifyContent:"flex-end"}} className="d-flex">
            <div className="blog-location">
              <p style={{fontSize:"12px",textTransform:"capitalize"}}><bold>{data[0].city}</bold></p>{" "}
            </div>
            <div className="blog-date">
              <p style={{fontSize:"12px"}} >-10/09/20</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};
export default ViewDiary;
