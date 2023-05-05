import React from 'react';
import InputBox from './InputBox';
import ChatBoxComponent from './ChatBoxComponent';

const Chat = () => {
	return (
		<div className="flex flex-col h-screen w-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 justify-between">
			<div
				className="overflow-y-scroll scrollbarMain"
				style={{ height: '90vh' }}
			>
				<div className="google-font text-3xl md:text-5xl text-black text-center py-40 underline underline-offset-8">
					Chat-GPT clone
				</div>
				<div className="flex justify-end">
					<ChatBoxComponent
						text="hello world, This is Deependu here.hello world, This is Deependu here.hello world, This is Deependu here.hello world, This is Deependu here.hello world, This is Deependu here.hello world, This is Deependu here.hello world, This is Deependu here.hello world, This is Deependu here.hello world, This is Deependu here.hello world, This is Deependu here."
						sentBy="user"
					/>
				</div>
				<div className="flex justify-start">
					<ChatBoxComponent
						text="hello world, This is Deependu here.hello world, This is Deependu here.hello world, This is Deependu here.hello world, This is Deependu here.hello world, This is Deependu here.hello world, This is Deependu here.hello world, This is Deependu here.hello world, This is Deependu here.hello world, This is Deependu here.hello world, This is Deependu here."
						sentBy="ai"
					/>
				</div>
			</div>
			<div className="">
				<InputBox />
			</div>
		</div>
	);
};

export default Chat;
