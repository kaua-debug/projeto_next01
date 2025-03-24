'use client'
import { useEffect, useState } from "react";
import { addMaterias, getMaterias, removeMateria, updateMateria } from "@/lib/materias/materias";

interface Materia {
  id: number;
  nome: string;
  descricao: string;
  ano_letivo: number;
}

export default function Page() {
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState<number | null>(null);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [ano_letivo, setAnoLetivo] = useState('');

  const fetchMaterias = async () => {
    try {
      const materiasList = await getMaterias();
      setMaterias(materiasList || []);
    } catch (error) {
      console.error('Erro ao buscar matérias:', error);
      setMaterias([]);
    }
  };

  useEffect(() => {
    fetchMaterias();
  }, []);

  const handleEdit = (materia?: Materia) => {
    if (materia) {
      setId(materia.id);
      setNome(materia.nome);
      setDescricao(materia.descricao);
      setAnoLetivo(String(materia.ano_letivo)); 
    } else {
      setId(null);
      setNome('');
      setDescricao('');
      setAnoLetivo('');
    }
    setIsModalOpen(true);
  };
  


  const handleRemove = async (materia: Materia) => {

    if (!materia.id) return;

    
    try {
      await removeMateria(materia.id);
      fetchMaterias();
    } catch (error) {
      console.error('Erro ao remover matéria:', error);
    }
  };

  const closeModal = () => {

    setId(null);
    setNome('');
    setDescricao('');
    setAnoLetivo('');
    setIsModalOpen(false);


  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (id === null) {
        await addMaterias ({ nome, descricao, ano_letivo });
      } else {
        await updateMateria (id, { nome, descricao, ano_letivo });
      }
      fetchMaterias();
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar matéria:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Matérias</h1>
      <button onClick={() => handleEdit()} className="bg-blue-600 text-white px-4 py-2 rounded mb-4">Adicionar Nova Matéria</button>
      {materias.length > 0 ? (
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Descrição</th>
              <th className="border px-4 py-2">Ano Letivo</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {materias.map((materia) => (
              <tr key={materia.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{materia.nome}</td>
                <td className="border px-4 py-2">{materia.descricao}</td>
                <td className="border px-4 py-2">{materia.ano_letivo}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => handleEdit(materia)} className="bg-green-600 text-white px-3 py-1 rounded mr-2">Editar</button>
                  <button onClick={() => handleRemove(materia)} className="bg-red-600 text-white px-3 py-1 rounded">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500 mt-4">Nenhuma matéria cadastrada.</p>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">{id === null ? 'Cadastrar Matéria' : 'Editar Matéria'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required className="w-full p-2 border rounded text-gray-900" />
              <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição" required className="w-full p-2 border rounded text-gray-900" />
              <input type="text" value={ano_letivo} onChange={(e) => setAnoLetivo(e.target.value)} placeholder="Ano Letivo" required className="w-full p-2 border rounded text-gray-900" />
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
