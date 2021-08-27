import React from 'react';
import { Container, Col, Row } from 'reactstrap';

// import "./style.css"
const SearchDiaries = (props) => {
	const { post, onClick } = props;

	const openPage = () => {
		onClick(post._id);
	};

	return (
		<>
			<div className="homeUI-main" onClick={openPage}>
				<Container onClick={openPage}>
					<Row>
						<Col sm={3}>
							<div className="card-main">
								<div className="card">
									<div className="cardImg">
										<img src={post.imageUrl} alt="Blog" />
									</div>
									<div className="card-bottom">
										<div className="cardname">
											<h4>{post.title}</h4>
										</div>

										<div className="card-desc">
											<p>{post.description}</p>
										</div>
										<hr />

										<div className="card-location">
											<p>{post.city}</p>
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
