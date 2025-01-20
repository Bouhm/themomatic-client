import { Icon } from '@iconify/react';

type SearchBarProps = {
  placeholder: string
  style: string
  onSubmit: () => {}
}

export default function SearchBar({ placeholder, style, onSubmit }: SearchBarProps) {
  function handleClickSubmit() {
    onSubmit();
  }

  return (
    <div className="w-96">
      <input 
        className="p-3 w-full text-black"
        type="search"
        maxLength={24}
        placeholder={placeholder} 
        style={style ? JSON.parse(style) : {}}
      />
      <button 
        className="m-[-50px] align-middle w-12 h-12" 
        type="submit"
        onClick={handleClickSubmit}
      >
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