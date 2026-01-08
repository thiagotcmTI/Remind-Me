interface TestimonialProps {
  text: string;
  author: string;
}

export default function TestimonialCard({ text, author }: TestimonialProps) {
  return (
    <div className="flex flex-col space-y-1 mb-4">
      <span className="text-[12px] font-bold text-[#4169E1] ml-2">{author} diz:</span>
      <div className="bg-[#eff5ff] border border-[#A7C5FF] p-3 rounded-2xl rounded-tl-none shadow-sm relative">
        {/* Triângulo do balão */}
        <div className="absolute -top-[1px] -left-2 w-0 h-0 border-t-[10px] border-t-[#A7C5FF] border-l-[10px] border-l-transparent"></div>
        <div className="absolute top-0 -left-[6px] w-0 h-0 border-t-[8px] border-t-[#eff5ff] border-l-[8px] border-l-transparent"></div>

        <p className="text-xs text-gray-700 leading-snug">{text}</p>
      </div>
    </div>
  );
}