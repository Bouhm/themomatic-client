type StyleDetailProps = {
    label: string
    color: string
}

export default function StyleDetail({ label, color }: StyleDetailProps) {
    return (
      <div className="">
        <h4 className="font-bold text-black sm:text-xs">{label}</h4>
        <div className="flex items-center gap-1">
          <div className={`inline-block border-solid border-2 rounded bg-[${color}] w-4 h-4`}></div>
          <span className="inline-block">{color}</span>
        </div>
      </div>
    );
  }
  