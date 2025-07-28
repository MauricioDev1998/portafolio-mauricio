import type { ContactFormData } from "../types";

export const sendContactForm = async (data: ContactFormData) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error("Error en el envío del formulario");
        }
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};
