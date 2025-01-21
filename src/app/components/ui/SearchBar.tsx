import { useTheme } from '@/app/hooks/useTheme';
import { Icon } from '@iconify/react';
import { ChangeEvent, useCallback, useState } from 'react';

type SearchBarProps = {
  placeholder: string
  onSubmit: (query: string) => void
}

export default function SearchBar({ placeholder, onSubmit }: SearchBarProps) {
  const { themeConfig } = useTheme();
  const [query, setQuery] = useState('');

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.currentTarget.value)
  }

  const handleSubmit = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  }, [onSubmit, query]); 

  return (
    <form
      className="w-full p-6 md:w-96 md:p-0"
      style={{ color: themeConfig.palette.secondaryText }}
      onSubmit={handleSubmit}
    >
      <input 
        className="p-4 w-full text-black"
        type="search"
        maxLength={30}
        placeholder={placeholder}
        style={JSON.parse(themeConfig!.customStyles.input)}
        onChange={handleOnChange}
        value={query}
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