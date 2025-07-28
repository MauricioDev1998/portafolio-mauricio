import PageTransition from "../components/PageTransition";
import React, { useState } from "react";
import { sendContactForm } from "../api/contactApi";
import type { ContactFormData } from "../types";

const initialForm = { name: "", email: "", message: "" };

const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Contact = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!form.name.trim()) newErrors.name = "El nombre es obligatorio.";
        if (!form.email.trim()) newErrors.email = "El email es obligatorio.";
        else if (!validateEmail(form.email))
            newErrors.email = "El email no es válido.";
        if (!form.message.trim())
            newErrors.message = "El mensaje es obligatorio.";
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setLoading(true);
        try {
            await sendContactForm(form as ContactFormData);
            setSubmitted(true);
            setForm(initialForm);
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setErrors({ form: "Hubo un error al enviar el formulario." });
        }
        setLoading(false);
    };

    return (
        <PageTransition>
            <div className="min-h-screen px-6 py-20">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                            Contácta<span className="text-gray-300">me</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            ¿Tienes alguna pregunta o propuesta? ¡Envíame un mensaje!
                        </p>
                    </div>
                    <div className=" gap-12">
                        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 shadow-2xl flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-4xl">📬</span>
                                Formulario de contacto
                            </h2>
                            
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
                                <div className="flex items-center gap-3 mb-2 md:mb-0">
                                    <span className="text-2xl">📧</span>
                                    <span className="text-gray-200 text-lg">mauricio.gobti@gmail.com</span>
                                </div>
                                <div className="hidden md:block h-8 w-px bg-white/20 mx-2" />
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">📍</span>
                                    <span className="text-gray-200 text-lg">Toluca, México</span>
                                </div>
                            </div>
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center h-full animate-fade-in">
                                    <span className="text-green-400 text-4xl mb-4">✔️</span>
                                    <p className="text-green-400 text-center font-semibold text-lg">
                                        ¡Gracias por tu mensaje! Te responderé pronto.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                                    <div>
                                        <label className="block text-white font-semibold mb-2">Nombre</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 rounded-xl bg-white/10 text-white border ${
                                                errors.name ? "border-red-500" : "border-white/20"
                                            } focus:outline-none focus:border-blue-400 transition placeholder-gray-400`}
                                            placeholder="Tu nombre"
                                        />
                                        {errors.name && (
                                            <span className="text-red-400 text-sm">{errors.name}</span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-white font-semibold mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 rounded-xl bg-white/10 text-white border ${
                                                errors.email ? "border-red-500" : "border-white/20"
                                            } focus:outline-none focus:border-blue-400 transition placeholder-gray-400`}
                                            placeholder="tucorreo@email.com"
                                        />
                                        {errors.email && (
                                            <span className="text-red-400 text-sm">{errors.email}</span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-white font-semibold mb-2">Mensaje</label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className={`w-full px-4 py-3 rounded-xl bg-white/10 text-white border ${
                                                errors.message ? "border-red-500" : "border-white/20"
                                            } focus:outline-none focus:border-blue-400 transition resize-vertical placeholder-gray-400`}
                                            placeholder="Escribe tu mensaje..."
                                        />
                                        {errors.message && (
                                            <span className="text-red-400 text-sm">{errors.message}</span>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? "Enviando..." : "Enviar"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Contact;