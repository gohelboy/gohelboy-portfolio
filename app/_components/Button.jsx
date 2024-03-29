"use client"
import { cn } from '../_utils/helper'

const Button = ({ children, classes, onClick }) => {
    return (
        <button
            className={cn(
                "bg-[--secondary-bg] relative hover:bg-[--hover-button] text-[--button-text] px-5 py-2 rounded-md font-bold"
                , classes)}
            onClick={onClick}
        >{children}</button>
    )
}

export default Button