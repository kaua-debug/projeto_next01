'use client';

import { useEffect, useState } from 'react';
import { addUsuario, getUsuarios, removeUsuario, updateUsuario } from '@/lib/usuarios/usuarios';

interface Usuario {
  id: number;
  nome: string;
  apelido: string;
  email: string;
  senha?: string; 
}

export default function Page() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(0);
  const [nome, setNome] = useState('');
  const [apelido, setApelido] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const data = await getUsuarios();
      setUsuarios(data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const handleEdit = (usuario: Usuario) => {
    setId(usuario.id);
    setNome(usuario.nome);
    setApelido(usuario.apelido);
    setEmail(usuario.email);
    setSenha(''); 
    setIsModalOpen(true);
  };

  const handleRemove = async (usuarioId: number) => {
    try {
      await removeUsuario(usuarioId);
      fetchUsuarios();
    } catch (error) {
      console.error('Erro ao remover usuário:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setId(0);
    setNome('');
    setApelido('');
    setEmail('');
    setSenha('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (id === 0) {
        await addUsuario(nome, apelido, email, senha);
      } else {
        await updateUsuario(id, nome, apelido, email, senha);
      }
      fetchUsuarios();
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Usuários</h1>
      <button onClick={() => handleEdit({ id: 0, nome: '', apelido: '', email: '' })} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
        Adicionar Novo Usuário
      </button>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Apelido</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nome}</td>
              <td>{usuario.apelido}</td>
              <td>{usuario.email}</td>
              <td>
                <button onClick={() => handleEdit(usuario)} className="mr-2 bg-yellow-500 px-2 py-1 text-white">Editar</button>
                <button onClick={() => handleRemove(usuario.id)} className="bg-red-500 px-2 py-1 text-white">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Dados do Usuário</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required className="border p-2 rounded" />
              <input type="text" value={apelido} onChange={(e) => setApelido(e.target.value)} placeholder="Apelido" required className="border p-2 rounded" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="border p-2 rounded" />
              <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" className="border p-2 rounded" />
              <div className="flex justify-end space-x-2 mt-4">
                <button type="submit" className="bg-green-500 px-4 py-2 text-white rounded">Salvar</button>
                <button type="button" onClick={closeModal} className="bg-gray-400 px-4 py-2 text-white rounded">Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}