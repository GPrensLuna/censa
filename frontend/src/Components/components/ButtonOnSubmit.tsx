
import { type ButtonFormTypes } from "@/ts"

export const ButtonOnSubmit = ({ title }: ButtonFormTypes) => {

    return (
        <button type="submit" className="bg-blue-200 border-2 border-blue-500  hover:bg-blue-700 text-blue-500 font-bold  focus:outline-none focus:shadow-outline w-full hover:text-white block select-none   py-3 px-6 text-center align-middle font-sans text-xs uppercase  shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-2xl
        ">
            {title}
        </button>
    );
};