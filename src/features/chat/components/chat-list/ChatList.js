import { Avatar } from '@material-ui/core';
import React from 'react';

import './styles.list.css';

export default function ChatList({ chatList, onClick }) {
	return (
		<div>
			<div></div>
			{chatList.map((chat) => (
				<ChatListItem
					key={chat._id}
					chatItem={chat}
					onClick={onClick}
				/>
			))}
		</div>
	);
}

function ChatListItem({ chatItem, onClick }) {
	return (
		<div className="item" onClick={onClick}>
			<div className="avatar-container">
				<Avatar style={{ width: 80, height: 80 }} />
			</div>
			<div className="details">
				<p className="title">{chatItem.participant.name}</p>
				{/* <p className="sub-title">{chatItem.displayMessage}</p> */}
			</div>
		</div>
	);
}
