'use client'

import { useState } from "react"

export default function Page() {
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [anciao, setAnciao] = useState('')
    const [telefoneAnciao, setTelefoneAnciao] = useState('')
    const [cooperador, setCooperador] = useState('')
    const [telefoneCooperador, setTelefoneCooperador] = useState('')
    const [cooperadorJovens, setCooperadorJovens] = useState('')
    const [telefoneCooperadorJovens, setTelefoneCooperadorJovens] = useState('')
    const [diacono, setDiacono] = useState('')
    const [telefoneDiacono, setTelefoneDiacono] = useState('')
    const [numeroUltimaSantaCeia, setNumeroUltimaSantaCeia] = useState('')

    const handleSubmit = (event: any) => {
        event.preventDefault()

        const casaOracao = {
            nome,
            endereco,
            anciao,
            telefoneAnciao,
            cooperador,
            telefoneCooperador,
            cooperadorJovens,
            telefoneCooperadorJovens,
            diacono,
            telefoneDiacono,
            numeroUltimaSantaCeia
        }

        console.log('Cadastro de Casa de Oração:', casaOracao)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold text-gray-900">Cadastro de Casa de Oração</h2>
                    <p className="mt-1 text-sm text-gray-600">Preencha as informações abaixo para cadastrar a casa de oração.</p>
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
                        <label htmlFor="anciao" className="block text-sm font-medium text-gray-900">Ancião</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={anciao}
                                onChange={(event) => setAnciao(event.target.value)}
                                id="anciao"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="telefoneAnciao" className="block text-sm font-medium text-gray-900">Telefone do Ancião</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={telefoneAnciao}
                                onChange={(event) => setTelefoneAnciao(event.target.value)}
                                id="telefoneAnciao"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="cooperador" className="block text-sm font-medium text-gray-900">Cooperador</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={cooperador}
                                onChange={(event) => setCooperador(event.target.value)}
                                id="cooperador"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="telefoneCooperador" className="block text-sm font-medium text-gray-900">Telefone do Cooperador</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={telefoneCooperador}
                                onChange={(event) => setTelefoneCooperador(event.target.value)}
                                id="telefoneCooperador"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

               
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="cooperadorJovens" className="block text-sm font-medium text-gray-900">Cooperador de Jovens</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={cooperadorJovens}
                                onChange={(event) => setCooperadorJovens(event.target.value)}
                                id="cooperadorJovens"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="telefoneCooperadorJovens" className="block text-sm font-medium text-gray-900">Telefone do Cooperador de Jovens</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={telefoneCooperadorJovens}
                                onChange={(event) => setTelefoneCooperadorJovens(event.target.value)}
                                id="telefoneCooperadorJovens"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="diacono" className="block text-sm font-medium text-gray-900">Diácono</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={diacono}
                                onChange={(event) => setDiacono(event.target.value)}
                                id="diacono"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="telefoneDiacono" className="block text-sm font-medium text-gray-900">Telefone do Diácono</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={telefoneDiacono}
                                onChange={(event) => setTelefoneDiacono(event.target.value)}
                                id="telefoneDiacono"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="numeroUltimaSantaCeia" className="block text-sm font-medium text-gray-900">Número da Última Santa Ceia</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={numeroUltimaSantaCeia}
                                onChange={(event) => setNumeroUltimaSantaCeia(event.target.value)}
                                id="numeroUltimaSantaCeia"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end gap-x-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Cadastrar
                    </button>
                </div>
            </div>
        </form>
    )
}

