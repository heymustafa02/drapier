// components/SearchComponent.tsx
import React, { useState } from 'react';

// Define the file type
interface File {
    id: number;
    name: string;
}

// Sample data representing files (replace with your actual file data)
const initialFiles: File[] = [
    { id: 1, name: 'Project Proposal.docx' },
    { id: 2, name: 'Budget Spreadsheet.xlsx' },
    { id: 3, name: 'Meeting Notes.txt' },
    { id: 4, name: 'Design Mockup.png' },
    { id: 5, name: 'Research Paper.pdf' },
];

interface SearchComponentProps {
    onFileSelect: (file: File) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onFileSelect }) => {
    const [query, setQuery] = useState<string>(''); // Search query
    const [files] = useState<File[]>(initialFiles); // Replace this with your actual file list

    // Handle search input change
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    // Filter files based on the search query
    const filteredFiles = files.filter(file =>
        file.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className='relative flex gap-2 items-center border rounded-md p-1'>
            <input
                type='text'
                placeholder='Search'
                value={query}
                onChange={handleSearchChange}
                className='border-none outline-none p-1'
            />
            {query && filteredFiles.length > 0 && (
                <ul className='absolute bg-white border rounded-md shadow-lg z-10 mt-1 w-full'>
                    {filteredFiles.map(file => (
                        <li
                            key={file.id}
                            className='p-2 hover:bg-gray-200 cursor-pointer'
                            onClick={() => onFileSelect(file)}
                        >
                            {file.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchComponent;
