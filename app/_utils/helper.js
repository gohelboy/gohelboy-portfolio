import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export const downloadResume = () => {
    const resume = "/resume.pdf"
    const anchor = document.createElement("a")
    anchor.href = resume
    anchor.download = "dwarkesh-gohel-resume.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}