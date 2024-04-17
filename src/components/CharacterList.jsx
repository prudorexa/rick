import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character`)
            .then((response) => response.json())
            .then((data) => setCharacters(data.results));
    }, [searchTerm]);

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const deleteCharacter = id => {
            fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: `DELETE`
    }) .then(() => {
        setCharacters(characters.filter(character => character.id !==id));
    });
       
};

    return (
            <div>
                <h1 className='text-center font-bold text-red-500 text-xl'>List Of Characters</h1>
                <input
                    type="text"
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"/>



                {filteredCharacters.map((character) => (
                <div key={character.id}>
                    <Link to={`/characters/${character.id}`}></Link>
                </div>
                ))}

                <div className='grid grid-cols-3 gap-4 mx-20 mt-8'>
                    {filteredCharacters.map((character) => (
                        <div className='border p-4' key={character.id}>
                            <img src={character.image} alt={character.name} />
                            <h2 className='text-xl font-bold'>{character.name}</h2>
                            <Link to={`/character/${character.id}`} state={character}>
                                <button className="font-serif text-center bg-blue-700 mt-4 text-gray-100 hover:text-gray-300 border border-gray-300 rounded-lg">View Character</button>
                            </Link>
                                <button  onClick={()=> deleteCharacter(character.id)} className='font-serif text-center bg-red-500 mt-6 ml-4 text-gray-100 hover:text-gray-300 border border-gray-300 rounded-lg'>Delete Character</button>
                            
                        </div>
                    ))}
                </div>
            </div>
            );
            
}
export default CharacterList;