import { IconButton } from '@material-ui/core';
import Back from '@material-ui/icons/ArrowBack';
import React from 'react';

import './styles.css';

export default function Topbar({ onBack }) {
	return (
		<div className="top-bar">
			<IconButton onClick={onBack}>
				<Back />
			</IconButton>
		</div>
	);
}
