'use client'

import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;

}

const Button: React.FC<ButtonProps> = ({onClick, label, disabled, outline, small, icon: Icon}) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-sm hover:opacity-80 transition w-full ${outline? 'bg-white' : 'bg-blue-500'} ${outline? 'border-2 border-[#D9ECFF]' : 'border-blue-500'} ${outline? 'text-black' : 'text-white'} ${small? 'py-2' : 'py-3'} ${small? 'text-md' : 'text-md'} ${small? 'font-medium' : 'font-semibold'} ${small? 'border-[1px]' : 'border-2'}`}>
            {Icon && (
                <Icon className="absolute left-4 top-3" />
            )}
            {label}
        </button>
    )
}

export default Button