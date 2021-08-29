
import React from "react";
import { Container, Col, Row } from "reactstrap";
import { useHistory } from "react-router-dom";


// import "./style.css"
const SearchDiaries = (props) => {
	const { post, onClick } = props;
  const history = useHistory();
  const openPage = (id) => {
    history.pushState("/viewDiary");
  };

  return (
    <>
      <div className="homeUI-main" onClick={openPage}>
        <Container>
          <Row>
            <Col sm={3}>
              <div className="card-main">
                <div className="card">
                  <div className="cardImg">
                    <img src={post.image} />
                  </div>
                  <div className="card-bottom">
                    <div className="cardname">
                      <h4>{post.title}</h4>
                    </div>

                    <div className="card-desc">
                      <p style={{ fontSize: "14px" }}>{post.description}</p>
                    </div>
                    <hr style={{ borderBottom: "0" }} />

                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                      className="card-location"
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          textTransform: "capitalize",
                        }}
                      >
                        {post.city}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );

};
export default SearchDiaries;
