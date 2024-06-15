"use client"
import { ButtonFormTypes } from "@/ts";
import { useState, useEffect } from "react";
import { errorToast } from "./Toast";

export const ButtonForm = ({
    title,
    label,
    types,
    placeholder,
    register = () => { },
    validationRules = {},
    error = {},
}: ButtonFormTypes) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (error[label]) {
            mostrarMensajeRepetido(error[label]?.message || error[label]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, label]);

    const [mensajesMostrados, setMensajesMostrados] = useState<{ [key: string]: boolean }>({});

    const mostrarMensajeRepetido = (errorMessage: string) => {
        if (errorMessage && !mensajesMostrados[errorMessage]) {
            setMensajesMostrados((prevMensajesMostrados) => ({
                ...prevMensajesMostrados,
                [errorMessage]: true,
            }));
            errorToast(errorMessage);
        }
    };
    mostrarMensajeRepetido(error[label]?.message);

    return (
        <section className="relative block h-14 w-full min-w-7">
            <input
                id={label?.toLowerCase()}
                name={label?.toLowerCase()}
                type={types}
                placeholder={placeholder}
                className={`peer h-full w-full bg-transparent pt-4 pb-1.5 pl-3 font-semibold text-sm  transition-all focus:outline-0 placeholder:opacity-0 focus:placeholder:opacity-100 rounded-2xl overflow-hidden ${!isActive && " border-blue-500 shadow-blue-400 shadow-md "} `}
                {...register(label, validationRules)}
                onFocus={() => {
                    setIsActive(true);
                }}
                onBlur={(e) => {
                    if (e.target.value.trim() === "") {
                        setIsActive(false);
                    }
                }}
            />
            <label
                htmlFor={label?.toLowerCase()}
                className={`after:content[''] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none !overflow-visible truncate text-sm font-semibold leading-tight  transition-all after:absolute after:-bottom-[2px] after:block after:w-full after:scale-x-0 after:border-b-2 after:transition-transform after:duration-300 rounded-[19px]
                
                ${isActive ? ` peer-focus:leading-tight peer-focus:after:scale-x-95 peer-focus:after:border-blue-400 peer-focus:after:border-b-4 peer-focus:after:shadow-blue-400 peer-focus:after:shadow-md peer-enabled:duration-75 peer-enabled:border-b-4 peer-enabled:border-blue-400 ` : ` peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500  `} `}
            >
                <span className={`ml-3 h-5 text-center justify-center items-center  ${isActive && `duration-200 bg-transparent border-blue-500 bg-slate-100 text- shadow-blue-400 shadow-md px-4  h-4 rounded-2xl`}`}>{title?.toUpperCase()}</span>
            </label>
            {error[label] && (
                <div
                    className="absolute bg-red-100 border border-red-400 text-red-500 px-2 py-1 rounded-xl text-[15px] bottom-full ml-4 -mt-1 z-10 transition-opacity duration-300"
                >
                    <p>{error[label]?.message}</p>
                </div>
            )}
        </section>
    );
};
