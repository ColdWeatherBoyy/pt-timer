"use client";

import React from "react";

interface DeletableListItemProps {
	index: number;
	text: string;
	deleteItem: (index: number) => void;
}

const DeletableListItem: React.FC<DeletableListItemProps> = ({
	index,
	text,
	deleteItem,
}) => {
	return (
		<div className="flex text-md text-nowrap bg-slate-400 py-2 pl-2 pr-1 mx-3 rounded-lg shadow-lg">
			{text}
			<div
				className="ml-2 flex items-center justify-center bg-slate-50 rounded-full text-center text-xs w-fit h-fit px-1 py-0.5 leading-none select-none cursor-pointer hover:bg-slate-200 hover:shadow-2xl active:bg-slate-300 active:shadow-inner active:text-white"
				onClick={() => deleteItem(index)}
			>
				x
			</div>
		</div>
	);
};

export default DeletableListItem;
