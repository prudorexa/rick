import { useLocation } from 'react-router-dom';
const Character = () => {
    const { state: character } = useLocation();
    console.log(character);
    return (
        <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
            <h1 className='text-2xl font-bold mb-2'>Character Details</h1>
            <p className='text-gray-700'><strong>ID:</strong> {character.id}</p>
            <p className='text-gray-700'><strong>Name:</strong> {character.name}</p>
            <p className='text-gray-700'><strong>Status:</strong> {character.status}</p>
            <img src={character.image} alt={character.title} className='w-full' />
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







