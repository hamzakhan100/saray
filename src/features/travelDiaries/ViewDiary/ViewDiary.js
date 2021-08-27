import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './style.css';
import api from '../api';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const ViewDiary = () => {
	const [blog, setBlog] = useState({});
	const { blogId } = useParams();

	useEffect(() => {
		(async () => {
			try {
				const result = await api.getBlog(blogId);
				setBlog(result.data.blog);
			} catch (error) {
				console.log(error);
				alert('Error');
			}
		})();
	}, []);

	return (
		<div className="main d-flex">
			<div className="left-section">
				<div className="blog-layout">
					<div className="blog-img">
						<img src={blog?.imageUrl} alt="blog" />
					</div>
					<div className="blog-title">
						{' '}
						<h1> {blog?.title}</h1>
					</div>
					<div className="blog-contant">
						<ReactQuill
							readOnly
							theme="bubble"
							value={blog?.content}
						/>
					</div>
					<hr className="line" />
					<div className="d-flex">
						<div className="blog-location">
							<p>{blog?.city}</p>{' '}
						</div>
						<div className="blog-date">
							<p>{blog?.createdAt}</p>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="right-section ">
				<div className="right-section-layout-top">
					<div className="right-section-layout-img-top">
						<img src={data[0].image} />
					</div>
				</div>
				<div className="right-section-layout-bottom">
					<div className="right-section-layout-img-bottom">
						<img src={data[0].image} />
					</div>
				</div>
			</div> */}
		</div>
	);
};
export default ViewDiary;
