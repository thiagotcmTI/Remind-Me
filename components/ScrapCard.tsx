interface ScrapProps {
    text: string;
    author: string;
    date: string;
    color?: string;
    textColor?: string; // Nova prop para cor do texto
}

export default function ScrapCard({ text, author, date, color = "#fff9c4", textColor = "#333" }: ScrapProps) {
    return (
        <div
            style={{ backgroundColor: color }}
            className="p-5 shadow-md border-b-2 border-r-2 border-gray-300 relative transform rotate-1 hover:rotate-0 transition-transform mb-6 mt-2"
        >
            {/* PINO VERMELHO (Canto Superior Esquerdo) */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-600 rounded-full shadow-md z-10 border-b-2 border-red-800">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full ml-0.5 mt-0.5"></div> {/* Brilho do pino */}
            </div>

            <p style={{ color: textColor }} className="text-sm font-medium mb-3 leading-relaxed">
                {text}
            </p>

            <div className="flex justify-between items-center border-t border-black/5 pt-2">
                <span className="text-[10px] font-bold text-[#4169E1] uppercase">De: {author}</span>
                <span className="text-[9px] text-gray-500 italic">{date}</span>
            </div>
        </div>
    );
}