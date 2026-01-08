'use client';
import { useState } from 'react';
import XPButton from '../../components/XPButton';

export default function Eventos() {
    const [view, setView] = useState<'todos' | 'meus'>('todos');
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    // Mock de dados (Simulando o que virá do banco de dados futuramente)
    const todosEventos = [
        { id: 1, nome: "Festa Retrô 2000", local: "Clube da Esquina", autor: "Admin", participante: false },
        { id: 2, nome: "Churrasco de Inauguração", local: "Meu Apartamento", autor: "Thiago", participante: true },
        { id: 3, nome: "Hackathon Next.js", local: "Auditório Tech", autor: "Google", participante: true },
    ];

    // Filtra os eventos baseado no botão clicado
    const eventosExibidos = view === 'todos'
        ? todosEventos
        : todosEventos.filter(ev => ev.autor === "Thiago" || ev.participante);

    return (
        <div className="min-h-screen bg-[#D6E4FF] p-4 font-sans">
            <div className="max-w-4xl mx-auto bg-white border border-[#4169E1] shadow-xl rounded-sm">

                {/* HEADER */}
                <div className="bg-[#4169E1] p-2 text-white font-bold flex justify-between items-center shadow-inner">
                    <div className="flex items-center gap-2">
                        <span>📅</span>
                        <span className="text-sm">Explorar Eventos</span>
                    </div>
                    <button onClick={() => window.history.back()} className="text-[10px] bg-[#3252b0] px-2 py-0.5 border border-white/30 hover:bg-blue-800">FECHAR [X]</button>
                </div>

                <div className="p-4">
                    {/* BARRA DE NAVEGAÇÃO INTERNA */}
                    <div className="flex gap-2 mb-6 border-b border-gray-200 pb-4">
                        <button
                            onClick={() => setView('todos')}
                            className={`px-4 py-1 text-xs font-bold rounded-t-lg transition-all ${view === 'todos' ? 'bg-[#4169E1] text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                        >
                            🌐 Todos os Eventos
                        </button>
                        <button
                            onClick={() => setView('meus')}
                            className={`px-4 py-1 text-xs font-bold rounded-t-lg transition-all ${view === 'meus' ? 'bg-[#4169E1] text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                        >
                            👤 Meus Eventos
                        </button>
                        <div className="ml-auto">
                            <XPButton
                                label={isOpen ? "✖ Cancelar" : "➕ Criar Evento"}
                                onClick={() => { setIsEditing(false); setIsOpen(!isOpen); }}
                            />
                        </div>
                    </div>

                    {/* ABA EXPANSÍVEL (CRIAR / EDITAR) */}
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                        <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded shadow-inner relative">
                            <div className="absolute top-2 right-2 text-yellow-300 text-xl opacity-50">✍️</div>
                            <h3 className="font-bold text-gray-700 mb-4">{isEditing ? "Editar meu Evento" : "Informações do Novo Evento"}</h3>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase">Nome</label>
                                    <input type="text" className="p-2 border border-gray-300 text-sm outline-none focus:border-blue-500" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase">Local</label>
                                    <input type="text" className="p-2 border border-gray-300 text-sm outline-none focus:border-blue-500" />
                                </div>
                                <div className="flex flex-col gap-1 col-span-2">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase">Descrição</label>
                                    <textarea className="p-2 border border-gray-300 text-sm outline-none focus:border-blue-500 h-20" />
                                </div>
                            </div>

                            <div className="mt-4 flex justify-between items-center border-t border-yellow-200 pt-4">
                                <button className="text-[10px] text-blue-600 font-bold hover:underline">👥 ADICIONAR CONVIDADOS</button>
                                <XPButton label="GRAVAR EVENTO" onClick={() => setIsOpen(false)} />
                            </div>
                        </div>
                    </div>

                    {/* LISTAGEM DINÂMICA */}
                    <div className="space-y-2">
                        <h4 className="text-[10px] font-bold text-gray-400 mb-2 uppercase italic">
                            Exibindo: {view === 'todos' ? 'Feed Global' : 'Participando / Criados por mim'}
                        </h4>

                        {eventosExibidos.map(evento => (
                            <div key={evento.id} className="group border border-gray-200 p-3 flex justify-between items-center hover:bg-blue-50 transition-all rounded-sm shadow-sm bg-white">
                                <div className="flex gap-3 items-center">
                                    <div className="bg-blue-100 w-10 h-10 rounded flex items-center justify-center text-lg">
                                        {evento.id % 2 === 0 ? '🎸' : '🍕'}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-gray-800">{evento.nome}</h4>
                                        <p className="text-[10px] text-gray-500 italic">Local: {evento.local} | Criado por: <span className="text-blue-600 font-bold">@{evento.autor}</span></p>
                                    </div>
                                </div>

                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {evento.autor === "Thiago" && (
                                        <button onClick={() => { setIsEditing(true); setIsOpen(true); }} className="text-[10px] bg-gray-100 border border-gray-300 px-2 py-1 hover:bg-white">EDITAR</button>
                                    )}
                                    <button className="text-[10px] bg-[#4169E1] text-white px-2 py-1 hover:bg-blue-700">VER DETALHES</button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}