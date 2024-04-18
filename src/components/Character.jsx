import { useLocation, Link } from 'react-router-dom';

const Character = () => {
    const { state: character } = useLocation();
    console.log(character);

    return (
        <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
            <h1 className='text-3xl font-bold mb-1 text-center'>Character Details</h1>
            <img src={character.image} alt={character.title} className='ml-20 ' />
            <p className='text-gray-700 ml-20 mt-3'><strong>ID:</strong> {character.id}</p>
            <p className='text-gray-700 ml-20'><strong>Name:</strong> {character.name}</p>
            <p className='text-gray-700 ml-20'><strong>Status:</strong> {character.status}</p>
            <p className='text-gray-700 ml-20'><strong>Species:</strong> {character.species}</p>
            <p className='text-gray-700 ml-20'><strong>Gender:</strong> {character.gender}</p>
            <Link to={`/`}>
                <button className="font-serif text-center bg-gray-700 mt-7 ml-40 p-2 px-5 text-gray-100 hover:text-gray-300 border border-gray-400 rounded-lg">Back</button>
            </Link>
        </div>
    );
};
export default Character;


// import { useLocation, Link } from 'react-router-dom';
// const Character = () => {
//     const { state: character } = useLocation();
//     return (
//         <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
//             <h1 className='text-2x1 font-bold mb-5 text-center '>Character Details</h1>
//             {/* <div key={character.id}> */}
//             <img src={character.image} alt={character.name} className='ml-20'/>
//             <p className='text-gray-700 ml-20 mt-3'><strong>Name:</strong> {character.name}</p>
//            <p className='text-gray-700 ml-20'><strong>Status:</strong> {character.status}</p>
//              <p className='text-gray-700 ml-20'><strong>Species:</strong> {character.species}</p>
//            <p className='text-gray-700 ml-20'><strong>Gender:</strong> {character.gender}</p>
//            {/*  <p className='text-gray-700'><strong>Origin:</strong> {character.origin}</p> */}
//            <Link to={`/character`}>
//                          <button className='ml-40 mt-3 mb-3 rounded-lg bg-gray-500 p-2 text-white'>
//                             Back
//                          </button>
//             </Link>
//         </div>
//         // </div>
//     );
// };
// export default Character;







