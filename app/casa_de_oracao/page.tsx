'use client';

import { useEffect, useState } from 'react';
import { addCasaDeOracao, getCasasDeOracao, removeCasasDeOracao, updateCasaDeOracao } from '@/lib/casa_de_oracao/casa_de_oracao';


interface CasasDeOracao {
  id: number;
    nome: string, 
    endereco: string,
    anciao: string,
    telefoneAnciao: string,
    cooperador:string,
    telefoneCooperador: string,
    CooperadorDeJovens: string,
    telefoneCooperadorJovens: string,
    diacono: string, 
    telefoneDiacono: string,
    ultimaSantaCeia: number
}

export default function Page() {
  const [CasasDeOracao, setCasasDeOracao] = useState<CasasDeOracao[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(0);
  const [nome, setnome] = useState('');
  const [Endereco, setendereco] = useState('');
  const [Anciao, setAnciao] = useState('');
  const [NumeroDoAnciao, setNumeroDoAnciao] = useState('');
  const [Cooperador, setCooperador] = useState('');
  const [TelefoneCooperador, setTelefoneCooperador] = useState('');
  const [CooperadorDeJovens, setCooperadorDeJovens] = useState('');
  const [TelefoneCooperadorDeJovens, setTelefoneCooperadorDeJovens] = useState('');
  const [Diacono, setDiacono] = useState('');
  const [TelefoneDiacono, setTelefoneDiacono] = useState('');
  const [ultimaSantaCeia, setUltimaSantaCeia] = useState(0);


  
  const fetchCasaDeOracaos = async () => {
    try {
      const data = await setCasasDeOracao(id);
      setCasasDeOracao(data)
    } catch (error) {
      console.error('Erro ao buscar CasasDeOracao:', error);
    }
  };

  
  useEffect(() => {
    const fetchCasas = async () => {
      try {
        const data = await getCasasDeOracao();
        console.log("Dados recebidos:", data); 
        if (Array.isArray(data)) {
          setCasasDeOracao(data);
        } else {
          console.error("Erro: getCasasDeOracao não retornou um array.");
        }
      } catch (error) {
        console.error("Erro ao buscar casas de oração:", error);
      }
    };
    fetchCasas();
  }, []);
  

    const handleEdit = (casa_de_oracao: CasasDeOracao) => {
    setId(casa_de_oracao.id);
    setnome(casa_de_oracao.nome);
    setendereco(casa_de_oracao.endereco);
    setAnciao(casa_de_oracao.anciao);
    setNumeroDoAnciao(casa_de_oracao.telefoneAnciao);
    setCooperador(casa_de_oracao.cooperador);
    setTelefoneCooperador(casa_de_oracao.telefoneCooperador);
    setCooperadorDeJovens(casa_de_oracao.CooperadorDeJovens);
    setTelefoneCooperadorDeJovens(casa_de_oracao.diacono);
    setDiacono(casa_de_oracao.telefoneDiacono);
    setTelefoneDiacono(casa_de_oracao.ultimaSantaCeia);    
    setIsModalOpen(true);
  };

  
  const handleRemove = async (id: number) => {
    await removeCasasDeOracao(id);
    fetchCasaDeOracaos();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (id === 0) {
        await addCasaDeOracao( nome, Endereco, Anciao, NumeroDoAnciao, Cooperador, TelefoneCooperador, CooperadorDeJovens, TelefoneCooperadorDeJovens, Diacono, TelefoneDiacono, ultimaSantaCeia);
      } else {
        await updateCasaDeOracao(id, nome, Endereco, Anciao, NumeroDoAnciao, Cooperador, TelefoneCooperador, CooperadorDeJovens, TelefoneCooperadorDeJovens, Diacono, TelefoneDiacono, ultimaSantaCeia);
      }
      fetchCasaDeOracaos();
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar casa_de_oracao:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de CasasDeOracao</h1>


      <div className="mb-4">
        <button
          onClick={() => handleEdit({ id: 0, nome: '', endereco: '', anciao: '', telefoneAnciao: '', cooperador: '', telefoneCooperador: '', CooperadorDeJovens: '', telefoneCooperadorJovens: '', diacono: '', telefoneDiacono: '', ultimaSantaCeia: 0 })}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Adicionar Novo Casa de Oracao
        </button>
      </div>


      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">nome</th>
              <th className="border px-4 py-2">endereco</th>
              <th className="border px-4 py-2">anciao</th>
              <th className="border px-4 py-2">telefoneAnciao</th>
              <th className="border px-4 py-2">cooperador</th>
              <th className="border px-4 py-2">telefoneCooperador</th>
              <th className="border px-4 py-2">CooperadorDeJovens</th>
              <th className="border px-4 py-2">telefoneCooperadorJovens</th>
              <th className="border px-4 py-2">diacono</th>
              <th className="border px-4 py-2">telefoneDiacono</th>
              <th className="border px-4 py-2">ultimaSantaCeia</th>
            </tr>
          </thead>
          <tbody>

            {CasasDeOracao.map((CasasDeOracao) => (
              <tr key={CasasDeOracao.id}>
                <td className="border px-4 py-2">{CasasDeOracao.nome}</td>
                <td className="border px-4 py-2">{CasasDeOracao.endereco}</td>
                <td className="border px-4 py-2">{CasasDeOracao.anciao}</td>
                <td className="border px-4 py-2">{CasasDeOracao.telefoneAnciao}</td>
                <td className="border px-4 py-2">{CasasDeOracao.cooperador}</td>
                <td className="border px-4 py-2">{CasasDeOracao.telefoneCooperador}</td>
                <td className="border px-4 py-2">{CasasDeOracao.CooperadorDeJovens ? 'Sim' : 'Não'}</td>
                <td className="border px-4 py-2">{CasasDeOracao.telefoneCooperadorJovens ? 'Sim' : 'Não'}</td>
                <td className="border px-4 py-2">{CasasDeOracao.diacono}</td>
                <td className="border px-4 py-2">{CasasDeOracao.telefoneDiacono}</td>
                <td className="border px-4 py-2">{CasasDeOracao.ultimaSantaCeia}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(CasasDeOracao)}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(CasasDeOracao.id)}
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
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Cadastro de CasasDeOracao</h2>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-900">nome</label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setnome(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">endereco</label>
                  <input
                    type="text"
                    value={Endereco}
                    onChange={(e) => setendereco(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
              </div>


              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Anciao</label>
                  <input
                    type="text"
                    value={Anciao}
                    onChange={(e) => setAnciao((e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">telAnciao</label>
                  <input
                    type="text"
                    value={NumeroDoAnciao}
                    onChange={(e) => setNumeroDoAnciao((e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-900">cooperador</label>
                  <input
                    type="text"
                    value={Cooperador}
                    onChange={(e) => setCooperador((e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
              </div>


              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">telCooperador</label>
                  <input
                    type="text"
                    value={TelefoneCooperador}
                    onChange={(e) => setTelefoneCooperador((e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">CooperadorJovens</label>
                  <input
                    type="text"
                    value={CooperadorDeJovens}
                    onChange={(e) => setCooperadorDeJovens(e.target.value)}
                    className="w-full rounded-md border-gray-300"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">telCooperadorJovens</label>
                  <input
                    type="text"
                    value={TelefoneCooperadorDeJovens}
                    onChange={(e) => setTelefoneCooperadorDeJovens(e.target.value)}
                    className="w-full rounded-md border-gray-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">diacono</label>
                  <input
                    type="text"
                    value={Diacono}
                    onChange={(e) => setDiacono((e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">telDiacono</label>
                  <input
                    type="text"
                    value={TelefoneDiacono}
                    onChange={(e) => setTelefoneDiacono((e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">ultimaSantaCeia</label>
                  <input
                    type="text"
                    value={TelefoneDiacono}
                    onChange={(e) => setTelefoneDiacono((e.target.value))}
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
