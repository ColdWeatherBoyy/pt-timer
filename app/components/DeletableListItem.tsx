import React from "react";
import { ComponentColor, ThemeColor, Unit } from "../utilities/themeTypes";

interface DeletableListItemProps {
	index: number;
	length: string;
	unit: Unit;
	listItemColor: ThemeColor;
	deleteItem: (index: number) => void;
}

const DeletableListItem: React.FC<DeletableListItemProps> = ({
	index,
	length,
	unit,
	listItemColor,
	deleteItem,
}) => {
	return (
		<div
			className={`flex relative items-start max-w-24 text-nowrap ${ComponentColor[listItemColor].listItem.item} py-2.5 px-5 rounded-lg shadow-lg`}
		>
			<div
				className={`flex flex-col items-center ${ComponentColor[listItemColor].listItem.itemText}`}
			>
				<div className="text-xl leading-none">{length}</div>
				<div className="text-xs">{unit}</div>
			</div>
			<div
				className={`${ComponentColor[listItemColor].listItem.deleteText} ${ComponentColor[listItemColor].listItem.delete} rounded-full text-[11px] px-1 py-0.5 absolute top-0.5 right-0.5 leading-none select-none cursor-pointer  hover:shadow-2xl active:shadow-inner transition-all duration-100 ease-in-out`}
				onClick={() => deleteItem(index)}
			>
				x
			</div>
		</div>
	);
};

export default DeletableListItem;
