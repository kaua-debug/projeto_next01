
'use client'

import { useEffect, useState } from "react"
import { addCasa, getCasas, updateCasa, removeCasa } from "@/lib/casas/casa"

interface Casa {
    tipo: string,
    endereco: string,
    area_terreno: number,
    areaconstruida: number,
    quartos: number,
    banheiros: number,
    edicula: boolean,
    churrasqueira: boolean,
    piscina: boolean,
    valorcondominio: number,
    precovenda: number,
    id: number,
}

export default function Page() {
    const [tipo, setTipo] = useState('');
    const [endereco, setEndereco] = useState('');
    const [area_terreno, setarea_terreno] = useState(0);
    const [areaconstruida, setareaconstruida] = useState(0);
    const [quartos, setQuartos] = useState(0);
    const [banheiros, setBanheiros] = useState(0);
    const [edicula, setEdicula] = useState(false);
    const [churrasqueira, setChurrasqueira] = useState(false);
    const [piscina, setPiscina] = useState(false);
    const [valorcondominio, setvalorcondominio] = useState(0);
    const [precovenda, setprecovenda] = useState(0);
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
        area_terreno,
        areaconstruida,
        quartos,
        banheiros,
        edicula,
        churrasqueira,
        piscina,
        valorcondominio,
        precovenda

    }: Casa) => {
        setTipo(tipo)
        setEndereco(endereco)
        setarea_terreno(area_terreno)
        setareaconstruida(areaconstruida)
        setQuartos(quartos)
        setBanheiros(banheiros)
        setEdicula(edicula)
        setChurrasqueira(churrasqueira)
        setPiscina(piscina)
        setvalorcondominio(valorcondominio)
        setprecovenda(precovenda)
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
                    area_terreno,
                    areaconstruida,
                    quartos,
                    banheiros,
                    edicula,
                    churrasqueira,
                    piscina,
                    valorcondominio,
                    precovenda
                )
            else
                await updateCasa(
                    id,
                    tipo,
                    endereco,
                    area_terreno,
                    areaconstruida,
                    quartos,
                    banheiros,
                    edicula,
                    churrasqueira,
                    piscina,
                    valorcondominio,
                    precovenda
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
                        area_terreno: 0,
                        areaconstruida: 0,
                        quartos: 0,
                        banheiros: 0,
                        edicula: false,
                        churrasqueira: false,
                        piscina: false,
                        valorcondominio: 0,
                        precovenda: 0
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
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Cadastro de casas</h2>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-900">Tipo</label>
                  <input
                    type="text"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">endereco</label>
                  <input
                    type="text"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
              </div>


              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">area_terreno</label>
                  <input
                    type="number"
                    value={area_terreno}
                    onChange={(e) => setarea_terreno(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">areaconstruida</label>
                  <input
                    type="number"
                    value={areaconstruida}
                    onChange={(e) => setareaconstruida(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-900">Quartos</label>
                  <input
                    type="number"
                    value={quartos}
                    onChange={(e) => setQuartos(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
              </div>


              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-900">Banheiros</label>
                  <input
                    type="number"
                    value={banheiros}
                    onChange={(e) => setBanheiros(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Churrasqueira</label>
                  <input
                    type="checkbox"
                    checked={churrasqueira}
                    onChange={(e) => setChurrasqueira(e.target.checked)}
                    className="w-full rounded-md border-gray-300"
                  />





                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Piscina</label>
                  <input
                    type="checkbox"
                    checked={piscina}
                    onChange={(e) => setPiscina(e.target.checked)}
                    className="w-full rounded-md border-gray-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Valor do Condomínio</label>
                  <input
                    type="number"
                    value={valorcondominio}
                    onChange={(e) => setvalorcondominio(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Preço de Venda</label>
                  <input
                    type="number"
                    value={precovenda}
                    onChange={(e) => setprecovenda(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
              </div>


              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold text-gray-900"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
