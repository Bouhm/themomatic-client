type StyleDetailProps = {
    label: string
    color: string
}

export default function StyleDetail({ label, color }: StyleDetailProps) {
    return (
      <div className="">
        <h4 className="text-black">{label}</h4>
        <div className={`rounded bg-[${color}] w-6 h-6`}></div>
        <span>{color}</span>
      </div>
    );
  }
  