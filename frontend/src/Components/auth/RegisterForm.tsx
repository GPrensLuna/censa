
"use client"

import { ButtonForm, ButtonOnSubmit, errorToast, successToast } from "@/Components";
import { registerData, ButtonFormTypes, dataTypes } from "@/ts";
import validationRules from "@/ts/Auth/ValidationYup";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "sonner";
import { useRouter } from "next/navigation";


export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [resData, setResData] = useState<dataTypes | null>(null);
    const [backendErrors, setBackendErrors] = useState<{ [key: string]: string }>({});
    const router = useRouter()
    const onSubmit = handleSubmit(async (data) => {


        if (data.password !== data.confirmPassword) {
            return errorToast("Passwords do not match");
        }

        const { confirmPassword: _, ...requestData } = data;

        try {
            setBackendErrors({});

            const res = await fetch("/api/auth/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });
            if (!res.ok) {
                const errorRes = await res.json();

                setBackendErrors(errorRes.errors || {});
                throw new Error(errorRes.message || "An error occurred. Please try again later.");
            }

            const resData: dataTypes = await res.json();
            setResData(resData);
            successToast("Registration successful!");

            setTimeout(() => {
                router.push('/auth/Login', { scroll: false });
            }, 1000);


        } catch (error: any) {
            errorToast(error.message || 'An error occurred. Please try again later.');

        }
    });

    return (
        <>
            <Toaster position="bottom-right" />
            <form
                onSubmit={onSubmit}
                className="max-w-screen-lg p-4 rounded-2xl bg-slate-200 sm:w-2/3 w-96 bg-opacity-50 backdrop-brightness-75 mx-auto"
            >
                <h4 className="text-4xl text-center text-gray-800 block font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 my-4">Register</h4>

                <p className="block mt-2 mb-3 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    Nice to meet you! Enter your details to register.
                </p>
                <section className="grid grid-cols-2 gap-8 my-8">
                    {registerData.map((item: ButtonFormTypes) => (
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
                <section className="mt-5 mb-3">
                    <ButtonOnSubmit title="Register" />
                </section>

                <p className="text-center text-gray-600 block font-sans text-base antialiased font-normal leading-relaxed">
                    Already have an account?{' '}
                    <Link href="/auth/Login" className="text-blue-500 hover:text-blue-700 mt-2 mb-3">
                        <strong>Login</strong>
                    </Link>
                </p>
            </form>
        </>
    );
};
