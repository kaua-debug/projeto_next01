'use client';

import { useEffect, useState } from 'react';
import { addCarro, getCarros, removeCarros, updateCarros } from '@/lib/carros/carros';



interface Carro {
  id: number;
  fabricante: string;
  modelo: string;
  ano_fabricacao: number;
  cor: string;
  quilometros_rodados: number;
}



export default function Page() {
  const [carros, setCarros] = useState <Carro[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(0);
  const [fabricante, setFabricante] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano_fabricacao, setAnoFabricação] = useState(0);
  const [cor, setCor] = useState('');
  const [quilometros_rodados, setquilometros_rodados] = useState(0);

  const fetchCarros = async () => {

    try {
        const data = await getCarros()
        setCarros(data)
    } catch (error) {
      console.error('erro ao encontrar carros')
    }
  };
  
    useEffect(()=> {
      fetchCarros();
    }, []);

    const handleEdit = (carro: Carro) => {

      setId(carro.id);
      setFabricante(carro.fabricante);
      setModelo(carro.modelo);
      setAnoFabricação(carro.ano_fabricacao);
      setCor(carro.cor);
      setquilometros_rodados(carro.quilometros_rodados);
      setIsModalOpen(true);
    };

    const handleRemove = async (carro: Carro) =>{

      await removeCarros (carro.id);
      fetchCarros();
    };

    const closeModal = () => {
      setIsModalOpen(false);

    };

    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>)=> {
      event.preventDefault();

      try {
        if (id === 0) {
          await addCarro(fabricante, modelo, ano_fabricacao, cor, quilometros_rodados);
        } else {
          await updateCarros(id, fabricante, modelo, ano_fabricacao, cor, quilometros_rodados);
        }
        fetchCarros();
        
        closeModal();
      } catch (error) {
        console.error('Erro ao salvar carro:', error);
      }
    };
    

    

    
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Cadastro de Carros</h1>
  
        <button onClick={() => handleEdit({ id: 0, fabricante: '', modelo: '', ano_fabricacao: 0, cor: '', quilometros_rodados: 0 })} className="bg-blue-600 text-white px-4 py-2 rounded mb-4">
          Adicionar Novo Carro
        </button>
  
        <table className="table-auto w-full border">
        <thead>
              <tr>
                <th className="border px-4 py-2">Fabricante</th>
                <th className="border px-4 py-2">Modelo</th>
                <th className="border px-4 py-2">Ano de Fabricação</th>
                <th className="border px-4 py-2">Quilômetros Rodados</th> 
                <th className="border px-4 py-2">Ações</th>
              </tr>
            </thead>

                      <tbody>
            {carros.map((carro) => (
              <tr key={carro.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{carro.fabricante}</td>
                <td className="border px-4 py-2">{carro.modelo}</td>
                <td className="border px-4 py-2">{carro.ano_fabricacao}</td>
                <td className="border px-4 py-2">{carro.quilometros_rodados} km</td> {/* ← aqui! */}
                <td className="border px-4 py-2">
                  <button onClick={() => handleEdit(carro)} className="bg-green-600 text-white px-3 py-1 rounded mr-2">Editar</button>
                  <button onClick={() => handleRemove(carro)} className="bg-red-600 text-white px-3 py-1 rounded">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>

            
      
        </table>
  
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h2 className="text-lg font-bold mb-4">Cadastrar Carro</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div 
                  className='space-y-4'>
                  <div>
                    <label htmlFor=""
                      className="block text-sm font-medium text-gray-900"
                    >
                      fabricante
                    </label>
                    <input type="text" value={fabricante} onChange={(e) => setFabricante(e.target.value)} placeholder="Fabricante" required className="w-full p-2 border rounded text-gray-900" />
                  </div>

                </div>

                <div>
                  <label htmlFor=""
                  className='block text-sm font-medium text-gray-900'
                  >
                    Modelo
                  </label>
                  <input 
                    type="text" 
                    value={modelo} 
                    onChange={(e) => setModelo(e.target.value)} 
                    placeholder="Modelo" 
                    className="w-full p-2 border rounded text-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor=""
                  className='block text-sm font-medium text-gray-900'>
                    Ano de fabricacao
                  </label>
                <input  
                  placeholder = "ano de fabricacao" 
                  type="number" 
                  value={ano_fabricacao} 
                  onChange={(e) => setAnoFabricação(e.target.valueAsNumber)} 
                  className="w-full p-2 border rounded text-gray-900" 
                  required 
                />
                </div>

                <div>
                  <label htmlFor=""
                  className='block text-sm font-medium text-gray-900'
                  >
                    Cor
                  </label>
                <input 
                type="text"
                 value={cor}
                  onChange={(e) => setCor(e.target.value)}
                   placeholder="Cor"
                    className="w-full p-2 border rounded text-gray-900" />
                </div>

                    <div>
                      <label htmlFor=""
                      className='block text-sm font-medium text-gray-900'
                      >
                          Quilometros Rodados
                      </label>
                <input 
                  type="number" 
                  value={quilometros_rodados} 
                  onChange={(e) => setquilometros_rodados(e.target.valueAsNumber)} 
                  placeholder="quilometros rodados" 
                  className="w-full p-2 border rounded text-gray-900" 
                  required 
                />
                    </div>

                <div className="flex justify-end space-x-2">
                  <button type="button" 
                  onClick={closeModal}
                   className="bg-gray-400 text-white px-3 py-2 rounded"
                   >Cancelar
                   </button>
                  <button 
                  type="submit"
                   className="bg-blue-600 text-white px-3 py-2 rounded"
                   >Salvar
                   </button>

                    </div>

                </form>

              </div>

          </div>
        )}
  </div>
    );

}