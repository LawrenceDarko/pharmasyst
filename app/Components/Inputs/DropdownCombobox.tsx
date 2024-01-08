"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { GrAdd } from "react-icons/gr"


interface DropdownComboboxProps {
    dropdownList: {value: string, label: string}[]
    dropdownValue: string;
    setDropdownValue: (value: string | any)=>void;
    showCreateNewButton?: boolean
    placeholder: string
}

export const DropdownCombobox: React.FC<DropdownComboboxProps> = ({dropdownList, dropdownValue, setDropdownValue, showCreateNewButton, placeholder}) => {

    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="justify-between w-full"
            >
            {dropdownValue ? dropdownList.find((framework) => framework.value === dropdownValue)?.label
                : `${placeholder}...`}
            <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
            <Command>
            <CommandInput placeholder="Search list..." />
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
                {dropdownList.map((framework) => (
                <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                    setDropdownValue(currentValue === dropdownValue ? "" : currentValue)
                    setOpen(false)
                    }}
                >
                    <Check
                    className={cn(
                        "mr-2 h-4 w-4",
                        dropdownValue === framework.value ? "opacity-100" : "opacity-0"
                    )}
                    />
                    {framework.label}
                </CommandItem>
                ))}
                {showCreateNewButton && <CommandItem>
                    <button 
                        onClick={()=>{
                            // MainModal()
                            // onOpen()
                        }} 
                        className="flex items-center justify-center font-semibold text-blue-500">
                            <GrAdd className="mr-2"/>
                            <p>Add new patient</p>
                    </button>
                </CommandItem>}
            </CommandGroup>
            </Command>
        </PopoverContent>
        </Popover>
    )
}
