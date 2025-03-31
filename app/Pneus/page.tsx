'use client';

import { useEffect, useState } from 'react';
import { addPneu, getPneus, removePneu, updatePneu } from '@/lib/Pneus/Pneus';

interface Pneu {
  id: number;
  marca: string;
  modelo: string;
  largura: number;
  raio: number;
  espessura: number;
  cargaMaxima: number;
}

export default function Page() {
  const [pneus, setPneus] = useState<Pneu[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(0);
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [largura, setLargura] = useState(0);
  const [raio, setRaio] = useState(0);
  const [espessura, setEspessura] = useState(0);
  const [cargaMaxima, setCargaMaxima] = useState(0);

  // Função para buscar os pneus
  const fetchPneus = async () => {
    try {
      const data = await getPneus();
      setPneus(data);
    } catch (error) {
      console.error('Erro ao buscar pneus:', error);
    }
  };

  // Carregar os pneus quando o componente for montado
  useEffect(() => {
    fetchPneus();
  }, []);

  // Função para preencher os campos para edição
  const handleEdit = (pneu: Pneu) => {
    setId(pneu.id);
    setMarca(pneu.marca);
    setModelo(pneu.modelo);
    setLargura(pneu.largura);
    setRaio(pneu.raio);
    setEspessura(pneu.espessura);
    setCargaMaxima(pneu.cargaMaxima);
    setIsModalOpen(true);
  };

  // Função para remover um pneu
  const handleRemove = async (id: number) => {
    await removePneu(id);
    fetchPneus();
  };

  // Fechar o modal de edição/cadastro
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função de envio de formulário
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (id === 0) {
        await addPneu(marca, modelo, largura, raio, espessura, cargaMaxima);
      } else {
        await updatePneu(id, marca, modelo, largura, raio, espessura, cargaMaxima);
      }
      fetchPneus();
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar pneu:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Pneus</h1>

      {/* Botão para abrir o modal de cadastro */}
      <div className="mb-4">
        <button
          onClick={() => handleEdit({ id: 0, marca: '', modelo: '', largura: 0, raio: 0, espessura: 0, cargaMaxima: 0 })}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Adicionar Novo Pneu
        </button>
      </div>

      {/* Tabela para listar pneus */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Marca</th>
              <th className="border px-4 py-2">Modelo</th>
              <th className="border px-4 py-2">Largura</th>
              <th className="border px-4 py-2">Raio</th>
              <th className="border px-4 py-2">Espessura</th>
              <th className="border px-4 py-2">Carga Máxima</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {pneus.map((pneu) => (
              <tr key={pneu.id}>
                <td className="border px-4 py-2">{pneu.marca}</td>
                <td className="border px-4 py-2">{pneu.modelo}</td>
                <td className="border px-4 py-2">{pneu.largura}</td>
                <td className="border px-4 py-2">{pneu.raio}</td>
                <td className="border px-4 py-2">{pneu.espessura}</td>
                <td className="border px-4 py-2">{pneu.cargaMaxima}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(pneu)}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(pneu.id)}
                    className="ml-2 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal para editar ou cadastrar pneu */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Cadastro de Pneu</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-900">Marca</label>
                  <input
                    type="text"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Modelo</label>
                  <input
                    type="text"
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Largura</label>
                  <input
                    type="number"
                    value={largura}
                    onChange={(e) => setLargura(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Raio</label>
                  <input
                    type="number"
                    value={raio}
                    onChange={(e) => setRaio(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-900">Espessura</label>
                  <input
                    type="number"
                    value={espessura}
                    onChange={(e) => setEspessura(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Carga Máxima</label>
                  <input
                    type="number"
                    value={cargaMaxima}
                    onChange={(e) => setCargaMaxima(Number(e.target.value))}
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
