'use client';

import { useEffect, useState } from 'react';
import { addApartamento, getApartamentos, removeApartamentos, updateApartamento } from '@/lib/apartamentos/apartamentos';

interface Apartamento {
  id: number;
  tipo: string;
  condominio: string;
  areaPrivativa: number;
  areaComum: number;
  quartos: number;
  banheiros: number;
  churrasqueira: boolean;
  piscina: boolean;
  valorCondominio: number;
  precoVenda: number;
}

export default function Page() {
  const [tipo, setTipo] = useState('');
  const [condominio, setCondominio] = useState('');
  const [area_privativa, setAreaPrivativa] = useState(0);
  const [area_comum, setAreaComum] = useState(0);
  const [quantidade_de_quartos, setQuantidadeDeQuartos] = useState(0);
  const [quantidade_de_banheiros, setQuantidadeDeBanheiros] = useState(0);
  const [tem_churrasqueira, setTemChurrasqueira] = useState(false);
  const [tem_piscina, setTemPiscina] = useState(false);
  const [valor_do_condominio, setValorDoCondominio] = useState(0);
  const [preco_de_venda, setPrecoDeVenda] = useState(0);

  const [apartamentos, setApartamentos] = useState<Apartamento[]>([]);
  const [id, setId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setQuantidadeDeQuartos(apartamento.quartos);
    setQuantidadeDeBanheiros(apartamento.banheiros);
    setTemChurrasqueira(apartamento.churrasqueira);
    setTemPiscina(apartamento.piscina);
    setValorDoCondominio(apartamento.valorCondominio);
    setPrecoDeVenda(apartamento.precoVenda);
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
        // Passando os parâmetros separados para addApartamento
        await addApartamento(
          tipo,
          condominio,
          area_privativa,
          area_comum,
          quantidade_de_quartos,
          quantidade_de_banheiros,
          tem_churrasqueira,
          tem_piscina,
          valor_do_condominio,
          preco_de_venda
        );
      } else {
        await updateApartamento(id, tipo, condominio, area_privativa, area_comum, quantidade_de_quartos, quantidade_de_banheiros, tem_churrasqueira, tem_piscina, valor_do_condominio, preco_de_venda);
      }
      fetchApartamentos();
      closeModal();
    } catch (error) {
      console.error('Erro ao adicionar apartamento:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Apartamentos</h1>

      <div className="mb-4">
        <button
          onClick={() => handleEdit({
            id: 0,
            tipo: '',
            condominio: '',
            areaPrivativa: 0,
            areaComum: 0,
            quartos: 0,
            banheiros: 0,
            churrasqueira: false,
            piscina: false,
            valorCondominio: 0,
            precoVenda: 0,
          })}
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
              <th className="border px-4 py-2">Área Privativa (m²)</th>
              <th className="border px-4 py-2">Área Comum (m²)</th>
              <th className="border px-4 py-2">Quartos</th>
              <th className="border px-4 py-2">Banheiros</th>
              <th className="border px-4 py-2">Churrasqueira</th>
              <th className="border px-4 py-2">Piscina</th>
              <th className="border px-4 py-2">Valor Condomínio</th>
              <th className="border px-4 py-2">Preço de Venda</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {apartamentos.map((ap) => (
              <tr key={ap.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{ap.tipo}</td>
                <td className="border px-4 py-2">{ap.condominio}</td>
                <td className="border px-4 py-2">{ap.areaPrivativa}</td>
                <td className="border px-4 py-2">{ap.areaComum}</td>
                <td className="border px-4 py-2">{ap.quartos}</td>
                <td className="border px-4 py-2">{ap.banheiros}</td>
                <td className="border px-4 py-2">{ap.churrasqueira ? 'Sim' : 'Não'}</td>
                <td className="border px-4 py-2">{ap.piscina ? 'Sim' : 'Não'}</td>
                <td className="border px-4 py-2">R$ {ap.valorCondominio}</td>
                <td className="border px-4 py-2">R$ {ap.precoVenda}</td>
                <td className="border px-4 py-2">
                  <button 
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => handleEdit(ap)}
                  >
                    Editar
                  </button>
                  <button
                    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    onClick={() => handleRemove(ap.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <h2 className="text-base font-semibold text-gray-900 mb-4">
              Novo Apartamento
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                  <div>
                    <label htmlFor="tipo" className="block text-sm font-medium text-gray-900">Tipo</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        value={tipo}
                        onChange={(event) => setTipo(event.target.value)}
                        id="tipo"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="condominio" className="block text-sm font-medium text-gray-900">Condomínio</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        value={condominio}
                        onChange={(event) => setCondominio(event.target.value)}
                        id="condominio"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="area_privativa" className="block text-sm font-medium text-gray-900">Área Privativa (m²)</label>
                    <div className="mt-1">
                      <input
                        type="number"
                        value={area_privativa}
                        onChange={(event) => setAreaPrivativa(Number(event.target.value))}
                        id="area_privativa"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                  {/* Continue para os outros campos */}
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
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
