export default function Home() {
  return (
    <div className="min-h-screen bg-[#D6E4FF]">
      {/* HEADER / NAVBAR */}
      <header className="bg-[#4169E1] text-white p-2 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter italic">Remind-Me</h1>
          <nav className="space-x-4 text-sm font-medium">
            <a href="#" className="hover:underline">Início</a>
            <a href="#" className="hover:underline">Perfil</a>
            <a href="#" className="hover:underline">Amigos</a>
            <a href="#" className="hover:underline">Sair</a>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto mt-6 grid grid-cols-12 gap-4 px-2">

        {/* COLUNA ESQUERDA (3 colunas) */}
        <aside className="col-span-3 space-y-4">
          <div className="bg-white border border-[#A7C5FF] p-4 rounded shadow-sm">
            <div className="aspect-square bg-[#E8EEFA] border border-[#A7C5FF] flex items-center justify-center mb-4">
              <span className="text-[#4169E1] text-sm">Sua Foto</span>
            </div>
            <h2 className="font-bold text-[#4169E1] text-lg text-center">Thiago</h2>
            <div className="mt-4 space-y-2 text-xs text-gray-600 border-t pt-2">
              <p>🇧🇷 São Paulo, Brasil</p>
              <p>🎂 01 de Jan de 2026</p>
            </div>
          </div>

          <div className="bg-white border border-[#A7C5FF] p-3 rounded shadow-sm">
            <h3 className="text-xs font-bold text-[#4169E1] mb-2">CONFIABILIDADE</h3>
            <div className="flex space-x-1">
              {/* Ícones de gelinho/coração que vamos animar depois */}
              <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-inner"></div>
              <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-inner"></div>
              <div className="w-4 h-4 bg-gray-200 rounded-full shadow-inner"></div>
            </div>
          </div>
        </aside>

        {/* COLUNA CENTRAL (6 colunas) */}
        <section className="col-span-6 space-y-4">
          <div className="bg-white border border-[#A7C5FF] p-6 rounded shadow-sm min-h-[500px]">
            <div className="flex justify-between items-center border-b border-[#D6E4FF] pb-2 mb-4">
              <h3 className="font-bold text-[#4169E1]">Depoimentos (0)</h3>
              <button className="text-[10px] bg-[#4169E1] text-white px-2 py-1 rounded">Escrever</button>
            </div>
            <p className="text-gray-400 text-sm italic text-center mt-10">
              Ainda não há depoimentos aqui. Que tal pedir um para um amigo?
            </p>
          </div>
        </section>

        {/* COLUNA DIREITA (3 colunas) */}
        <aside className="col-span-3 space-y-4">
          {/* PLAYER DE MÚSICA */}
          <div className="bg-[#1a1a1a] p-3 rounded-md border-b-4 border-gray-700">
            <div className="text-[9px] text-green-400 font-mono mb-1">WINAMP - 01:23</div>
            <div className="bg-gray-800 h-1 w-full rounded-full">
              <div className="bg-green-500 w-1/2 h-full"></div>
            </div>
            <div className="mt-2 text-[10px] text-white truncate">Linkin Park - Numb.mp3</div>
          </div>

          {/* STATUS DA PLANTINHA */}
          <div className="bg-white border border-green-200 p-4 rounded shadow-sm">
            <h3 className="text-xs font-bold text-green-700 uppercase mb-2">🌱 Nossa Planta</h3>
            <div className="h-24 bg-green-50 rounded border-2 border-dashed border-green-100 flex items-center justify-center">
              <span className="text-[10px] text-green-300">Conecte um relacionamento</span>
            </div>
          </div>
        </aside>

      </main>
    </div>
  );
}