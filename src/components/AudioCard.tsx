import { useState, useEffect } from 'react';
import { Howl } from 'howler';
import Image from 'next/image';
import { StaticImageData } from "next/image";

interface AudioCardProps {
    title: string;
    artist: string;
    audioSrc: string;
    image: StaticImageData;
}

const AudioCard: React.FC<AudioCardProps> = ({ title, artist, audioSrc, image }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [songProgress, setSongProgress] = useState(0);
    const [songDuration, setSongDuration] = useState(0);
    const [song, setSong] = useState<Howl | null>(null);
    let progressInterval: any = null;

    useEffect(() => {
        // initialize the Howl object with the song file
        const newSong = new Howl({ src: audioSrc });

        // Update the progress bar and duration as the song plays
        newSong.on('play', () => {
            setIsPlaying(true);

            // Update the progress bar every 100ms
            const progressInterval = setInterval(() => {
                const newProgress = newSong.seek() / newSong.duration();
                setSongProgress(newProgress);
            }, 100);

            // When the song ends, stop updating the progress bar and reset the duration
            newSong.on('end', () => {
                clearInterval(progressInterval);
                setIsPlaying(false);
                setSongDuration(0);
            });
        });

        setSong(newSong);

        // Clear the progress interval when the component unmounts
        return () => {
            clearInterval(progressInterval);
        };
    }, []);

    const play = () => {
        song.play();
        setIsPlaying(true);
    };

    const pause = () => {
        song.pause();
        setIsPlaying(false);
    };

    return (
        <div className="flex items-center w-full px-2 gap-3">

            <Image src={image} alt={title} priority className='object-cover w-[125px] h-[125px]' />

            <div className='w-[200px]'>
                <h3 className="text-black text-lg mt-2">{title}</h3>
                <h4 className="text-gray-400 text-sm">{artist}</h4>
                {/* Play/pause button */}
                <button
                    className="p-1 mt-4 rounded-full focus:outline-none focus:shadow-outline"
                    style={{
                        background: isPlaying ? '#00BFFF' : '#fff',
                        color: isPlaying ? '#fff' : '#00BFFF',
                        border: `1px solid ${isPlaying ? '#00BFFF' : '#00BFFF'}`,
                    }}
                    onClick={isPlaying ? pause : play}
                >
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                {/* Duration bar */}
                <div className="relative mt-4 h-4 w-[125px] bg-gray-900 rounded-full overflow-hidden">
                    {/* Progress bar */}
                    <div
                        className="absolute inset-0 h-full bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
                        style={{
                            transform: `translateX(-50%) scaleX(${songProgress})`
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default AudioCard;