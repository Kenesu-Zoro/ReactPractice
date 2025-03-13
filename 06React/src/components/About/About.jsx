import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://imgs.search.brave.com/wzmwVsSBWlMqqRNIUWphYgm3eHsKmy1LkPsvlqe3WU8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS80MS80/OC9kVnVCNW4uanBn"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Why One piece is the best anime to grace Earth😌
                        </h2>
                        <p className="mt-6 text-gray-600">
                        One Piece is the greatest anime ever due to its masterful storytelling,
                         deep world-building, and emotional depth. Monkey D. Luffy’s journey across the Grand Line is filled with thrilling adventures, mysteries, and foreshadowed twists. 
                         The series perfectly balances action, comedy, and drama, keeping fans engaged for decades.
                        </p>
                        <p className="mt-4 text-gray-600">
                        What truly sets One Piece apart is its rich cast and emotional depth.
                         Themes of friendship, perseverance, and freedom make it a timeless masterpiece.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}