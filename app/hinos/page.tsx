'use client';

import { useEffect, useState } from 'react';
import { addPneu, getPneus, removePneu, updatePneu } from '@/lib/Pneus/Pneus';

interface Pneu {
  id: number;
  marca: string;
  modelo: string;
  largura: number;
  raio: number;
  espessura: number;
  cargaMaxima: number;
}

export default function Page() {
  const [pneus, setPneus] = useState<Pneu[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(0);
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [largura, setLargura] = useState(0);
  const [raio, setRaio] = useState(0);
  const [espessura, setEspessura] = useState(0);
  const [cargaMaxima, setCargaMaxima] = useState(0);

  const fetchPneus = async () => {
    try {
      const data = await getPneus();
      setPneus(data);
    } catch (error) {
      console.error('Erro ao buscar pneus:', error);
    }
  };

  useEffect(() => {
    fetchPneus();
  }, []);

  const handleEdit = (pneu: Pneu) => {
    setId(pneu.id);
    setMarca(pneu.marca);
    setModelo(pneu.modelo);
    setLargura(pneu.largura);
    setRaio(pneu.raio);
    setEspessura(pneu.espessura);
    setCargaMaxima(pneu.cargaMaxima);
    setIsModalOpen(true);
  };

  const handleRemove = async (pneu: Pneu) => {
    await removePneu(pneu.id);
    fetchPneus();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (id === 0) {
        await addPneu(marca, modelo, largura, raio, espessura, cargaMaxima);
      } else {
        await updatePneu(id, marca, modelo, largura, raio, espessura, cargaMaxima);
      }
      fetchPneus();
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar pneu:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Pneus</h1>
      <button onClick={() => handleEdit({ id: 0, marca: '', modelo: '', largura: 0, raio: 0, espessura: 0, cargaMaxima: 0 })} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500">
        Adicionar Novo Pneu
      </button>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Largura</th>
            <th>Raio</th>
            <th>Espessura</th>
            <th>Carga Máxima</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pneus.map((pneu) => (
            <tr key={pneu.id}>
              <td>{pneu.marca}</td>
              <td>{pneu.modelo}</td>
              <td>{pneu.largura}</td>
              <td>{pneu.raio}</td>
              <td>{pneu.espessura}</td>
              <td>{pneu.cargaMaxima}</td>
              <td>
                <button onClick={() => handleEdit(pneu)} className="mr-2 bg-yellow-500 px-2 py-1 text-white">Editar</button>
                <button onClick={() => handleRemove(pneu)} className="bg-red-500 px-2 py-1 text-white">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2>Dados do Pneu</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} placeholder="Marca" required />
              <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} placeholder="Modelo" required />
              <input type="number" value={largura} onChange={(e) => setLargura(Number(e.target.value))} placeholder="Largura" required />
              <input type="number" value={raio} onChange={(e) => setRaio(Number(e.target.value))} placeholder="Raio" required />
              <input type="number" value={espessura} onChange={(e) => setEspessura(Number(e.target.value))} placeholder="Espessura" required />
              <input type="number" value={cargaMaxima} onChange={(e) => setCargaMaxima(Number(e.target.value))} placeholder="Carga Máxima" required />
              <button type="submit">Salvar</button>
              <button type="button" onClick={closeModal}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
