'use client';

import { useEffect, useState } from 'react';
import { addFilmes, getFilmes, removeFilme, updateFilmes } from '@/lib/filmes/filmes';

interface Filme {
  id: number;
  nome: string;
  diretor: string;
  assunto: string;
  classificacaoEtaria: number;
}

export default function Page() {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(0);
  const [nome, setNome] = useState('');
  const [diretor, setDiretor] = useState('');
  const [assunto, setAssunto] = useState('');
  const [classificacaoEtaria, setClassificacaoEtaria] = useState(0);

  const fetchFilmes = async () => {
    try {
      const data = await getFilmes();
      setFilmes(data);
    } catch (error) {
      console.error('Error fetching filmes:', error);
    }
  };

  useEffect(() => {
    fetchFilmes();
  }, []);

  const handleEdit = ({ id, nome, diretor, assunto, classificacaoEtaria }: Filme) => {
    setId(id);
    setNome(nome);
    setDiretor(diretor);
    setAssunto(assunto);
    setClassificacaoEtaria(classificacaoEtaria);
    setIsModalOpen(true);
  };

  const handleRemove = async ({ id }: Filme) => {
    await removeFilme(id);
    fetchFilmes();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (id === 0) await addFilmes(nome, diretor, assunto, classificacaoEtaria);
      else await updateFilmes(id, nome, diretor, assunto, classificacaoEtaria);
      fetchFilmes();
      closeModal();
    } catch (error) {
      console.error('Error adding filme:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Filmes</h1>
      <button onClick={() => handleEdit({ id: 0, nome: '', diretor: '', assunto: '', classificacaoEtaria: 0 })} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500">
        Adicionar Novo Filme
      </button>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nome</th>
            <th className="border px-4 py-2">Diretor</th>
            <th className="border px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {filmes.map((filme) => (
            <tr key={filme.id} className="hover:bg-gray-100 cursor-pointer">
              <td className="border px-4 py-2">{filme.nome}</td>
              <td className="border px-4 py-2">{filme.diretor}</td>
              <td className="border px-4 py-2">
                <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white" onClick={() => handleEdit(filme)}>Editar</button>
                <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white ml-2" onClick={() => handleRemove(filme)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <h2 className="text-base font-semibold mb-4">Novo Filme</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" className="block w-full px-3 py-1.5 mb-2 border rounded" required />
              <input type="text" value={diretor} onChange={(e) => setDiretor(e.target.value)} placeholder="Diretor" className="block w-full px-3 py-1.5 mb-2 border rounded" required />
              <input type="text" value={assunto} onChange={(e) => setAssunto(e.target.value)} placeholder="Assunto" className="block w-full px-3 py-1.5 mb-2 border rounded" required />
              <input type="number" value={classificacaoEtaria} onChange={(e) => setClassificacaoEtaria(Number(e.target.value))} placeholder="Classificação Etária" className="block w-full px-3 py-1.5 mb-2 border rounded" required />
              <div className="flex justify-end mt-4">
                <button type="button" className="mr-2 text-sm text-gray-900" onClick={closeModal}>Cancelar</button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm text-white">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
