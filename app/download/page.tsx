import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';

export default function downloadWeb() {
    return (
        <>
            <header>
                <link rel="icon" href="/mainLogo2.png" />
                <title>PuzzleGame - download</title>
            </header>
            <div className="text-center font-bold text-3xl mt-56">
                <h1>Puzzle Game Download ver.1.0</h1>
            </div>
            <div className='flex justify-center font-semibold text-2xl mt-24 text-white'>
                <a href='/puzzleGames.zip' download className='flex bg-blue-600 px-4 py-4 rounded-lg'>
                    <FontAwesomeIcon icon={faCircleDown} className='h-7 w-7 mt-1.5 mr-3' />
                    puzzle game
                </a>
            </div>
        </>
    )
}