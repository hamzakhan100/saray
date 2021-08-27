import { io } from 'socket.io-client';

const socket = io('http://192.168.100.28:3000', {
	auth: { token: localStorage.getItem('token') }
});

export default socket;
