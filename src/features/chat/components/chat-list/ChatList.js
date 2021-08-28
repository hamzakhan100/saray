import React from 'react';

import './styles.list.css';

export default function ChatList({ chatList }) {
	return (
		<div>
			{chatList.map((chat) => (
				<ChatListItem key={chat._id} chatItem={chat} />
			))}
		</div>
	);
}

function ChatListItem({ chatItem }) {
	return (
		<div className="item">
			<div className="avatar">
				<img src={chatItem.imageUrl} alt="profile" />
			</div>
			<div className="details">
				<div>Name</div>
				<div>subtitle</div>
			</div>
		</div>
	);
}
