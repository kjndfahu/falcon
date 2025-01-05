'use client'
import React, { createContext, useContext, useState } from 'react';

interface CommandsContextType {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const CommandsContext = createContext<CommandsContextType>({
    searchTerm: '',
    setSearchTerm: () => {},
});

export const CommandsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <CommandsContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </CommandsContext.Provider>
    );
};

export const useCommandsContext = () => useContext(CommandsContext); 