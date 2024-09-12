import React from 'react';
import '../Styles/RoadMap.css'; // Custom styling for the roadmap

const roadmapStages = [
    {
        id: 1,
        title: "Stage 1: Foundations of Survival",
        patches: [
            { name: "Patch 1.0: First Blood", description: "Initial release, core zombie AI (Wretches), and basic player movement/combat.", releaseDate: "Q1 2024" },
            { name: "Patch 1.1: Adapt or Die", description: "Improved zombie AI, pathfinding, and player inventory system.", releaseDate: "Q2 2024" },
            { name: "Patch 1.2: Breaking Point", description: "Zombie variants (fast and tough Wretches) and ranged weapons for players.", releaseDate: "Q3 2024" },
            { name: "Patch 1.3: Defensive Measures", description: "Player traps, simple crafting, and early progression mechanics.", releaseDate: "Q4 2024" }
        ]
    },
    {
        id: 2,
        title: "Stage 2: The Hunter’s Call",
        patches: [
            { name: "Patch 2.0: Rise of the Hunters", description: "Hunters evolve from Wretches, introducing kill-based progression.", releaseDate: "Q1 2025" },
            { name: "Patch 2.1: Silent Stalkers", description: "Enhanced tracking for Hunters, player stats, and leaderboards.", releaseDate: "Q2 2025" },
            { name: "Patch 2.2: The Hunt Begins", description: "Advanced ranged combat for players, with improved tactical AI for Hunters.", releaseDate: "Q3 2025" },
            { name: "Patch 2.3: Echoes of Survival", description: "Event system implementation, with real-time notifications for key zombie/player actions.", releaseDate: "Q4 2025" }
        ]
    },
    // Add Stage 3, 4, and 5 here
];

const Roadmap = () => {
    return (
        <div className="py-12 bg-gray-900 text-white">
            <h2 className="text-4xl font-bold text-center mb-10">D.A.W.N Roadmap</h2>
            <div className="flex flex-col space-y-12 max-w-7xl mx-auto">
                {roadmapStages.map((stage, index) => (
                    <div key={stage.id} className="text-center relative">
                        {/* Circle for the stage icon */}
                        <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-lg font-bold">{stage.id}</span>
                        </div>

                        <h3 className="text-2xl font-semibold mb-4">{stage.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {stage.patches.map(patch => (
                                <div key={patch.name} className="relative group">
                                    {/* Patch Card */}
                                    <div className="border border-gray-700 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-800 hover:shadow-lg">
                                        <h4 className="font-bold text-xl mb-2">{patch.name}</h4>
                                        <p className="text-gray-400">{patch.description}</p>
                                    </div>

                                    {/* Tooltip for Release Date */}
                                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-max bg-gray-800 text-white text-xs font-semibold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Release Date: {patch.releaseDate}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;