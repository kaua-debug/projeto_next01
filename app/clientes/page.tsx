'use client'
import { useEffect, useState } from "react";

import { addCliente, getClientes, removeCliente, updateCliente } from "@/lib/clientes/clientes";

interface Cliente {
  id: number;
  nome: string;
  endereco: string;
  data_de_nascimento: string;
  numero_de_telefone: string;
  email: string;
  cpf: string;
}

export default function Page() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState<number>(0);
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [data_de_nascimento, setDataDeNascimento] = useState('');
  const [numero_de_telefone, setNumeroDeTelefone] = useState('');  
  const [email, setEmail] = useState(''); 
  const [cpf, setCPF] = useState('');

  const fetchClientes = async () => {
    try {
      const clientesList = await getClientes();
      setClientes(clientesList);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  const handleEdit = (cliente?: Cliente) => {
    if (cliente) {
      setId(cliente.id);
      setNome(cliente.nome);
      setEndereco(cliente.endereco);
      setDataDeNascimento(cliente.data_de_nascimento);
      setNumeroDeTelefone(cliente.numero_de_telefone);
      setEmail(cliente.email);
      setCPF(cliente.cpf);
    } else {
      setId(0);
      setNome('');
      setEndereco('');
      setDataDeNascimento('');
      setNumeroDeTelefone('');
      setEmail('');
      setCPF('');
    }
    setIsModalOpen(true);
  };

  const handleRemove = async (cliente: Cliente) => {
    await removeCliente(cliente.id);
    fetchClientes();
  };

  const closeModal = () => {
    setId(0);
    setNome('');
    setEndereco('');
    setDataDeNascimento('');
    setNumeroDeTelefone('');
    setEmail('');
    setCPF('');
    setIsModalOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (id === 0) {
        await addCliente ({ nome, endereco, data_de_nascimento, numero_de_telefone, email, cpf });
      } else {
        await updateCliente(id, { nome, endereco, data_de_nascimento, numero_de_telefone, email, cpf });
      }
      fetchClientes();
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar cliente:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Clientes</h1>
      <button onClick={() => handleEdit()} className="bg-blue-600 text-white px-4 py-2 rounded mb-4">Adicionar Novo Cliente</button>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nome</th>
            <th className="border px-4 py-2">Endereço</th>
            <th className="border px-4 py-2">Data de Nascimento</th>
            <th className="border px-4 py-2">Telefone</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">CPF</th>
            <th className="border px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{cliente.nome}</td>
              <td className="border px-4 py-2">{cliente.endereco}</td>
              <td className="border px-4 py-2">{cliente.data_de_nascimento}</td>
              <td className="border px-4 py-2">{cliente.numero_de_telefone}</td>
              <td className="border px-4 py-2">{cliente.email}</td>
              <td className="border px-4 py-2">{cliente.cpf}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleEdit(cliente)} className="bg-green-600 text-white px-3 py-1 rounded mr-2">Editar</button>
                <button onClick={() => handleRemove(cliente)} className="bg-red-600 text-white px-3 py-1 rounded">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">{id === 0 ? 'Cadastrar Cliente' : 'Editar Cliente'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required className="w-full p-2 border rounded text-gray-900" />
              <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="Endereço" required className="w-full p-2 border rounded text-gray-900" />
              <input type="date" value={data_de_nascimento} onChange={(e) => setDataDeNascimento(e.target.value)} required className="w-full p-2 border rounded text-gray-900" />
              <input type="tel" value={numero_de_telefone} onChange={(e) => setNumeroDeTelefone(e.target.value)} placeholder="Telefone" required className="w-full p-2 border rounded text-gray-900" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-full p-2 border rounded text-gray-900" />
              <input type="text" value={cpf} onChange={(e) => setCPF(e.target.value)} placeholder="CPF" required className="w-full p-2 border rounded text-gray-900" />
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
