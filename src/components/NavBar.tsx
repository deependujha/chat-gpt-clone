import React from 'react';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import MsgIcon from '../../public/svg/MsgIcon';

const NavBar = () => {
	let arr: any = [];
	// for (let i = 0; i < 100; i++) {
	// 	arr.push('Student - ' + i);
	// }
	return (
		<div className="h-screen w-72 lg:w-80 bg-slate-800 rounded-2xl">
			<div style={{ height: '10vh' }}>
				<div className="h-6"></div>
				<div className="flex justify-center">
					<Button color="gradient" size="lg" ghost>
						+ new chat
					</Button>
				</div>
				<div className="h-6"></div>
				<hr className="border-white mx-3" />
			</div>
			<div style={{ height: '80vh' }}>
				<div className="overflow-y-scroll scrollbar" style={{ height: '80vh' }}>
					<ul>
						{arr.map((item: any, idx: number) => {
							return (
								<li
									className="text-white text-md ml-5 flex hover:bg-gray-500 h-10 py-2 rounded-lg hover:cursor-pointer"
									key={idx}
								>
									<MsgIcon />
									<span className="mx-2">{item}</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div style={{ height: '10vh' }}>
				<hr className="border-white mx-3" />
				<div className="font-bold font-mono text-pink-400 flex justify-center my-7 text-2xl">
					ChatGPT clone
				</div>
			</div>
		</div>
	);
};

export default NavBar;
