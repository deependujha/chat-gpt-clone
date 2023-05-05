import React, { useState } from 'react';
import style from '@/styles/Index.module.css';
import Image from 'next/image';

const InputBox = () => {
	const [inputText, setInputText] = useState<string>('');

	const onBtnClick = async () => {
		console.log('Input text is: ', inputText);
	};

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			// Check for Enter key
			onBtnClick();
		}
	};

	return (
		<div>
			<div className="flex justify-center my-3 h-12">
				<input
					className={`px-3 h-12 rounded-lg border-2 border-black ${style.inputField}`}
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
					onKeyDown={handleKeyPress}
					placeholder="Type your message here..."
				/>
				<div className="px-3 my-auto hover:cursor-pointer" onClick={onBtnClick}>
					<Image src="/svg/SendIcon.svg" width={30} height={30} alt="send" />
				</div>
			</div>
			<div className="flex justify-center text-center px-2 py-2">
				`Chat-GPT clone` is made for learning purposes only. OpenAI has not
				endorsed this project.
			</div>
		</div>
	);
};

export default InputBox;
