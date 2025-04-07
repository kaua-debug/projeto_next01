'use client'

import { addProduto, getProdutos, removeProduto, updateProdutos } from "@/lib/produtos/produtos"
import { useEffect, useState } from "react"

interface Produto {
    id: number;
    nome: string;
    valorUnitario: number;
    validade: string;
    descricao: string;
}

export default function Page() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [id, setId] = useState(0)
    const [nome, setNome] = useState('nome produto')
    const [valorUnitario, setValorUnitario] = useState<number>(0)
    const [validade, setValidade] = useState('')
    const [descricao, setDescricao] = useState('Descrição')

    const fetchProdutos = async () => {
        try {
            const data = await getProdutos()
            setProdutos(data)
        } catch (error) {
            console.error('Erro ao buscar produtos', error)
        }
    }

    useEffect(() => {
        fetchProdutos()
    }, [])

    const handleEdit = ({ id, nome, valorUnitario, validade, descricao }: Produto) => {
        setId(id)
        setNome(nome)
        setValorUnitario(valorUnitario)
        setValidade(validade)
        setDescricao(descricao)
        setIsModalOpen(true)
    }

    const handleRemove = async ({ id }: Produto) => {
        await removeProduto(id)
        fetchProdutos()
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if (id === 0) {
                await addProduto(nome, valorUnitario, validade, descricao)
            } else {
                await updateProdutos(id, nome, valorUnitario, validade, descricao)
            }
            fetchProdutos()
            closeModal()
        } catch (error) {
            console.error('Erro ao salvar produto:', error)
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Cadastro de Produtos</h1>

            <div className="mb-4">
                <button
                    onClick={() => handleEdit({
                        id: 0,
                        nome: '',
                        valorUnitario: 0,
                        validade: '',
                        descricao: ''
                    })}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Adicionar novo produto
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Nome</th>
                            <th className="border px-4 py-2">Valor Unitário</th>
                            <th className="border px-4 py-2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto) => (
                            <tr key={produto.id} className="hover:bg-gray-100 cursor-pointer">
                                <td className="border px-4 py-2">{produto.nome}</td>
                                <td className="border px-4 py-2">{produto.valorUnitario}</td>
                                <td className="border px-4 py-2 space-x-2">
                                    <button
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                                        onClick={() => handleEdit(produto)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                                        onClick={() => handleRemove(produto)}
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8 w-full max-w-md">
                        <h2 className="text-base font-semibold text-gray-900 mb-4">
                            {id === 0 ? 'Novo Produto' : 'Editar Produto'}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="nome" className="block text-sm font-medium text-gray-900">Nome</label>
                                    <input
                                        type="text"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        id="nome"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="valor_unitario" className="block text-sm font-medium text-gray-900">Valor Unitário</label>
                                    <input
                                        type="number"
                                        value={valorUnitario}
                                        onChange={(e) => setValorUnitario(Number(e.target.value))}
                                        id="valor_unitario"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="validade" className="block text-sm font-medium text-gray-900">Validade</label>
                                    <input
                                        type="date"
                                        value={validade}
                                        onChange={(e) => setValidade(e.target.value)}
                                        id="validade"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="descricao" className="block text-sm font-medium text-gray-900">Descrição</label>
                                    <input
                                        type="text"
                                        value={descricao}
                                        onChange={(e) => setDescricao(e.target.value)}
                                        id="descricao"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-end gap-x-4">
                                <button
                                    type="button"
                                    className="text-sm font-semibold text-gray-900"
                                    onClick={closeModal}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                                >
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
