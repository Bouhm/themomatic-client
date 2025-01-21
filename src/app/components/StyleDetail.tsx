type StyleDetailProps = {
    label: string
    color: string
}

export default function StyleDetail({ label, color }: StyleDetailProps) {
    return (
      <div className="">
        <h4 className="font-bold sm:text-base">
          {label}
        </h4>
        <div className="flex items-center gap-1">
          <div
            className="inline-block border-solid border-2 rounded w-6 h-6"
            style={{ backgroundColor: color }}
          />
          <span className="inline-block text-black sm:text-lg">{color}</span>
        </div>
      </div>
    );
  }
  