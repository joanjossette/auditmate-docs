import { SearchBar } from '../SearchBar';

export default function SearchBarExample() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">Default Size</h3>
        <SearchBar onSearch={(q) => console.log('Search:', q)} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-4">Large Size (Homepage)</h3>
        <SearchBar 
          size="large" 
          onSearch={(q) => console.log('Search:', q)} 
        />
      </div>
    </div>
  );
}
