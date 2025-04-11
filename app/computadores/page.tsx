'use client'

import { useEffect, useState } from "react"
import { addComputador, getComputadores, removeComputador, updateComputador } from "@/lib/computadores/computadores"
import { platform } from "os"

    interface Computador {
        id: number
        descricao: string
        cpu: string
        memoria: string
        placa_de_videoVideo: string
        placa_mae: string
        fonte: string
        armazenamento: string
    }

export default function Page() {
    const [computador, setComputadores] = useState<Computador[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState(0)
    const [descricao, setDescricao] = useState('')
    const [cpu, setCpu] = useState('')
    const [memoria, setMemoria] = useState('')
    const [placa_de_video, setplaca_de_video] = useState('')
    const [placa_mae, setPlaca_mae] = useState('')
    const [fonte, setFonte] = useState('')
    const [armazenamento, setArmazenamento] = useState('')

    const fetchComputadores = async () => {
        try {
            const data = await getComputadores()
            setComputadores(data)
        } catch (error) {
            console.error('Erro ao buscar computadores:', error)
        }
    }

        useEffect(() =>{
            fetchComputadores()
        }, [])

        const handleEdit = (computador: Computador) => {
            setId(computador.id);
            setDescricao(computador.descricao);
            setCpu(computador.cpu);
            setMemoria(computador.memoria);
            setplaca_de_video(computador.placa_de_video || '');
            setPlaca_mae(computador.placa_mae || '');
            setFonte(computador.fonte);
            setArmazenamento(computador.armazenamento);
            setIsModalOpen(true);
        }

         const handleRemove = async (computador: Computador) => {
            await removeComputador(computador.id);
            fetchComputadores();
          };

          const closeModal = () => {
            setIsModalOpen(false);
          };


            const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              try {
                if (id === 0) {
                  await addComputador(descricao, cpu, memoria, placa_de_video, placa_mae, fonte, armazenamento);
                } else {
                  await updateComputador(id, descricao, cpu, memoria, placa_de_video, placa_mae, fonte, armazenamento);
                }
                fetchComputadores();
                closeModal();
              } catch (error) {
                console.error('Erro ao salvar computador:', error);
              }
            };
        

            return (
              <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Cadastro de Computadores</h1>
            
                <div className="mb-7">
                  <button
                    onClick={() =>
                      handleEdit({
                        id: 0,
                        descricao: '',
                        cpu: '',
                        memoria: '',
                        placa_de_video: '',
                        placa_mae: '',
                        fonte: '',
                        armazenamento: '',
                      })
                    }
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                  >
                    Adicionar Novo Computador
                  </button>
                </div>
            
                <div className="overflow-x-auto">
                  <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="border px-4 py-2">cpu</th>
                        <th className="border px-4 py-2">descri;ao</th>
                        <th className="border px-4 py-2">Placa de Video</th>
                        <th className="border px-4 py-2">Açoes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {computador.map((comp) => (
                        <tr key={comp.id} className="border-t">
                          <td className="border px-4 py-2">{comp.cpu}</td>
                          <td className="border px-4 py-2">{comp.descricao}</td>
                          <td className="border px-4 py-2">{comp.placa_de_video}</td>
                          <td className="border px-4 py-2">
                            <button
                              onClick={() => handleEdit(comp)}
                              className="mr-2 bg-yellow-500 px-2 py-1 text-white rounded-md"
                            >
                              Editar
                            </button>
                            <button
                              onClick={() => handleRemove(comp)}
                              className="bg-red-500 px-2 py-1 text-white rounded-md"
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
                        <h2 className="text-lg font-semibold text-gray-900">Cadastro de Computador</h2>
            
                        <div>
                          <label className="block text-sm font-medium text-gray-900">Descrição</label>
                          <input
                            type="text"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            className="w-full rounded-md border-gray-300 px-3 py-1.5"
                            required
                          />
                        </div>
            
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-900">CPU</label>
                            <input
                              type="text"
                              value={cpu}
                              onChange={(e) => setCpu(e.target.value)}
                              className="w-full rounded-md border-gray-300 px-3 py-1.5"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-900">Memória</label>
                            <input
                              type="text"
                              value={memoria}
                              onChange={(e) => setMemoria(e.target.value)}
                              className="w-full rounded-md border-gray-300 px-3 py-1.5"
                              required
                            />
                          </div>
                        </div>
            
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-900">Placa de Vídeo</label>
                            <input
                              type="text"
                              value={placa_de_video}
                              onChange={(e) => setplaca_de_video(e.target.value)}
                              className="w-full rounded-md border-gray-300 px-3 py-1.5"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-900">Placa Mãe</label>
                            <input
                              type="text"
                              value={placa_mae}
                              onChange={(e) => setPlaca_mae(e.target.value)}
                              className="w-full rounded-md border-gray-300 px-3 py-1.5"
                              required
                            />
                          </div>
                        </div>
            
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-900">Fonte</label>
                            <input
                              type="text"
                              value={fonte}
                              onChange={(e) => setFonte(e.target.value)}
                              className="w-full rounded-md border-gray-300 px-3 py-1.5"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-900">Armazenamento</label>
                            <input
                              type="text"
                              value={armazenamento}
                              onChange={(e) => setArmazenamento(e.target.value)}
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
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
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