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
      setClientes(clientesList || []);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
      setClientes([]);
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
        await addCliente(nome, endereco, data_de_nascimento, numero_de_telefone, email, cpf);
      } else {
        await updateCliente(id, nome, endereco, data_de_nascimento, numero_de_telefone, email, cpf);
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
          {Array.isArray(clientes) && clientes.length > 0 ? (
            clientes.map((cliente) => (
              <tr key={cliente.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{cliente.nome}</td>
                <td className="border px-4 py-2">{cliente.endereco}</td>
                <td className="border px-4 py-2">{cliente.data_de_nascimento?.toString()}</td>
                <td className="border px-4 py-2">{cliente.numero_de_telefone}</td>
                <td className="border px-4 py-2">{cliente.email}</td>
                <td className="border px-4 py-2">{cliente.cpf}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => handleEdit(cliente)} className="bg-green-600 text-white px-3 py-1 rounded mr-2">Editar</button>
                  <button onClick={() => handleRemove(cliente)} className="bg-red-600 text-white px-3 py-1 rounded">Excluir</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center border px-4 py-2">Nenhum cliente encontrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}