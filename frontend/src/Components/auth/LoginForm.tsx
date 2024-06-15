"use client";
import { loginData, ButtonFormTypes, dataTypes } from "@/ts";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Toaster } from "sonner";
import { ButtonForm, ButtonOnSubmit, errorToast, successToast } from "@/Components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import validationRules from "@/ts/Auth/ValidationYup";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [backendErrors, setBackendErrors] = useState<{ [key: string]: string }>({});
    const router = useRouter()

    const onSubmit = handleSubmit(async (data) => {

        console.log(data)
    });

    return (<>

        <Toaster position="bottom-right" />

        <form
            onSubmit={onSubmit}
            className="max-w-screen-lg w-96 p-4 rounded-2xl bg-slate-200 sm:w-96 bg-opacity-50 backdrop-brightness-75"

        >
            <h4 className="text-4xl text-center text-gray-800 block font-sans  antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 my-4">Login</h4>

            <section className="grid grid-cols-1 gap-8">
                {loginData.map((item: ButtonFormTypes) => (
                    <ButtonForm
                        key={item.label}
                        label={item.label}
                        types={item.types}
                        title={item.title}
                        placeholder={item.placeholder}
                        validationRules={validationRules[item.label as keyof typeof validationRules]}
                        register={register}
                        error={{ ...errors, ...backendErrors }}
                    />
                ))}
            </section>
            <section className="mt-5 mb-3" >

                <ButtonOnSubmit title="Login" />
            </section>

            <p className="text-center text-gray-600 block mt-4 font-sans text-base antialiased font-normal leading-relaxed  ">
                Already have an account?{" "}
                <Link href="/auth/Register" className="text-blue-500 hover:text-blue-700">
                    <strong>Register</strong>
                </Link>
            </p>

        </form >
    </>
    );
};