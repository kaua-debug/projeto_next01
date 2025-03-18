'use client'

import { addMaterias } from "@/lib/materias/materias"
import React, { useState } from "react"
const  addMaterias_ = (nome: string, descricao: string, anoLetivo: number) => addMaterias(nome, descricao, anoLetivo)
export default function Page() {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [anoLetivo, setAnoLetivo] = useState(0)

    const handleSubmit = (event: any) => {
        event.preventDefault()

        addMaterias_(nome, descricao, anoLetivo)
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold text-gray-900">Cadastro de Matéria</h2>
                    <p className="mt-1 text-sm text-gray-600">Preencha as informações abaixo para cadastrar a matéria.</p>
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
                        <label htmlFor="descricao" className="block text-sm font-medium text-gray-900">Descrição</label>
                        <div className="mt-2">
                            <textarea
                                value={descricao}
                                onChange={(event) => setDescricao(event.target.value)}
                                id="descricao"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                rows={4}
                            ></textarea>
                        </div>
                    </div>
                </div>

                
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="anoLetivo" className="block text-sm font-medium text-gray-900">Ano Letivo</label>
                        <div className="mt-2">
                            <input
                                type="number"
                                value={anoLetivo}
                                onChange={(event) => setAnoLetivo(event.target.value)}
                                id="anoLetivo"
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
                    Cadastrar Matéria
                </button>
            </div>
        </form>
    )
}
