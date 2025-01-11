import ".SearchBar.css";

type SearchBarProps = {
  placeholder: string
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <div>
        <input type="search" placeholder={placeholder} />
        <button type="submit">Search</button>
    </div>
  )
}