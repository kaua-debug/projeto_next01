'use client'

import { useState } from "react"

export default function Page() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [experiencia, setExperiencia] = useState('')
    const [educacao, setEducacao] = useState('')
    const [habilidades, setHabilidades] = useState('')

    const handleSubmit = (event: any) => {
        event.preventDefault()

        const curriculo = { nome, email, experiencia, educacao, habilidades }
        console.log('Currículo do usuário:', curriculo) 
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold text-gray-900">Cadastro de Currículo</h2>
                    <p className="mt-1 text-sm text-gray-600">Preencha as informações abaixo para criar seu currículo.</p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-900">Nome Completo</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={nome}
                                onChange={(event) => setNome(event.target.value)}
                                id="nome"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

              
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                        <div className="mt-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                id="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                        <label htmlFor="experiencia" className="block text-sm font-medium text-gray-900">Experiência Profissional</label>
                        <div className="mt-2">
                            <textarea
                                value={experiencia}
                                onChange={(event) => setExperiencia(event.target.value)}
                                id="experiencia"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                rows={4}
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                        <label htmlFor="educacao" className="block text-sm font-medium text-gray-900">Educação</label>
                        <div className="mt-2">
                            <textarea
                                value={educacao}
                                onChange={(event) => setEducacao(event.target.value)}
                                id="educacao"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                rows={4}
                            ></textarea>
                        </div>
                    </div>
                </div>

                
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                        <label htmlFor="habilidades" className="block text-sm font-medium text-gray-900">Habilidades</label>
                        <div className="mt-2">
                            <textarea
                                value={habilidades}
                                onChange={(event) => setHabilidades(event.target.value)}
                                id="habilidades"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                rows={4}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold text-gray-900">Cancelar</button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Criar Currículo
                </button>
            </div>
        </form>
    )
}
