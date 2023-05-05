import React from 'react';
import Image from 'next/image';
import style from '@/styles/Chat.module.css';

type ChatRightProps = {
	text: string;
	sentBy: 'user' | 'ai';
};
const ChatBoxComponent = ({ text, sentBy }: ChatRightProps) => {
	return (
		<div className="my-3 flex">
			<div className="mx-2">
				{sentBy === 'ai' && (
					<div className={`mx-2 ${style.imageIcon}`}>
						<Image
							src="/svg/robot.svg"
							fill={true}
							alt="User"
							className="border-2 rounded-full border-pink-600 bg-white"
						/>
					</div>
				)}
			</div>
			<div
				style={{
					backgroundColor: '#00293B',
					borderTopLeftRadius: '20px',
					borderTopRightRadius: '20px',
					borderBottomRightRadius: sentBy === 'user' ? '0px' : '20px',
					borderBottomLeftRadius: sentBy === 'ai' ? '0px' : '20px',
				}}
				className={`px-3 py-3 text-white ${style.chatBox}`}
			>
				{text}
			</div>
			{/* let image be at the end of the chat */}
			{sentBy === 'user' && (
				<div className={`mx-2 ${style.imageIcon}`}>
					<Image
						src="/svg/User.svg"
						fill={true}
						alt="User"
						className="border-2 rounded-full border-blue-500 bg-white"
					/>
				</div>
			)}
		</div>
	);
};

export default ChatBoxComponent;
