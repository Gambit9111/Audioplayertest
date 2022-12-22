import { StaticImageData } from "next/image";
import image1 from "../public/music_images/Bienis_3_Telefonai.svg"
import image2 from "../public/music_images/Bienis_Jauciu_Kaifa.svg"
import image3 from "../public/music_images/Bienis_Overtimas.svg"
import image4 from "../public/music_images/Bienis_Pabaiga.svg"
import image5 from "../public/music_images/Bienis_Pasikeist.svg"
import image6 from "../public/music_images/Bienis_Rolls_Royce.svg"
import image7 from "../public/music_images/Bienis_Wow_Keista.svg"
import image8 from "../public/music_images/Bienis_x_Mamis_Tarp_Savu_Minciu.svg"
import image9 from "../public/music_images/Mamis_As_Galiu.svg"
import image10 from "../public/music_images/Mamis_Puse_8.svg"
import image11 from "../public/music_images/Mamis_Seneka_Prosto_Pijus_Aukstai.svg"
import image12 from "../public/music_images/Mamis_Sumaisytos_Emocijos.svg"
import image13 from "../public/music_images/Mamis_Tokyo.svg"
import image14 from "../public/music_images/Mamis_Turbo.svg"
import image15 from "../public/music_images/Mamis_x_Bienis_Flexinu.svg"
import image16 from "../public/music_images/Mamis_x_Muile_Angelas.svg"
import image17 from "../public/music_images/Mamis_x_Prosto_Pijus_x_Bienis_D3MONS.svg"
import image18 from "../public/music_images/Muile_Nesustabdys.svg"
import image19 from "../public/music_images/Muile_Seneka_Garantas.svg"
import image20 from "../public/music_images/Prosto_Pijus_As_Noriu_Daugiau.svg"
import image21 from "../public/music_images/Prosto_Pijus_As_Nusirukes.svg"
import image22 from "../public/music_images/Prosto_Pijus_Marcelle.svg"
import image23 from "../public/music_images/Prosto_Pijus_Perlai.svg"
import image24 from "../public/music_images/Prosto_Pijus_x_Bienis_x_Mamis_Nebenoriu_Grizt.svg"
import image25 from "../public/music_images/Prosto_Pijus_x_Mamis_Paprasta.svg"
import image26 from "../public/music_images/Prosto_Pijus_Zaidejams.svg"
import image27 from "../public/music_images/Seneka_Motyvas.svg"
import image28 from "../public/music_images/Seneka_x_Mamis_Debesuota.svg"

interface Track {
    id: number;
    title: string;
    artist: string;
    audioSrc: string;
    image: StaticImageData;
}

const tracks: Track[] = [
    {
        id: 1,
        title: "3 Telefonai",
        artist: "Bienis",
        audioSrc: "/music/Bienis_3_Telefonai.mp3",
        image: image1,
    },
    {
        id: 2,
        title: "Jaučiu Kaifa",
        artist: "Bienis",
        audioSrc: "/music/Bienis_Jauciu_Kaifa.mp3",
        image: image2,
    },
    {
        id: 3,
        title: "Overtimas",
        artist: "Bienis",
        audioSrc: "/music/Bienis_Overtimas.mp3",
        image: image3,
    },
    {
        id: 4,
        title: "Pabaiga",
        artist: "Bienis",
        audioSrc: "/music/Bienis_Pabaiga.mp3",
        image: image4,
    },
    {
        id: 5,
        title: "Pasikeist",
        artist: "Bienis",
        audioSrc: "/music/Bienis_Pasikeist.mp3",
        image: image5,
    },
    {
        id: 6,
        title: "Rolls Royce",
        artist: "Bienis",
        audioSrc: "/music/Bienis_Rolls_Royce.mp3",
        image: image6,
    },
    {
        id: 7,
        title: "WoW/Keista",
        artist: "Bienis",
        audioSrc: "/music/Bienis_Wow_Keista.mp3",
        image: image7,
    },
    {
        id: 8,
        title: "Tarp Savu Minciu ft. Mamis",
        artist: "Bienis",
        audioSrc: "/music/Bienis_x_Mamis_Tarp_Savu_Minciu.mp3",
        image: image8,
    },
    {
        id: 9,
        title: "As Galiu",
        artist: "Mamis",
        audioSrc: "/music/Mamis_As_Galiu.mp3",
        image: image9,
    },
    {
        id: 10,
        title: "Puse 8",
        artist: "Mamis",
        audioSrc: "/music/Mamis_Puse_8.mp3",
        image: image10,
    },
    {
        id: 11,
        title: "Aukstai ft. Seneka & Prosto Pijus",
        artist: "Mamis",
        audioSrc: "/music/Mamis_Seneka_Prosto_Pijus_Aukstai.mp3",
        image: image11,
    },
    {
        id: 12,
        title: "Sumaisytos Emocijos",
        artist: "Mamis",
        audioSrc: "/music/Mamis_Sumaisytos_Emocijos.mp3",
        image: image12,
    },
    {
        id: 13,
        title: "Tokyo",
        artist: "Mamis",
        audioSrc: "/music/Mamis_Tokyo.mp3",
        image: image13,
    },
    {
        id: 14,
        title: "Turbo",
        artist: "Mamis",
        audioSrc: "/music/Mamis_Turbo.mp3",
        image: image14,
    },
    {
        id: 15,
        title: "Flexinu ft. Bienis",
        artist: "Mamis",
        audioSrc: "/music/Mamis_x_Bienis_Flexinu.mp3",
        image: image15,
    },
    {
        id: 16,
        title: "Angelas ft. Muile",
        artist: "Mamis",
        audioSrc: "/music/Mamis_x_Muile_Angelas.mp3",
        image: image16,
    },
    {
        id: 17,
        title: "D3MONS ft. Prosto Pijus & Bienis",
        artist: "Mamis",
        audioSrc: "/music/Mamis_x_Prosto_Pijus_x_Bienis_D3MONS.mp3",
        image: image17,
    },
    {
        id: 18,
        title: "Nesustabdys",
        artist: "Muile",
        audioSrc: "/music/Muile_Nesustabdys.mp3",
        image: image18,
    },
    {
        id: 19,
        title: "Garantas ft. Seneka",
        artist: "Muile",
        audioSrc: "/music/Muile_Seneka_Garantas.mp3",
        image: image19,
    },
    {
        id: 20,
        title: "As Noriu Daugiau",
        artist: "Prosto Pijus",
        audioSrc: "/music/Prosto_Pijus_As_Noriu_Daugiau.mp3",
        image: image20,
    },
    {
        id: 21,
        title: "As Nusirukes",
        artist: "Prosto Pijus",
        audioSrc: "/music/Prosto_Pijus_As_Nusirukes.mp3",
        image: image21,
    },
    {
        id: 22,
        title: "Marcelle",
        artist: "Prosto Pijus",
        audioSrc: "/music/Prosto_Pijus_Marcelle.mp3",
        image: image22,
    },
    {
        id: 23,
        title: "Perlai",
        artist: "Prosto Pijus",
        audioSrc: "/music/Prosto_Pijus_Perlai.mp3",
        image: image23,
    },
    {
        id: 24,
        title: "Nebenoriu Grizt ft. Bienis & Mamis",
        artist: "Prosto Pijus",
        audioSrc: "/music/Prosto_Pijus_x_Bienis_x_Mamis_Nebenoriu_Grizt.mp3",
        image: image24,
    },
    {
        id: 25,
        title: "Paprasta ft. Mamis",
        artist: "Prosto Pijus",
        audioSrc: "/music/Prosto_Pijus_x_Mamis_Paprasta.mp3",
        image: image25,
    },
    {
        id: 26,
        title: "Zaidejams",
        artist: "Prosto Pijus",
        audioSrc: "/music/Prosto_Pijus_Zaidejams.mp3",
        image: image26,
    },
    {
        id: 27,
        title: "Motyvas",
        artist: "Seneka",
        audioSrc: "/music/Seneka_Motyvas.mp3",
        image: image27,
    },
    {
        id: 28,
        title: "Debesuota ft. Mamis",
        artist: "Seneka",
        audioSrc: "/music/Seneka_x_Mamis_Debesuota.mp3",
        image: image28,
    }
]

export default tracks;