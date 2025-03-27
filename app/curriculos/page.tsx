'use client'

import { useEffect, useState } from "react";
import { addCurriculo, getCurriculos, removeCurriculo, updateCurriculo } from "@/lib/curriculo/curriculo";

interface Curriculo {
  id: number;
  nome: string;
  endereco: string;
  curriculo: string;
  habilidades: string;
}

export default function Page() {
  const [curriculos, setCurriculos] = useState<Curriculo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState<number | null>(null);
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [curriculo, setCurriculo] = useState('');
  const [habilidades, setHabilidades] = useState('');

  const fetchCurriculos = async () => {
    try {
      const curriculosList = await getCurriculos();
      setCurriculos(curriculosList || []);
    } catch (error) {
      console.error('Erro ao buscar currículos:', error);
      setCurriculos([]);
    }
  };

  useEffect(() => {
    fetchCurriculos();
  }, []);

  const handleEdit = (curriculo?: Curriculo) => {
    if (curriculo) {
      setId(curriculo.id);
      setNome(curriculo.nome);
      setEndereco(curriculo.endereco);
      setCurriculo(curriculo.curriculo);
      setHabilidades(curriculo.habilidades);
    } else {
      setId(null);
      setNome('');
      setEndereco('');
      setCurriculo('');
      setHabilidades('');
    }
    setIsModalOpen(true);
  };

  const handleRemove = async (curriculo: Curriculo) => {
    if (!curriculo.id) return;
    try {
      await removeCurriculo(curriculo.id);
      fetchCurriculos();
    } catch (error) {
      console.error('Erro ao remover currículo:', error);
    }
  };

  const closeModal = () => {
    setId(null);
    setNome('');
    setEndereco('');
    setCurriculo('');
    setHabilidades('');
    setIsModalOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (id === null) {
        await addCurriculo(nome, endereco, curriculo, habilidades);
      } else {
        await updateCurriculo(id, nome, endereco, curriculo, habilidades);
      }
      fetchCurriculos();
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar currículo:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Currículos</h1>
      <button onClick={() => handleEdit()} className="bg-blue-600 text-white px-4 py-2 rounded mb-4">Adicionar Novo Currículo</button>
      {curriculos.length > 0 ? (
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Endereço</th>
              <th className="border px-4 py-2">Currículo</th>
              <th className="border px-4 py-2">Habilidades</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {curriculos.map((curriculo) => (
              <tr key={curriculo.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{curriculo.nome}</td>
                <td className="border px-4 py-2">{curriculo.endereco}</td>
                <td className="border px-4 py-2">{curriculo.curriculo}</td>
                <td className="border px-4 py-2">{curriculo.habilidades}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => handleEdit(curriculo)} className="bg-green-600 text-white px-3 py-1 rounded mr-2">Editar</button>
                  <button onClick={() => handleRemove(curriculo)} className="bg-red-600 text-white px-3 py-1 rounded">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500 mt-4">Nenhum currículo cadastrado.</p>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">{id === null ? 'Cadastrar Currículo' : 'Editar Currículo'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required className="w-full p-2 border rounded text-gray-900" />
              <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="Endereço" required className="w-full p-2 border rounded text-gray-900" />
              <input type="text" value={curriculo} onChange={(e) => setCurriculo(e.target.value)} placeholder="Currículo" required className="w-full p-2 border rounded text-gray-900" />
              <input type="text" value={habilidades} onChange={(e) => setHabilidades(e.target.value)} placeholder="Habilidades" required className="w-full p-2 border rounded text-gray-900" />
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
