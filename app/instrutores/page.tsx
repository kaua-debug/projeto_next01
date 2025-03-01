'use client'

import { useState } from "react"

export default function Page() {
    const [nome, setNome] = useState('')
    const [especialidade, setEspecialidade] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [endereco, setEndereco] = useState('')
    const [comum, setComum] = useState('')

    const handleSubmit = (event: any) => {
        event.preventDefault()

        const instrutor = { nome, especialidade, dataNascimento, endereco, comum }
        console.log('Cadastro de Instrutor:', instrutor)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold text-gray-900">Cadastro de Instrutor</h2>
                    <p className="mt-1 text-sm text-gray-600">Preencha as informações abaixo para cadastrar o instrutor.</p>
                </div>

                
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-900">Nome</label>
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
                        <label htmlFor="especialidade" className="block text-sm font-medium text-gray-900">Especialidade</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={especialidade}
                                onChange={(event) => setEspecialidade(event.target.value)}
                                id="especialidade"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-900">Data de Nascimento</label>
                        <div className="mt-2">
                            <input
                                type="date"
                                value={dataNascimento}
                                onChange={(event) => setDataNascimento(event.target.value)}
                                id="dataNascimento"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

              
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="endereco" className="block text-sm font-medium text-gray-900">Endereço</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={endereco}
                                onChange={(event) => setEndereco(event.target.value)}
                                id="endereco"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="comum" className="block text-sm font-medium text-gray-900">Comum</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={comum}
                                onChange={(event) => setComum(event.target.value)}
                                id="comum"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
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
                    Cadastrar Instrutor
                </button>
            </div>
        </form>
    )
}
