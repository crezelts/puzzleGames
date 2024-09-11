import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link"


export default function Home() {
  return (
    <>
      <header>
        <link rel="icon" href="/mainLogo2.png" />
        <title>PuzzleGame</title>
      </header>
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <FontAwesomeIcon icon={faPuzzlePiece} className="h-6 w-6" />
            <span className="ml-2 text-lg font-bold">Puzzle Game</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6 justify-center">
            <Link className="text-medium font-medium hover:underline underline-offset-4" href="/">
              Home
            </Link>
            <Link className="flex text-medium font-medium hover:underline underline-offset-4" href="/download">
              download
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <div>
            <ul className='flex justify-center relative top-40 z-10 text-white'>
              <div className='space-y-5'>
                <li className='font-bold text-4xl'><span>Welcome to PuzzleGame</span></li>
                <li><span className='text-lg'>Challenge your mind with captivating puzzles that will keep you hooked for hours!</span></li>
                <Link href='/download' className='flex relative top-12 font-bold text-xl'>
                  Try PuzzleGame
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='h-5 w-5 mt-1 ml-2' />
                </Link>
              </div>
            </ul>
            <img src='/game.jpg' className='w-full h-[600px] object-cover -mt-32' />
          </div>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 relative -top-5">Puzzle Game Tutorial</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { description: "1. Click the puzzlGame Folder", imagePath: '/GameTutorial1.png' },
                  { description: "2. Click the runFile(puzzleGame) Folder", imagePath: '/GameTutorial2.png' },
                  { description: "3. Click the game Folder", imagePath: '/GameTutorial3.png' },
                  { description: "4. open the gmae file", imagePath: '/GameTutorial4.png' },
                  { description: "5. Click the Start button", imagePath: '/puzzleGamePhoto1.png' },
                  { description: "6. Play the Game!!", imagePath: '/puzzleGamePhoto2.png' },
                ].map((game, index) => (
                  <div key={index}>
                    <div>
                      <div className='relative -top-3'>{game.description}</div>
                    </div>
                    <div>
                      <div className="aspect-[16/9] relative bg-gray-200 rounded-md overflow-hidden">
                        <img
                          src={game.imagePath}
                          alt="이미지 파일"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500">© 2024 PuzzleGame. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="flex text-xs hover:underline underline-offset-4" href="#">
              <FontAwesomeIcon icon={faGithub} className='h-4 w-6 text-black' />
              Github
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Original code
            </Link>
          </nav>
        </footer>
      </div>
    </>
  )
}