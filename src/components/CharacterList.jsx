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
                <h1 className='text-center font-bold text-red-500 text-xl mb-3'>List Of Characters</h1>
                <input
                    type="text"
                    placeholder='Search by name'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-3 ml=15 mr-10  border rounded-md border-red-500 "/>

                {filteredCharacters.map((character) => (
                <div key={character.id}>
                    <Link to={`/character${character.id}`}></Link>
                </div>
                ))}

                <div className='grid grid-cols-1 sn:grid-cols-2 lg:grid-cols-3 gap-4 mx-20 mt-8 '>
                    {filteredCharacters.map((character) => (
                        <div className='border p-4' key={character.id}>
                            <img src={character.image} alt={character.name} />
                            <h2 className='text-xl font-bold'>{character.name}</h2>
                            <Link to={`/character${character.id}`} state={character}>
                            <button className='hover:text-black-500  border border-bold rounded-lg hover:bg-gray-700 hover:text-white mt-2'>View Character</button>
                        </Link>
                            {/* <Link to={`/character/${character.id}`} state={character}>
                                <button className="font-serif text-center bg-gray-700 mt-7 p-3 px-10 text-gray-100 hover:text-gray-300 border border-gray-400 rounded-lg">View </button>
                            </Link> */}
                                <button  onClick={()=> deleteCharacter(character.id)} className='font-serif text-center bg-red-500 mt-6 ml-4 p-3 px-10 text-gray-100 hover:text-gray-300 border border-gray-300 rounded-lg '>Delete </button>
                            
                        </div>
                    ))}
                </div>
            </div>
            );
            
}
export default CharacterList;