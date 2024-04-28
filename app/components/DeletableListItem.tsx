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
		<div className="flex text-jade-100 text-md text-nowrap bg-jade-600 py-2 pl-2 pr-1 mx-3 rounded-lg shadow-lg">
			{text}
			<div
				className="ml-2 text-jade-950 flex items-center justify-center bg-jade-50 rounded-full text-center text-xs w-fit h-fit px-1 py-0.5 leading-none select-none cursor-pointer hover:bg-jade-200 hover:shadow-2xl active:bg-jade-300 active:shadow-inner active:text-jade-50"
				onClick={() => deleteItem(index)}
			>
				x
			</div>
		</div>
	);
};

export default DeletableListItem;
