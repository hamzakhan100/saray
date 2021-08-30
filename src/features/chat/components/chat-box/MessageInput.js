import './styles.css';
import { TextField, Button } from '@material-ui/core';
import { useState } from 'react';

export default function MessageInput({ onSend }) {
	const [message, setMessage] = useState('');
	const onChange = (e) => {
		setMessage(e.target.value);
	};
	const onClick = () => {
		setMessage('');
		onSend && onSend({ body: message });
	};
	return (
		<div className="message-input">
			<TextField
				placeholder="Message"
				value={message}
				onChange={onChange}
				variant="outlined"
				inputProps={{ style: { textTransform: 'capitalize' } }}
			/>
			<Button
				style={{ height: '100%', width: 'auto' }}
				onClick={onClick}
				variant="contained"
			>
				Send
			</Button>
		</div>
	);
}
