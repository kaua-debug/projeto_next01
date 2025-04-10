'use client';

import { useEffect, useState } from 'react';
import { addEscola, getEscolas, removeEscola, updateEscola } from '@/lib/escolas/escola';

interface Escola {
  id: number;
  nome: string;
  endereco: string;
  quantidade_alunos: number;
  telefone: string;
}

export default function Page() {
  const [escolas, setEscolas] = useState<Escola[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(0);
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [quantidade_alunos, setQuantidade_alunos] = useState(0);
  const [telefone, setTelefone] = useState('');

  const fetchEscolas = async () => {
    try {
      const data = await getEscolas();
      setEscolas(data);
    } catch (error) {
      console.error('Erro ao buscar escolas:', error);
    }
  };

  useEffect(() => {
    fetchEscolas();
  }, []);

  const handleEdit = ({ id, nome, endereco, quantidade_alunos, telefone }: Escola) => {
    setId(id);
    setNome(nome);
    setEndereco(endereco);
    setQuantidade_alunos(quantidade_alunos);
    setTelefone(telefone);
    setIsModalOpen(true);
  };

  const handleRemove = async ({ id }: Escola) => {
    await removeEscola(id);
    fetchEscolas();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (id === 0) await addEscola(nome, endereco, quantidade_alunos, telefone);
      else await updateEscola(id, nome, endereco, quantidade_alunos, telefone);
      fetchEscolas();
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar escola:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Escolas</h1>

      <div className="mb-4">
        <button
          onClick={() => handleEdit({ id: 0, nome: '', endereco: '', quantidade_alunos: 0, telefone: '' })}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
        >
          Adicionar Nova Escola
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Endereço</th>
              <th className="border px-4 py-2">Qtd. Alunos</th>
              <th className="border px-4 py-2">Telefone</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {escolas.map((escola) => (
              <tr key={escola.id} className="hover:bg-gray-100 cursor-pointer">
                <td className="border px-4 py-2">{escola.nome}</td>
                <td className="border px-4 py-2">{escola.endereco}</td>
                <td className="border px-4 py-2">{escola.quantidade_alunos}</td>
                <td className="border px-4 py-2">{escola.telefone}</td>
                <td className="border px-4 py-2">
                  <button className="bg-indigo-600 px-3 py-2 text-sm text-white mr-2" onClick={() => handleEdit(escola)}>Editar</button>
                  <button className="bg-red-600 px-3 py-2 text-sm text-white" onClick={() => handleRemove(escola)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Cadastro de Escola</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label htmlFor=""
                className='block text-sm font-medium text-gray-900'
                >
                    Nome
                </label>
              <input
               type="text" 
               value={nome}
                onChange={(e) => setNome(e.target.value)}
                 placeholder="Nome"
                  required 
                  className="w-full p-2 border rounded"
                   />
              </div>

              <div>
                <label htmlFor=""
                className='block text-sm font-medium text-gray-900'
                >
                  endereco
                </label>
              <input
               type="text" 
              value={endereco}
               onChange={(e) => setEndereco(e.target.value)} 
               placeholder="Endereço" 
               required
                className="w-full p-2 border rounded" 
                />
              </div>

              <div>
                <label htmlFor=""
                className='block text-sm font-medium text-gray-900'
                >
                  Qtd Alunos
                </label>
              <input 
              type="number"
               value={quantidade_alunos}
                onChange={(e) => setQuantidade_alunos(Number(e.target.value))} 
                placeholder="Quantidade de Alunos" 
                required 
                className="w-full p-2 border rounded"
                 />
              </div>

              <div>
                <label htmlFor=""
                className='block text-sm font-medium text-gray-900'
                >
                  telefone
                </label>
              <input 
              type="text"
               value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                 placeholder="Telefone"
                  required 
                  className="w-full p-2 border rounded"
                   />
              </div>

              <div className="flex justify-end gap-4">
                <button type="button" onClick={closeModal} className="text-gray-700">Cancelar</button>
                <button type="submit" className="bg-indigo-600 px-4 py-2 text-white rounded">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
