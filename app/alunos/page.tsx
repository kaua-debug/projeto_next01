'use client'

import { useState } from "react"

export default function Page() {
    const [nome, setNome] = useState('')
    const [nomePai, setNomePai] = useState('')
    const [nomeMae, setNomeMae] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [corPele, setCorPele] = useState('')

    const handleSubmit = (event: any) => {
        event.preventDefault()

        const aluno = {
            nome,
            nomePai,
            nomeMae,
            dataNascimento,
            corPele
        }
        console.log('Cadastro de Aluno:', aluno) // Aqui você pode enviar os dados para um servidor ou outro processamento
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold text-gray-900">Cadastro de Aluno</h2>
                    <p className="mt-1 text-sm text-gray-600">Preencha as informações abaixo para cadastrar o aluno.</p>
                </div>

                {/* Nome do Aluno */}
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

                {/* Nome do Pai */}
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nomePai" className="block text-sm font-medium text-gray-900">Nome do Pai</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={nomePai}
                                onChange={(event) => setNomePai(event.target.value)}
                                id="nomePai"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Nome da Mãe */}
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nomeMae" className="block text-sm font-medium text-gray-900">Nome da Mãe</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={nomeMae}
                                onChange={(event) => setNomeMae(event.target.value)}
                                id="nomeMae"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Data de Nascimento */}
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

                {/* Cor da Pele */}
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="corPele" className="block text-sm font-medium text-gray-900">Cor da Pele</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={corPele}
                                onChange={(event) => setCorPele(event.target.value)}
                                id="corPele"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Botões de Ação */}
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold text-gray-900">Cancelar</button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Cadastrar Aluno
                </button>
            </div>
        </form>
    )
}
