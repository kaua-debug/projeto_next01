'use client';

import { useEffect, useState } from 'react';
import { addInstrumento, getInstrumentos, removeInstrumento, updateInstrumento } from '@/lib/instrumentos/instrumentos';

interface Instrumento {
  id: number;
  nome: string;
  tipo: string;
}

export default function Page() {
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(0);
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');

  const fetchInstrumentos = async () => {
    try {
      const data = await getInstrumentos();
      setInstrumentos(data);
    } catch (error) {
      console.error('Erro ao buscar instrumentos:', error);
    }
  };

  useEffect(() => {
    fetchInstrumentos();
  }, []);

  const handleEdit = ({ id, nome, tipo }: Instrumento) => {
    setId(id);
    setNome(nome);
    setTipo(tipo);
    setIsModalOpen(true);
  };

  const handleRemove = async ({ id }: Instrumento) => {
    await removeInstrumento(id);
    fetchInstrumentos();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (id === 0) {
        await addInstrumento(nome, tipo);
      } else {
        await updateInstrumento(id, nome, tipo);
      }
      fetchInstrumentos();
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar instrumento:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Instrumentos</h1>

      <button
        onClick={() => handleEdit({ id: 0, nome: '', tipo: '' })}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Adicionar Novo Instrumento
      </button>

      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nome</th>
            <th className="border px-4 py-2">Tipo</th>
            <th className="border px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {instrumentos.map((instrumento) => (
            <tr key={instrumento.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{instrumento.nome}</td>
              <td className="border px-4 py-2">{instrumento.tipo}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleEdit(instrumento)} className="bg-green-600 text-white px-3 py-1 rounded mr-2">Editar</button>
                <button onClick={() => handleRemove(instrumento)} className="bg-red-600 text-white px-3 py-1 rounded">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">{id === 0 ? 'Cadastrar Instrumento' : 'Editar Instrumento'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required className="w-full p-2 border rounded text-gray-900" />
              <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} placeholder="Tipo" required className="w-full p-2 border rounded text-gray-900" />
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={closeModal} className="bg-gray-400 text-white px-3 py-2 rounded">Cancelar</button>
                <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
