'use client';

import { useEffect, useState } from 'react';
import { addApartamento, getApartamentos, removeApartamentos, updateApartamento } from '@/lib/apartamentos/apartamentos';

interface Apartamento {
  id: number;
  tipo: string;
  condominio: string;
  area_privativa: number;
  area_comum: number;
  quantidade_de_quartos: number;
  quantidade_de_banheiros: number;
  tem_churrasqueira: boolean;
  tem_piscina: boolean;
  valor_do_condominio: number;
  preco_de_venda: number;
}

export default function Page() {
  const [apartamentos, setApartamentos] = useState<Apartamento[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(0);
  const [tipo, setTipo] = useState('');
  const [condominio, setCondominio] = useState('');
  const [area_privativa, setarea_privativa] = useState(0);
  const [area_comum, setarea_comum] = useState(0);
  const [quantidade_de_quartos, setquantidade_de_quartos] = useState(0);
  const [quantidade_de_banheiros, setquantidade_de_banheiros] = useState(0);
  const [tem_churrasqueira, settem_churrasqueira] = useState(false);
  const [tem_piscina, settem_piscina] = useState(false);
  const [valor_do_condominio, setvalor_do_condominio] = useState(0);
  const [preco_de_venda, setpreco_de_venda] = useState(0);

  
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
    setarea_privativa(apartamento.area_privativa);
    setarea_comum(apartamento.area_comum);
    setquantidade_de_quartos(apartamento.quantidade_de_quartos);
    setquantidade_de_banheiros(apartamento.quantidade_de_banheiros);
    settem_churrasqueira(apartamento.tem_churrasqueira);
    settem_piscina(apartamento.tem_piscina);
    setvalor_do_condominio(apartamento.valor_do_condominio);
    setpreco_de_venda(apartamento.preco_de_venda);    
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
        await addApartamento(tipo, condominio, area_privativa, area_comum, quantidade_de_quartos, quantidade_de_banheiros, tem_churrasqueira, tem_piscina, valor_do_condominio, preco_de_venda);
      } else {
        await updateApartamento(id, tipo, condominio, area_privativa, area_comum, quantidade_de_quartos, quantidade_de_banheiros, tem_churrasqueira, tem_piscina, valor_do_condominio, preco_de_venda);
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
          onClick={() => handleEdit({ id: 0, tipo: '', condominio: '', area_privativa: 0, area_comum: 0, quantidade_de_quartos: 0, quantidade_de_banheiros: 0, tem_churrasqueira: false, tem_piscina: false, valor_do_condominio: 0, preco_de_venda: 0 })}
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
                <td className="border px-4 py-2">{apartamento.area_privativa}</td>
                <td className="border px-4 py-2">{apartamento.area_comum}</td>
                <td className="border px-4 py-2">{apartamento.quantidade_de_quartos}</td>
                <td className="border px-4 py-2">{apartamento.quantidade_de_banheiros}</td>
                <td className="border px-4 py-2">{apartamento.tem_churrasqueira ? 'Sim' : 'Não'}</td>
                <td className="border px-4 py-2">{apartamento.tem_piscina ? 'Sim' : 'Não'}</td>
                <td className="border px-4 py-2">{apartamento.valor_do_condominio}</td>
                <td className="border px-4 py-2">{apartamento.preco_de_venda}</td>
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
                    value={area_privativa}
                    onChange={(e) => setarea_privativa(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Área Comum</label>
                  <input
                    type="number"
                    value={area_comum}
                    onChange={(e) => setarea_comum(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-900">Quartos</label>
                  <input
                    type="number"
                    value={quantidade_de_quartos}
                    onChange={(e) => setquantidade_de_quartos(Number(e.target.value))}
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
                    value={quantidade_de_banheiros}
                    onChange={(e) => setquantidade_de_banheiros(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Churrasqueira</label>
                  <input
                    type="checkbox"
                    checked={tem_churrasqueira}
                    onChange={(e) => settem_churrasqueira(e.target.checked)}
                    className="w-full rounded-md border-gray-300"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Piscina</label>
                  <input
                    type="checkbox"
                    checked={tem_piscina}
                    onChange={(e) => settem_piscina(e.target.checked)}
                    className="w-full rounded-md border-gray-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Valor do Condomínio</label>
                  <input
                    type="number"
                    value={valor_do_condominio}
                    onChange={(e) => setvalor_do_condominio(Number(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Preço de Venda</label>
                  <input
                    type="number"
                    value={preco_de_venda}
                    onChange={(e) => setpreco_de_venda(Number(e.target.value))}
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
