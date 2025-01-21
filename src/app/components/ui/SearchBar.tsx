import { Icon } from '@iconify/react';
import { ChangeEvent, useState } from 'react';

type SearchBarProps = {
  placeholder: string
  style: string
  onSubmit: (query: string) => void
}

export default function SearchBar({ placeholder, style, onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState('')

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.currentTarget.value)
  }

  function handleSubmit() {
    onSubmit(query);
  }

  return (
    <form
      className="w-96"
      onSubmit={handleSubmit}
    >
      <input 
        className="p-3 w-full text-black"
        type="search"
        maxLength={24}
        placeholder={placeholder} 
        style={JSON.parse(style)}
        onChange={handleOnChange}
      />
      <button 
        className="m-[-50px] align-middle w-12 h-12" 
        type="submit"
      >
        <Icon 
          className="text-center m-auto" 
          icon="tabler:send" 
          height="20" 
          width="20" 
        />
      </button>
    </form>
  )
}