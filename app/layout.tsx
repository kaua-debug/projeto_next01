import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
    <body className="bg-gray-100">
      <div className="flex">
        <aside className="w-64 h-screen bg-gray-800 text-gray-100">
          <div className="p-4 text-xl font-semibold border-b border-gray-700">
            Menu
          </div>
          <nav className="mt-4">
            <ul>
          

             
              <li>
                <a href="clientes" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
                clientes
                </a>
              </li>

              <li>
                <a href="produtos" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
            produtos
                </a>
              </li>

              <li>
                <a href="carros" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
              
            Carros

                </a>
              </li>


              <li>
                <a href="instrutores" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
              instrutores
                </a>
              </li>

              <li>
                <a href="alunos" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
              alunos
                </a>
              </li>
              
              <li>
                <a href="materias" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
              materias
                </a>
              </li>


              <li>
                <a href="livros" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
                  livros
                </a>
              </li>

              <li>
                <a href="filme" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
                  filme
                </a>
              </li>

              <li>
                <a href="Pneus" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
               Pneus
                </a>
              </li>


              <li>
                <a href="instrumentos" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
                  Instrumentos
                </a>
              </li>

              <li>
                <a href="computadores" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
                  Computadores
                 
                </a>
              </li>

                
              <li>
                <a href="casas" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
               casas
                 
                </a>
              </li>
 

              <li>
                <a href="apartamentos" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
             apartamentos



                  
                 
                </a>
              </li>

              <li>
                <a href="casa_de_oracao" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
               casas de oração
                 
                </a>
              </li>


              <li>
                <a href="hinos" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
               
               hinos
                 
                </a>
              </li>

              <li>
                <a href="usuarios" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
              usuarios
                 
                </a>
              </li>

              <li>
                <a href="curriculos"className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
                  curriculos
                 
                </a>
              </li>

              <li>
                <a href="animais" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
                  animais
                 
                </a>
              </li>


              <li>
                <a href="escolas" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
              escolas 
                 
                </a>
              </li>
              
              <li>
                <a href="professores" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  
              professores
                 
                </a>
              </li>


            </ul>
          </nav>
        </aside>
    
        <main className="flex-1 p-8">
        {children}
        
    
        </main>
      </div>

      
    
    </body>
    </html>

   
  );
}
