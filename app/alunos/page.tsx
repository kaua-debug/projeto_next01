'use client';

import { useEffect, useState } from 'react';
import { addAluno, getAlunos, removeAluno, updateAluno } from '@/lib/alunos/aluno';

interface alunos {
  id: number;
  nome: string;
  nome_pai: string;
  nome_mae: string;
  data_nascimento: Date;
  cor_pele: string;
}

export default function Page() {
  const [alunos, setAlunos] = useState<alunos[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(0);
  const [nome, set_nome] = useState('');
  const [nomePai, setnome_pai] = useState('');
  const [nomeMae, setnome_mae] = useState('');
  const [dataNascimento, setdata_nascimento] = useState('');
  const [corPele, setcor_pele] = useState('');

  const fetchAlunos = async () => {
    try {
      const data = await getAlunos();
      data.map((aluno) => {
        aluno.data_nascimento = aluno.data_nascimento.toISOString().split('T')[0] || ''
      })
      setAlunos(data);
    } catch (error) {
      console.error('Erro ao buscar alunos:', error);
    }
  };

  useEffect(() => {
    fetchAlunos();
  }, []);


  const handleEdit = ({id, nome, nome_pai, nome_mae, data_nascimento, cor_pele}: alunos) => {
    setId(id)
    set_nome(nome)
    setnome_pai(nome_pai)
    setnome_mae(nome_mae)
    setdata_nascimento(data_nascimento)
    setcor_pele(cor_pele)
    setIsModalOpen(true)
  }

  const handleRemove = async ({id}: alunos) => {
    await removeAluno(id);
    fetchAlunos();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAlunoSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (id === 0) {
        await addAluno(nome, nomePai, nomeMae, dataNascimento, corPele);
      } else {
        await updateAluno(id, nome, nomePai, nomeMae, dataNascimento, corPele);
      }
      fetchAlunos();
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar alunos:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Alunos</h1>

      <button onClick={() => handleEdit({ id: 0, nome: '', nome_pai: '', nome_mae: '', data_nascimento: '', cor_pele: '' })}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Adicionar Novo Aluno
      </button>

      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nome</th>
            <th className="border px-4 py-2">Data de Nascimento</th>
            <th className="border px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (

            <tr 
              key={aluno.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{aluno.nome}</td>
              <td className="border px-4 py-2">{aluno.data_nascimento}</td>
              <td className="border px-4 py-2">
              <button onClick={()=> handleEdit(aluno)} className='bg-green-600 text-white px-3 py-1 rounded mr-2'>Editar</button>
                <button onClick={() => handleRemove(aluno)} className="bg-red-600 text-white px-3 py-1 rounded">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
+
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Cadastrar Aluno</h2>
            <form onSubmit={handleAlunoSubmit} className="space-y-4">
              <input type="text" value={nome} onChange={(e) => set_nome(e.target.value)} placeholder="Nome" required className="w-full p-2 border rounded text-gray-900" />
              <input type="text" value={nomePai} onChange={(e) => setnome_pai(e.target.value)} placeholder="Nome do Pai" className="w-full p-2 border rounded text-gray-900" />
              <input type="text" value={nomeMae} onChange={(e) => setnome_mae(e.target.value)} placeholder="Nome da Mãe" className="w-full p-2 border rounded text-gray-900" />
              <input type="date" value={dataNascimento} onChange={(e) => setdata_nascimento(e.target.value)} className="w-full p-2 border rounded text-gray-900" required />
              <input type="text" value={corPele} onChange={(e) => setcor_pele(e.target.value)} placeholder="Cor da Pele" className="w-full p-2 border rounded text-gray-900" />
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

