import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const SearchBar = () => {
    return (
        <div className="flex py-2 items-center bg-transparent border-2 rounded">
        <input className="w-full px-3 text-white bg-transparent focus:outline-none placeholder-white"type="text" placeholder="Search your destination"/>
          <button className="pr-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-white font-bold" />
          </button>
      </div>
    );
};

export default SearchBar;