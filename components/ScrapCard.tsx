interface ScrapProps {
    text: string;
    author: string;
    date: string;
    color?: string;
}

export default function ScrapCard({ text, author, date, color = "#fff9c4" }: ScrapProps) {
    return (
        <div
            style={{ backgroundColor: color }}
            className="p-4 shadow-md border-b-2 border-r-2 border-gray-300 relative transform rotate-1 hover:rotate-0 transition-transform mb-4"
        >
            {/* "Durex" ou Tachinha no topo */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-white/50 border border-white/20"></div>

            <p className="text-gray-800 text-sm font-medium mb-3 leading-relaxed">
                {text}
            </p>

            <div className="flex justify-between items-center border-t border-black/5 pt-2">
                <span className="text-[10px] font-bold text-[#4169E1] uppercase">De: {author}</span>
                <span className="text-[9px] text-gray-500 italic">{date}</span>
            </div>
        </div>
    );
}