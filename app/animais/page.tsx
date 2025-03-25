'use client'


import { useEffect, useState } from "react"
import { addAnimal, getAnimais, removeAnimais, updateAnimais } from "@/lib/animais/animais"


    interface Animal {
        id: number;
        nome: string;
        nomeCientifico: string;
        especie: string;
        grupo: string;
    }

export default function Page() {
    const [animais, setAnimais] = useState<Animal[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState(0);
    const [nome, setNome] = useState('')
    const [nomeCientifico, setNomeCientifico] = useState('')
    const [especie, setEspecie] = useState('') 
    const [grupo, setGrupo] = useState('')

    const fetchAnimais = async () => {

        try{
            const data = await getAnimais();
            setAnimais(data);
    } catch (error) {
        console.error('Erro ao buscar animais:', error)

        }

    };

    useEffect (() => {
        fetchAnimais();
    }, []);

        const handleEdit = ({id, nome, nomeCientifico, especie, grupo}: Animal) => {

            setId(id);
            setNome(nome);
            setNomeCientifico(nomeCientifico);
            setEspecie(especie);
            setGrupo(grupo);
            setIsModalOpen(true);

        };

        const handleRemove = async ({ id }: Animal) => {

            await removeAnimais(id);
            fetchAnimais();

        };

        const closeModal = () => {
            setNomeCientifico(false);
        };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        try {
          if ( id === 0 )  event.preventDefault()
            addAnimal( nome, nomeCientifico, especie, grupo );
        else await updateAnimais(id, nome, nomeCientifico, especie, grupo)
        fetchAnimais();
        closeModal();
        } catch (error) {
            console.error('Erro ao salvar animal:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Cadastro de Animais</h1>
          <button
            onClick={() => handleEdit({ id: 0, nome: '', nomeCientifico: '', especie: '', grupo: '' })}
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-500"
          >
            Adicionar Novo Animal
          </button>
    
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">Nome</th>
                <th className="border px-4 py-2">Nome Científico</th>
                <th className="border px-4 py-2">Espécie</th>
                <th className="border px-4 py-2">Grupo</th>
                <th className="border px-4 py-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {animais.map((animal) => (
                <tr key={animal.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{animal.nome}</td>
                  <td className="border px-4 py-2">{animal.nomeCientifico}</td>
                  <td className="border px-4 py-2">{animal.especie}</td>
                  <td className="border px-4 py-2">{animal.grupo}</td>
                  <td className="border px-4 py-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded mr-2" onClick={() => handleEdit(animal)}>Editar</button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={() => handleRemove(animal)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
              <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-lg font-bold mb-4">Cadastrar Animal</h2>
                <form onSubmit={handleSubmit}>
                  <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" className="block w-full mb-2 p-2 border rounded" required />
                  <input type="text" value={nomeCientifico} onChange={(e) => setNomeCientifico(e.target.value)} placeholder="Nome Científico" className="block w-full mb-2 p-2 border rounded" required />
                  <input type="text" value={especie} onChange={(e) => setEspecie(e.target.value)} placeholder="Espécie" className="block w-full mb-2 p-2 border rounded" required />
                  <input type="text" value={grupo} onChange={(e) => setGrupo(e.target.value)} placeholder="Grupo" className="block w-full mb-4 p-2 border rounded" required />
                  <div className="flex justify-end gap-4">
                    <button type="button" onClick={closeModal} className="text-gray-600">Cancelar</button>
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Salvar</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      );
    }
    