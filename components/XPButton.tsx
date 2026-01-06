interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export default function XPButton({ label, ...props }: Props) {
    return (
        <button {...props} className="btn-xp group relative overflow-hidden">
            <div className="absolute inset-0 glossy-effect opacity-50"></div>
            <span className="relative z-10">{label}</span>
        </button>
    );
}