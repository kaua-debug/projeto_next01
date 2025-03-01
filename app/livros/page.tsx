'use client'

import { useState } from "react"

export default function Page() {
    const [nome, setNome] = useState('')
    const [autor, setAutor] = useState('')
    const [assunto, setAssunto] = useState('')
    const [resumo, setResumo] = useState('')
    const [dataLancamento, setDataLancamento] = useState('')
    const [precoSugerido, setPrecoSugerido] = useState('')

    const handleSubmit = (event: any) => {
        event.preventDefault()

        const livro = {
            nome,
            autor,
            assunto,
            resumo,
            dataLancamento,
            precoSugerido
        }
        console.log('Cadastro de Livro:', livro)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold text-gray-900">Cadastro de Livro</h2>
                    <p className="mt-1 text-sm text-gray-600">Preencha as informações abaixo para cadastrar o livro.</p>
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
                        <label htmlFor="autor" className="block text-sm font-medium text-gray-900">Autor</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={autor}
                                onChange={(event) => setAutor(event.target.value)}
                                id="autor"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

            
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
                        <label htmlFor="resumo" className="block text-sm font-medium text-gray-900">Resumo</label>
                        <div className="mt-2">
                            <textarea
                                value={resumo}
                                onChange={(event) => setResumo(event.target.value)}
                                id="resumo"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                rows={4}
                            ></textarea>
                        </div>
                    </div>
                </div>

           
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="dataLancamento" className="block text-sm font-medium text-gray-900">Data de Lançamento</label>
                        <div className="mt-2">
                            <input
                                type="date"
                                value={dataLancamento}
                                onChange={(event) => setDataLancamento(event.target.value)}
                                id="dataLancamento"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="precoSugerido" className="block text-sm font-medium text-gray-900">Preço Sugerido</label>
                        <div className="mt-2">
                            <input
                                type="number"
                                value={precoSugerido}
                                onChange={(event) => setPrecoSugerido(event.target.value)}
                                id="precoSugerido"
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
                    Cadastrar Livro
                </button>
            </div>
        </form>
    )
}

