            'use client';

            import { useEffect, useState } from 'react';
            import { addLivro, getLivros, removeLivro, updateLivro } from '@/lib/livros/livros';

            interface Livro {
              id: number;
              nome: string;
              autor: string;
              assunto: string;
              resumo: string;
              dataLancamento: string;
              preco_sugerido: number;
            }

            export default function Page() {
              const [livros, setLivros] = useState<Livro[]>([]);
              const [isModalOpen, setIsModalOpen] = useState(false);
              const [id, setId] = useState(0);
              const [nome, setNome] = useState('');
              const [autor, setAutor] = useState('');
              const [assunto, setAssunto] = useState('');
              const [resumo, setResumo] = useState('');
              const [dataLancamento, setDataLancamento] = useState('');
              const [preco_sugerido, setPrecoSugerido] = useState(0);
            
              const fetchLivros = async () => {
                try {
                  const data = await getLivros();
                  setLivros(data);
                } catch (error) {
                  console.error('Erro ao buscar livros:', error);
                }
              };
          
              useEffect(() => {
                fetchLivros();
              }, []);
          
              const handleEdit = ({ id, nome, autor, assunto, resumo, dataLancamento, preco_sugerido }: Livro) => {
                setId(id);
                setNome(nome);
                setAutor(autor);
                setAssunto(assunto);
                setResumo(resumo);
                setDataLancamento(dataLancamento);
                setPrecoSugerido(preco_sugerido);
                setIsModalOpen(true);
              };
          
              const handleRemove = async ({ id }: Livro) => {
                await removeLivro(id);
                fetchLivros();
              };
          
              const closeModal = () => {
                setIsModalOpen(false);
              };
          
              const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                
                try {
                  console.log("Enviando dados:", { id, nome, autor, assunto, resumo, dataLancamento, preco_sugerido });
              
                  if (id === 0) {
                    await addLivro(nome, autor, assunto, resumo, dataLancamento, preco_sugerido);
                  } else {
                    await updateLivro(id, nome, autor, assunto, resumo, dataLancamento, preco_sugerido);
                  }
              
                  console.log("Livro salvo com sucesso!");
              
                  await fetchLivros(); // Atualiza a lista
                  closeModal(); 
                } catch (error) {
                  console.error("Erro ao salvar livro:", error);
                }
              };
              
                      
              return (
                <div className="container mx-auto p-4">
                  <h1 className="text-2xl font-bold mb-4">Cadastro de Livros</h1>
                  <button onClick={() => handleEdit({ id: 0, nome: '', autor: '', assunto: '', resumo: '', dataLancamento: '', preco_sugerido: 0 })} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500">
                    Adicionar Novo Livro
                  </button>
                  <table className="table-auto w-full mt-4">
                    <thead>
                      <tr>
                        <th className="border px-4 py-2">Nome</th>
                        <th className="border px-4 py-2">Autor</th>
                        <th className="border px-4 py-2">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {livros.map((livro) => (
                        <tr key={livro.id} className="hover:bg-gray-100 cursor-pointer">
                          <td className="border px-4 py-2">{livro.nome}</td>
                          <td className="border px-4 py-2">{livro.autor}</td>
                          <td className="border px-4 py-2">
                            <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white" onClick={() => handleEdit(livro)}>Editar</button>
                            <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white ml-2" onClick={() => handleRemove(livro)}>Excluir</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {isModalOpen && (
                    <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-50 flex items-center justify-center">
                      <div className="bg-white rounded-lg p-8 w-full max-w-md">
                        <h2 className="text-base font-semibold mb-4">Novo Livro</h2>
                        <form onSubmit={handleSubmit}>
                          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" className="block w-full px-3 py-1.5 mb-2 border rounded" required />
                          <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} placeholder="Autor" className="block w-full px-3 py-1.5 mb-2 border rounded" required />
                          <input type="text" value={assunto} onChange={(e) => setAssunto(e.target.value)} placeholder="Assunto" className="block w-full px-3 py-1.5 mb-2 border rounded" required />
                          <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} placeholder="Resumo" className="block w-full px-3 py-1.5 mb-2 border rounded" required />
                          <input type="date" value={dataLancamento} onChange={(e) => setDataLancamento(e.target.value)} placeholder="Data de Lançamento" className="block w-full px-3 py-1.5 mb-2 border rounded" required />
                          <input type="number" value={preco_sugerido} onChange={(e) => setPrecoSugerido(Number(e.target.value))} placeholder="Preço Sugerido" className="block w-full px-3 py-1.5 mb-2 border rounded" required />
                          <div className="flex justify-end mt-4">
                            <button type="button" className="mr-2 text-sm text-gray-900" onClick={closeModal}>Cancelar</button>
                            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm text-white">
                                  Salvar
                                </button>

                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
