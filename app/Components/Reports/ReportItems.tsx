import React, { ReactElement } from 'react';
import { IconType } from 'react-icons';

interface ReportItemsProps {
    icon: ReactElement;
    label: string;
    subLists: { name: string; href: string }[];
}

const ReportItems: React.FC<ReportItemsProps> = ({ icon, label, subLists }) => {
return (
    <div className="">
        <div className="flex items-center mb-4">
            <span className="mr-2 text-2xl">
                {icon}
            </span>
            <span className="text-lg font-bold text-gray-700">{label}</span>
        </div>
        <ul className="pl-8 list-disc">
            {subLists && subLists?.map((subItem, index) => (
            <li className='pb-2' key={index}>
                <a href={subItem.href} className="text-gray-400 hover:underline">
                    {subItem.name}
                </a>
            </li>
            ))}
        </ul>
    </div>
);
};

export default ReportItems;
