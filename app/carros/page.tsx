'use client';

import { useState } from 'react';
import { addCarro } from '@/lib/carros/carros';

export default function Page() {
  const [fabricante, setFabricante] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano_fabricacao, setAnoFabricação] = useState('');
  const [cor, setCor] = useState('');
  const [quilometros_rodados, setQuilometrosRodados] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await addCarro(fabricante, modelo, ano_fabricacao, cor, quilometros_rodados);
      alert('Carro cadastrado com sucesso!');
      // Aqui você pode limpar os campos ou mostrar outras mensagens
    } catch (error) {
      console.error('Erro ao cadastrar carro:', error);
      alert('Erro ao cadastrar carro');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="fabricante" className="block text-sm font-medium text-gray-900">
          Fabricante:
        </label>
        <input
          type="text"
          id="fabricante"
          value={fabricante}
          onChange={(e) => setFabricante(e.target.value)}
          className="mt-2 block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
        />
      </div>

      <div>
        <label htmlFor="modelo" className="block text-sm font-medium text-gray-900">
          Modelo:
        </label>
        <input
          type="text"
          id="modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          className="mt-2 block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
        />
      </div>

      <div>
        <label htmlFor="anoFabricação" className="block text-sm font-medium text-gray-900">
          Ano de Fabricação:
        </label>
        <input
          type="number"
          id="anoFabricação"
          value={ano_fabricacao}
          onChange={(e) => setAnoFabricação(e.target.value)}
          className="mt-2 block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
        />
      </div>

      <div>
        <label htmlFor="cor" className="block text-sm font-medium text-gray-900">
          Cor:
        </label>
        <input
          type="text"
          id="cor"
          value={cor}
          onChange={(e) => setCor(e.target.value)}
          className="mt-2 block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
        />
      </div>

      <div>
        <label htmlFor="quilometrosRodados" className="block text-sm font-medium text-gray-900">
          Quilômetros Rodados:
        </label>
        <input
          type="number"
          id="quilometrosRodados"
          value={quilometros_rodados}
          onChange={(e) => setQuilometrosRodados(e.target.value)}
          className="mt-2 block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
        />
      </div>

      {/* Botão de salvar */}
      <div>
        <button
          type="submit"
          className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
