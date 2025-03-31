'use client';

import { useEffect, useState } from 'react';
import { addApartamento, getApartamentos, removeApartamentos, updateApartamento } from '@/lib/apartamentos/apartamentos';

interface Apartamento {
  id: number;
  tipo: string;
  condominio: string;
  areaPrivativa: number;
  areaComum: number;
  qtdQuartos: number;
  qtdBanheiros: number;
  temChurrasqueira: boolean;
  temPiscina: boolean;
  valorCondominio: number;
  precoVenda: number;
}

export default function Page() {
  const [apartamentos, setApartamentos] = useState<Apartamento[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(0);
  const [tipo, setTipo] = useState('');
  const [condominio, setCondominio] = useState('');
  const [areaPrivativa, setAreaPrivativa] = useState(0);
  const [areaComum, setAreaComum] = useState(0);
  const [qtdQuartos, setQtdQuartos] = useState(0);
  const [qtdBanheiros, setQtdBanheiros] = useState(0);
  const [temChurrasqueira, setTemChurrasqueira] = useState(false);
  const [temPiscina, setTemPiscina] = useState(false);
  const [valorCondominio, setValorCondominio] = useState(0);
  const [precoVenda, setPrecoVenda] = useState(0);

  
  const fetchApartamentos = async () => {
    try {
      const data = await getApartamentos();
      setApartamentos(data);
    } catch (error) {
      console.error('Erro ao buscar apartamentos:', error);
    }
  };

  
  useEffect(() => {
    fetchApartamentos();
  }, []);

    const handleEdit = (apartamento: Apartamento) => {
    setId(apartamento.id);
    setTipo(apartamento.tipo);
    setCondominio(apartamento.condominio);
    setAreaPrivativa(apartamento.areaPrivativa);
    setAreaComum(apartamento.areaComum);
    setQtdQuartos(apartamento.qtdQuartos);
    setQtdBanheiros(apartamento.qtdBanheiros);
    setTemChurrasqueira(apartamento.temChurrasqueira);
    setTemPiscina(apartamento.temPiscina);
    setValorCondominio(apartamento.valorCondominio);
    setPrecoVenda(apartamento.precoVenda);    
    setIsModalOpen(true);
  };

  
  const handleRemove = async (id: number) => {
    await removeApartamentos(id);
    fetchApartamentos();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (id === 0) {
        await addApartamento(tipo, condominio, areaPrivativa, areaComum, qtdQuartos, qtdBanheiros, temChurrasqueira, temPiscina, valorCondominio, precoVenda);
      } else {
        await updateApartamento(id, tipo, condominio, areaPrivativa, areaComum, qtdQuartos, qtdBanheiros, temChurrasqueira, temPiscina, valorCondominio, precoVenda);
      }
      fetchApartamentos();
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar apartamento:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Apartamentos</h1>


      <div className="mb-4">
        <button
          onClick={() => handleEdit({ id: 0, tipo: '', condominio: '', areaPrivativa: 0, areaComum: 0, qtdQuartos: 0, qtdBanheiros: 0, temChurrasqueira: false, temPiscina: false, valorCondominio: 0, precoVenda: 0 })}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Adicionar Novo Apartamento
        </button>
      </div>


      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Tipo</th>
              <th className="border px-4 py-2">Condomínio</th>
              <th className="border px-4 py-2">Área Privativa</th>
              <th className="border px-4 py-2">Área Comum</th>
              <th className="border px-4 py-2">Quartos</th>
              <th className="border px-4 py-2">Banheiros</th>
              <th className="border px-4 py-2">Churrasqueira</th>
              <th className="border px-4 py-2">Piscina</th>
              <th className="border px-4 py-2">Valor do Condomínio</th>
              <th className="border px-4 py-2">Preço de Venda</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {apartamentos.map((apartamento) => (
              <tr key={apartamento.id}>
                <td className="border px-4 py-2">{apartamento.tipo}</td>
                <td className="border px-4 py-2">{apartamento.condominio}</td>
                <td className="border px-4 py-2">{apartamento.areaPrivativa}</td>
                <td className="border px-4 py-2">{apartamento.areaComum}</td>
                <td className="border px-4 py-2">{apartamento.qtdQuartos}</td>
                <td className="border px-4 py-2">{apartamento.qtdBanheiros}</td>
                <td className="border px-4 py-2">{apartamento.temChurrasqueira ? 'Sim' : 'Não'}</td>
                <td className="border px-4 py-2">{apartamento.temPiscina ? 'Sim' : 'Não'}</td>
                <td className="border px-4 py-2">{apartamento.valorCondominio}</td>
                <td className="border px-4 py-2">{apartamento.precoVenda}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(apartamento)}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(apartamento.id)}
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


      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Cadastro de Apartamento</h2>
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
                  <label className="block text-sm font-medium text-gray-900">Condomínio</label>
                  <input
                    type="text"
                    value={condominio}
                    onChange={(e) => setCondominio(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
              </div>


              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Área Privativa</label>
                  <input
                    type="number"
                    value={areaPrivativa}
                    onChange={(e) => setAreaPrivativa(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Área Comum</label>
                  <input
                    type="number"
                    value={areaComum}
                    onChange={(e) => setAreaComum(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-900">Quartos</label>
                  <input
                    type="number"
                    value={qtdQuartos}
                    onChange={(e) => setQtdQuartos(Number(e.target.value))}
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
                    value={qtdBanheiros}
                    onChange={(e) => setQtdBanheiros(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-900">Churrasqueira</label>
                  <input
                    type="checkbox"
                    checked={temChurrasqueira}
                    onChange={(e) => setTemChurrasqueira(e.target.checked)}
                    className="w-full rounded-md border-gray-300"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-900">Piscina</label>
                  <input
                    type="checkbox"
                    checked={temPiscina}
                    onChange={(e) => setTemPiscina(e.target.checked)}
                    className="w-full rounded-md border-gray-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Valor do Condomínio</label>
                  <input
                    type="number"
                    value={valorCondominio}
                    onChange={(e) => setValorCondominio(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Preço de Venda</label>
                  <input
                    type="number"
                    value={precoVenda}
                    onChange={(e) => setPrecoVenda(Number(e.target.value))}
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
