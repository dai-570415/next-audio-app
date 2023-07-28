import { useState, useEffect } from 'react';
import axios from 'axios';
import { AudioTypes } from '../types/types';

export const useFetchAudio = () => {
    const [audios, setAudios] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        fetchAudio();
    }, []);
    
    const fetchAudio = () => {
        setIsLoading(true);
        axios
            // .get('http://localhost:3001/audio')
            .get('https://script.google.com/macros/s/AKfycby5EReWvKeU1V6YJ3LrWbBHnGGlytnHkj-5CvGvgcE1jlwzcyCG01aSYTuoNLCUzayO/exec')
            .then(result => {
                const audio = result.data.map((audio: AudioTypes) => ({
                    id: audio.id,
                    slug: audio.slug,
                    resource: audio.resource,
                    name: audio.name,
                    image: audio.image,
                    artist: audio.artist,
                    albam: audio.albam
                }));
                setAudios(audio);
            })
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }
    return { audios, isLoading, isError };
}