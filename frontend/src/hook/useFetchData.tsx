"use client"
import { useState, useEffect } from "react";
interface dataTypes {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const useFetchData = (url: string, requestData: any) => {
    const [resData, setResData] = useState<dataTypes | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestData),
                });

                if (!response.ok) {
                    if (response.status === 400) {
                        throw new Error('Los datos enviados son incorrectos. Por favor, revisa y vuelve a intentarlo.');
                    }
                    if (response.status === 401) {
                        throw new Error('No estás autorizado para realizar esta acción. Por favor, inicia sesión.');
                    }
                    if (response.status === 404) {
                        throw new Error('La página solicitada no se encontró. Por favor, verifica la URL.');
                    }
                    throw new Error('Error en la solicitud');
                }

                const responseData: dataTypes = await response.json();
                setResData(responseData);
                setLoading(false);
            } catch (error: any) {
                setError(error.message || 'Ocurrió un error al cargar los datos. Por favor, inténtalo de nuevo más tarde.');
                setLoading(false);
            }
        };

        fetchData();
    }, [url, requestData]);

    return { resData, error, loading };
};
