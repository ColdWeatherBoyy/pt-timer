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
		<div className="flex relative items-start text-jade-100 text-md text-nowrap bg-gradient-to-r from-jade-600 to-jade-900 py-2.5 px-5 mx-1.5 rounded-lg shadow-lg border border-jade-200">
			{text}
			<div
				className="text-jade-950 bg-jade-50 rounded-full text-[11px] px-1 py-0.5 absolute top-0.5 right-0.5 leading-none select-none cursor-pointer border border-jade-400 hover:bg-jade-200 hover:shadow-2xl active:bg-jade-600 active:shadow-inner active:text-jade-50 transition-all duration-100 ease-in-out"
				onClick={() => deleteItem(index)}
			>
				x
			</div>
		</div>
	);
};

export default DeletableListItem;
