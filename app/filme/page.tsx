'use client'

import { useState } from "react"
import { addFilmes } from "@/lib/filmes/filmes"

export default function Page() {
    const [nome, setNome] = useState('')
    const [diretor, setDiretor] = useState('')
    const [assunto, setAssunto] = useState('')
    const [classificacaoEtaria, setClassificacaoEtaria] = useState('')

    const handlSubmit = (event: any) => {
        event.preventDefault()
        addFilmes(nome, diretor, assunto, classificacaoEtaria )
            } 

    return (
        <form onSubmit={handlSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold text-gray-900">Cadastro de Filme</h2>
                    <p className="mt-1 text-sm text-gray-600">Preencha as informações abaixo para cadastrar o filme.</p>
                </div>

                {/* Nome do Filme */}
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

                {/* Diretor do Filme */}
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="diretor" className="block text-sm font-medium text-gray-900">Diretor</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={diretor}
                                onChange={(event) => setDiretor(event.target.value)}
                                id="diretor"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Assunto do Filme */}
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="assunto" className="block text-sm font-medium text-gray-900">Assunto</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={assunto}
                                onChange={(event) => setAssunto(event.target.value)}
                                id="assunto"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="classificacaoEtaria" className="block text-sm font-medium text-gray-900">Classificação Etária</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={classificacaoEtaria}
                                onChange={(event) => setClassificacaoEtaria(event.target.value)}
                                id="classificacaoEtaria"
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
                    Cadastrar Filme
                </button>
            </div>
        </form>
    )
}
