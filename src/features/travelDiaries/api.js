import axios from 'axios';
import config from '../../config';

async function postBlog(blog) {
	try {
		const token = localStorage.getItem('token');
		return await axios.post(config.baseUrl + '/blog', blog, {
			headers: { Authorization: 'Bearer ' + token }
		});
	} catch (error) {
		throw error;
	}
}

async function getBlogs() {
	try {
		const token = localStorage.getItem('token');
		return await axios.get(config.baseUrl + '/blog', {
			headers: { Authorization: 'Bearer ' + token }
		});
	} catch (error) {
		throw error;
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { postBlog, getBlogs };
