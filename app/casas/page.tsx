
'use client'

import { useEffect, useState } from "react"
import { addCasa, getCasas, updateCasa, removeCasa } from "@/lib/casas/casa"

interface Casa {
    tipo: string,
    endereco: string,
    areaTerreno: number,
    areaConstruida: number,
    quartos: number,
    banheiros: number,
    edicula: boolean,
    churrasqueira: boolean,
    piscina: boolean,
    valorCondominio: number,
    precoVenda: number,
    id: number,
}

export default function Page() {
    const [tipo, setTipo] = useState('');
    const [endereco, setEndereco] = useState('');
    const [areaTerreno, setAreaTerreno] = useState(0);
    const [areaConstruida, setAreaConstruida] = useState(0);
    const [quartos, setQuartos] = useState(0);
    const [banheiros, setBanheiros] = useState(0);
    const [edicula, setEdicula] = useState(false);
    const [churrasqueira, setChurrasqueira] = useState(false);
    const [piscina, setPiscina] = useState(false);
    const [valorCondominio, setValorCondominio] = useState(0);
    const [precoVenda, setPrecoVenda] = useState(0);
    const [id, setId] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [casas, setCasas] = useState<Casa[]>([]);

    const fetchCasa = async () => {
        try {
            const data = await getCasas()
            setCasas(data)
        } catch (error) {
            console.error('Erro fetching casas', error)
        }
    }

    useEffect(() => {
        fetchCasa().then(() => { return; })
    }, [])

    const handleEdit = ({
        id,
        tipo,
        endereco,
        areaTerreno,
        areaConstruida,
        quartos,
        banheiros,
        edicula,
        churrasqueira,
        piscina,
        valorCondominio,
        precoVenda

    }: Casa) => {
        setTipo(tipo)
        setEndereco(endereco)
        setAreaTerreno(areaTerreno)
        setAreaConstruida(areaConstruida)
        setQuartos(quartos)
        setBanheiros(banheiros)
        setEdicula(edicula)
        setChurrasqueira(churrasqueira)
        setPiscina(piscina)
        setValorCondominio(valorCondominio)
        setPrecoVenda(precoVenda)
        setId(id)
        setIsModalOpen(true)
    }

    const handleRemove = async ({
        id
    }: Casa) => {
        await removeCasa(id)
        fetchCasa()
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if (id === 0)
                await addCasa(
                    tipo,
                    endereco,
                    areaTerreno,
                    areaConstruida,
                    quartos,
                    banheiros,
                    edicula,
                    churrasqueira,
                    piscina,
                    valorCondominio,
                    precoVenda
                )
            else
                await updateCasa(
                    id,
                    tipo,
                    endereco,
                    areaTerreno,
                    areaConstruida,
                    quartos,
                    banheiros,
                    edicula,
                    churrasqueira,
                    piscina,
                    valorCondominio,
                    precoVenda
                )
            fetchCasa()
            closeModal()
        } catch (error) {
            console.error(' Erro adding casa:', error)
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2x1 font-bold mb-4">Cadastro de Casa</h1>

            <div className="mb-4">
                <button
                    onClick={() => handleEdit({
                        id: 0,
                        tipo: '',
                        endereco: '',
                        areaTerreno: 0,
                        areaConstruida: 0,
                        quartos: 0,
                        banheiros: 0,
                        edicula: false,
                        churrasqueira: false,
                        piscina: false,
                        valorCondominio: 0,
                        precoVenda: 0
                    })}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Adicionar nova Casa
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Tipo</th>
                            <th className="border px-4 py-2">Endereço</th>
                            <th className="border px-4 py-2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {casas.map((casa) => (
                            <tr
                                key={casa.id}
                                className="hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="border px-4 py-2">{casa.tipo}</td>
                                <td className="border px-4 py-2">{casa.endereco}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() => handleEdit(casa)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() => handleRemove(casa)}
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
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h2 className="text-lg font-semibold text-gray-900">Cadastro de Casa</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">Tipo</label>
                                    <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} className="w-full rounded-md border-gray-300 px-3 py-1.5" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">Endereço</label>
                                    <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} className="w-full rounded-md border-gray-300 px-3 py-1.5" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-3">
                                    <label className="block text-sm font-medium text-gray-900">Área do Terreno</label>
                                    <input type="number" value={areaTerreno} onChange={(e) => setAreaTerreno(parseInt(e.target.value))} className="w-full rounded-md border-gray-300 px-3 py-1.5" required />
                                </div>
                                <div className="col-span-3">
                                    <label className="block text-sm font-medium text-gray-900">Área Construída</label>
                                    <input type="number" value={areaConstruida} onChange={(e) => setAreaConstruida(parseInt(e.target.value))} className="w-full rounded-md border-gray-300 px-3 py-1.5" required />
                                </div>
                                <div className="col-span-3">
                                    <label className="block text-sm font-medium text-gray-900">Quartos</label>
                                    <input type="number" value={quartos} onChange={(e) => setQuartos(parseInt(e.target.value))} className="w-full rounded-md border-gray-300 px-3 py-1.5" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-3">
                                    <label className="block text-sm font-medium text-gray-900">Banheiros</label>
                                    <input type="number" value={banheiros} onChange={(e) => setBanheiros(parseInt(e.target.value))} className="w-full rounded-md border-gray-300 px-3 py-1.5" required />
                                </div>
                                <div className="col-span-3">
                                    <label className="block text-sm font-medium text-gray-900">Valor Condomínio</label>
                                    <input type="number" value={valorCondominio} onChange={(e) => setValorCondominio(parseInt(e.target.value))} className="w-full rounded-md border-gray-300 px-3 py-1.5" required />
                                </div>
                                <div className="col-span-3">
                                    <label className="block text-sm font-medium text-gray-900">Preço Venda</label>
                                    <input type="number" value={precoVenda} onChange={(e) => setPrecoVenda(parseInt(e.target.value))} className="w-full rounded-md border-gray-300 px-3 py-1.5" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-3"> 
                                    <label className="block text-sm font-medium text-gray-900">Edícula</label>
                                    <input type="checkbox" checked={edicula} onChange={(e) => setEdicula(e.target.checked)} className="w-full rounded-md border-gray-300 px-3 py-1.5" />
                                </div>
                                <div className="col-span-3">
                                    <label className="block text-sm font-medium text-gray-900">Churrasqueira</label>
                                    <input type="checkbox" checked={churrasqueira} onChange={(e) => setChurrasqueira(e.target.checked)} className="w-full rounded-md border-gray-300 px-3 py-1.5" />
                                </div>
                                <div className="col-span-3">
                                    <label className="block text-sm font-medium text-gray-900">Piscina</label>
                                    <input type="checkbox" checked={piscina} onChange={(e) => setPiscina(e.target.checked)} className="w-full rounded-md border-gray-300 px-3 py-1.5" />
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button type="button" className="text-sm font-semibold text-gray-900" onClick={closeModal}>Cancelar</button>
                                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"onClick={closeModal}>Salvar</button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </div>
    )
}
