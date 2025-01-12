import { Icon } from '@iconify/react';
import "./SearchBar.css";

type SearchBarProps = {
  placeholder: string
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <div>
      <input className="rounded-full p-4" type="search" maxLength={24} placeholder={placeholder} />
      <button className="rounded-full m-[-50px] align-middle w-12 h-12" type="submit">
        <Icon 
          className="text-center m-auto" 
          icon="tabler:send" 
          color="black" 
          height="20" 
          width="20" 
        />
      </button>
    </div>
  )
}