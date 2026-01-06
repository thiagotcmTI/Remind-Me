export default function Login() {
    return (
        <div className="min-h-screen bg-[#0051E1] flex items-center justify-center font-sans">
            {/* Box de Login Estilo Windows XP */}
            <div className="bg-white p-1 rounded-lg shadow-2xl w-full max-w-sm border-2 border-[#003399]">
                <div className="bg-gradient-to-r from-[#003399] to-[#0051E1] p-2 text-white font-bold flex justify-between rounded-t-sm">
                    <span>Remind-Me - Entrar</span>
                    <div className="flex space-x-1">
                        <button className="bg-[#e04343] px-2 border border-white text-xs text-white">X</button>
                    </div>
                </div>

                <div className="p-8 flex flex-col items-center">
                    {/* Avatar de Usuário Clássico */}
                    <div className="w-24 h-24 bg-[#E8EEFA] border-2 border-[#4169E1] rounded-md flex items-center justify-center mb-6 overflow-hidden">
                        <div className="w-12 h-12 bg-blue-300 rounded-full"></div>
                    </div>

                    <div className="w-full space-y-4">
                        <input
                            type="text"
                            placeholder="E-mail ou Usuário"
                            className="w-full p-2 border-2 border-gray-300 focus:border-[#4169E1] outline-none text-sm"
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            className="w-full p-2 border-2 border-gray-300 focus:border-[#4169E1] outline-none text-sm"
                        />
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember" className="text-xs text-gray-600 italic">Lembrar-me (igual no MSN)</label>
                        </div>
                        <button className="w-full bg-[#4169E1] hover:bg-[#3252b0] text-white font-bold py-2 rounded shadow-md border-b-4 border-[#002b80] active:border-b-0 transition-all">
                            Entrar
                        </button>
                    </div>

                    <p className="mt-6 text-[11px] text-blue-800 hover:underline cursor-pointer">
                        Ainda não tem uma conta? Cadastre-se agora!
                    </p>
                </div>
            </div>
        </div>
    );
}