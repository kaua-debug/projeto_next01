'use client'

import { useEffect, useState } from "react"
import { addProfessor, getProfessores, removeProfessor, updateProfessor } from "@/lib/professores/professor"


    interface professor {
        id: number
        nome: string
        endereco: string, 
        especialidade: string
        telefone: string
        email: string
    }

export default function ProfessoresPage() {
    const [professores, setProfessores] = useState<professor[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [id, setId] = useState(0)
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [especialidade, setEspecialidade] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')

    const fetchProfessores= async () => {
        try {
            const data = await getProfessores()
            setProfessores(data)
        } catch (error) {

            console.error('erro ao buscar professores:', error)
        }
      
    }

        useEffect(() => {
            fetchProfessores()
        }, [])


        const handleEdit = ({ id, nome, endereco, especialidade, telefone, email}: professor) => {

            setId(id)
            setNome(nome)
            setEndereco(endereco)
            setEspecialidade(especialidade)
            setTelefone(telefone)
            setEmail(email)
            setIsModalOpen(true)

        }

        const handleRemove = async ({ id }: professor) => {
            await removeProfessor(id)
            fetchProfessores()
        }

        const closeModal = () => {
            setIsModalOpen(false)
        }


        const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            try {
                if (id === 0) {
                    await addProfessor(nome, endereco, especialidade, telefone, email)
                } else {
                    await updateProfessor(id, nome, endereco, especialidade, telefone, email)
                }
                fetchProfessores()
                closeModal()
            } catch (error) {
                console.error('Erro ao salvar professor:', error)
            }
        }
    return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Cadastro de Professores</h1>
          <button onClick={() => handleEdit({ id: 0, nome: '', endereco: '', especialidade: '', telefone: '', email: '' })} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500">
            Adicionar Novo Professor
          </button>
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">Nome</th>
                <th className="border px-4 py-2">Especialidade</th>
                <th className="border px-4 py-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {professores.map((professor) => (
                <tr key={professor.id} className="hover:bg-gray-100 cursor-pointer">
                  <td className="border px-4 py-2">{professor.nome}</td>
                  <td className="border px-4 py-2">{professor.especialidade}</td>
                  <td className="border px-4 py-2">
                    <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white" onClick={() => handleEdit(professor)}>Editar</button>
                    <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white ml-2" onClick={() => handleRemove(professor)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isModalOpen && (
            <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-8 w-full max-w-md">
                <h2 className="text-base font-semibold mb-4">Novo Professor</h2>
                <form onSubmit={handleSubmit}>
                  <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" className="block w-full px-3 py-1.5 mb-2 border rounded" required />
                  <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="Endereço" className="block w-full px-3 py-1.5 mb-2 border rounded" required />
                  <input type="text" value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} placeholder="Especialidade" className="block w-full px-3 py-1.5 mb-2 border rounded" required />
                  <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone" className="block w-full px-3 py-1.5 mb-2 border rounded" required />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" className="block w-full px-3 py-1.5 mb-2 border rounded" required />
                  <div className="flex justify-end mt-4">
                    <button type="button" className="mr-2 text-sm text-gray-900" onClick={closeModal}>Cancelar</button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm text-white">Salvar</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )
    }
    