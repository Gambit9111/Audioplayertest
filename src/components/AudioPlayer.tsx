import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import tracks from "../tracks"
import AudioCard from "../components/AudioCard";
import { useState } from "react";

const AudioPlayer: React.FC = () => {
    const [artist, setArtist] = useState("")

    console.log(artist)

    if (artist === "") {
        return (
            <div className="w-[360px] h-full bg-white mx-auto">

                <div className="w-full h-[120px] grid grid-cols-3 gap-2 p-2">
                    <button className="border border-black" onClick={() => setArtist("Bienis")}>Bienis</button>
                    <button className="border border-black" onClick={() => setArtist("Mamis")}>Mamis</button>
                    <button className="border border-black" onClick={() => setArtist("Muile")}>Muile</button>
                    <button className="border border-black" onClick={() => setArtist("Prosto Pijus")}>Prosto Pijus</button>
                    <button className="border border-black" onClick={() => setArtist("Seneka")}>Seneka</button>
                    <button className="border border-black" onClick={() => setArtist("")}>View All</button>
                </div>

                <div className="w-full h-full flex flex-col">
                    {tracks.map((track) => (
                        <div key={track.id}>
                            <AudioCard
                                title={track.title}
                                artist={track.artist}
                                audioSrc={track.audioSrc}
                                image={track.image}
                            />
                        </div>
                    ))}
                </div>


            </div>
        );
    } else {
        return (
            <div className="w-[360px] h-full bg-white mx-auto">

                <div className="w-full h-[120px] grid grid-cols-3 gap-2 p-2">
                    <button className="border border-black" onClick={() => setArtist("Bienis")}>Bienis</button>
                    <button className="border border-black" onClick={() => setArtist("Mamis")}>Mamis</button>
                    <button className="border border-black" onClick={() => setArtist("Muile")}>Muile</button>
                    <button className="border border-black" onClick={() => setArtist("Prosto Pijus")}>Prosto Pijus</button>
                    <button className="border border-black" onClick={() => setArtist("Seneka")}>Seneka</button>
                    <button className="border border-black" onClick={() => setArtist("")}>View All</button>
                </div>

                <div className="w-full h-full flex flex-col">
                    {tracks
                        .filter((track) => track.artist === artist)
                        .map((track) => (
                            <div key={track.id}>
                                <AudioCard
                                    title={track.title}
                                    artist={track.artist}
                                    audioSrc={track.audioSrc}
                                    image={track.image}
                                />
                            </div>
                        ))}
                </div>
            </div>
        );
    }
};


export default AudioPlayer;
