import Link from 'next/link';
import XPButton from '../components/XPButton';
import ScrapCard from '../components/ScrapCard';
import TestimonialCard from '../components/TestimonialCard';
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
            <Link href="/login" className="hover:underline">Entrar</Link>
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
            <h2 className="font-bold text-[#4169E1] text-lg text-center">Thiago Melo</h2>
            <div className="mt-4 space-y-2 text-xs text-gray-600 border-t pt-2">
              <p>🇧🇷 São Paulo, Brasil</p>
              <p>🎂 01 de Jan de 2026</p>
            </div>
          </div>

          {/* MENU LATERAL */}
          <div className="bg-white border border-[#A7C5FF] p-2 rounded shadow-sm">
            <ul className="text-xs space-y-2">
              <li className="flex items-center space-x-2 p-1 hover:bg-[#D6E4FF] rounded cursor-pointer">
                <span>🏠</span> <Link href="/">Perfil</Link>
              </li>
              <li className="flex items-center space-x-2 p-1 hover:bg-[#D6E4FF] rounded cursor-pointer font-bold text-[#4169E1]">
                <span>📅</span> <Link href="/eventos">Eventos</Link>
              </li>
              <li className="flex items-center space-x-2 p-1 hover:bg-[#D6E4FF] rounded cursor-pointer">
                <span>📷</span> <a href="#">Fotos</a>
              </li>
              <li className="flex items-center space-x-2 p-1 hover:bg-[#D6E4FF] rounded cursor-pointer">
                <span>Videos</span>
              </li>
            </ul>
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

          {/* ÁREA DE POSTAR SCRAP */}
          <div className="bg-white border border-[#A7C5FF] p-4 rounded shadow-sm">
            <h3 className="text-[#4169E1] font-bold text-sm mb-3">Mural de Recados (Scraps)</h3>
            <textarea
              placeholder="Escreva um recado legal..."
              className="w-full p-2 border border-[#D6E4FF] rounded text-sm outline-none focus:border-[#4169E1] min-h-[80px] bg-[#F9FBFF]"
            />
            <div className="flex justify-between items-center mt-2">
              {/* PALHETA DE EMOJIS SIMULADA */}
              <div className="flex space-x-2 bg-gray-50 p-1 border border-gray-200 rounded">
                <button className="hover:bg-gray-200 p-1 rounded transition-colors text-sm" title="Sorriso">😀</button>
                <button className="hover:bg-gray-200 p-1 rounded transition-colors text-sm" title="Coração">💙</button>
                <button className="hover:bg-gray-200 p-1 rounded transition-colors text-sm" title="Música">🎸</button>
                <button className="hover:bg-gray-200 p-1 rounded transition-colors text-sm" title="Brilho">✨</button>
                <span className="text-[10px] text-gray-400 self-center px-1 border-l ml-1">Mais...</span>
              </div>

              <XPButton label="Enviar Scrap" />
            </div>
          </div>

          {/* LISTA DE CONTEÚDO DINÂMICO */}
          <div className="mt-8">
            {/* RECENTE (Amarelo) */}
            <ScrapCard
              text="Dando uma passada aqui pra ver as novidades! Ficou demais esse efeito do pino vermelho. ✨"
              author="Thiago"
              date="Agora mesmo"
              color="#fff9c4"
              textColor="#000"
            />

            {/* ANTIGO (Azul) */}
            <ScrapCard
              text="Esse mural ficou muito nostálgico! Lembrei total dos scraps do Orkut. 📍"
              author="Dev_Retro"
              date="Há 2 dias"
              color="#e1f5fe"
              textColor="#003366"
            />

            {/* SEÇÃO DE DEPOIMENTOS ABAIXO */}
            <div className="pt-6 mt-10 border-t border-dashed border-[#A7C5FF]">
              <h4 className="text-[#4169E1] font-bold text-[12px] mb-6 uppercase tracking-[0.2em]">Depoimentos de Amigos</h4>

              <TestimonialCard
                author="Juliana"
                text="O Thiago é um desenvolvedor super dedicado! Adorei o estilo do site. ⭐⭐⭐⭐⭐"
              />

              <TestimonialCard
                author="Lucas_Admin"
                text="O efeito de chat do MSN ficou perfeito. Parabéns pelo portfólio!"
              />
            </div>
          </div>
        </section>

        {/* COLUNA DIREITA (3 colunas) */}
        <aside className="col-span-3 space-y-4">

          {/* PLAYER DE MÚSICA ESTILO WINAMP */}
          <div className="bg-[#2b2b2b] border-2 border-gray-400 p-1 shadow-black shadow-lg w-full max-w-[250px] font-mono">
            <div className="bg-black p-2 border border-gray-600 flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] text-green-400">WINAMP</span>
                <span className="text-[10px] text-green-400 animate-pulse">02:45</span>
              </div>

              <div className="bg-black border border-green-900/30 overflow-hidden mb-2 h-6 flex items-center">
                <marquee className="text-green-500 text-xs">
                  Linkin Park - Numb (Official Audio).mp3  *** Playing from Spotify API
                </marquee>
              </div>

              {/* Esqueleto dos botões do player */}
              <div className="flex gap-1 justify-center">
                {['|<<', '>', '||', '[]', '>>|'].map((btn) => (
                  <button key={btn} className="bg-gray-700 border border-gray-500 text-[8px] text-gray-300 px-1 hover:bg-gray-600 active:bg-black">
                    {btn}
                  </button>
                ))}
              </div>
            </div>
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