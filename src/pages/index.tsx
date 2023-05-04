import React from 'react';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Chat from '@/components/Chat';
import style from '@/styles/Index.module.css';

const Index = () => {
	return (
		<>
			<Head>
				<title>ChatGPT-clone</title>
			</Head>
			<div className="flex bg-black">
				<div className={style.navbar}>
					<NavBar />
				</div>
				<Chat />
			</div>
		</>
	);
};

export default Index;
