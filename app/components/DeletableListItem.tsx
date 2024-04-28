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
		<div className="flex items-start text-jade-100 text-md text-nowrap bg-gradient-to-r from-jade-600 to-jade-900 py-2 px-2 mx-3 rounded-lg shadow-lg">
			{text}
			<div
				className="text-jade-950 bg-jade-50 rounded-full text-xs px-1 py-0.5 ml-1 -mr-1 -mt-1 leading-none select-none cursor-pointer border border-jade-400 hover:bg-jade-200 hover:shadow-2xl active:bg-jade-600 active:shadow-inner active:text-jade-50 transition-all duration-100 ease-in-out"
				onClick={() => deleteItem(index)}
			>
				x
			</div>
		</div>
	);
};

export default DeletableListItem;
