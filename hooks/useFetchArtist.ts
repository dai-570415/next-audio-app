import { useState, useEffect } from 'react';
import axios from 'axios';
import { AudioTypes } from '../types/types';

export const useFetchArtist = () => {
    const [artists, setArtists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        fetchArtist();
    }, []);
    
    const fetchArtist = () => {
        setIsLoading(true);
        axios
            .get('http://localhost:3001/artist')
            .then(result => {
                const audio = result.data.map((audio: AudioTypes) => ({
                    id: audio.id,
                    slug: audio.slug,
                    resource: audio.resource,
                    image: audio.image,
                    artist: audio.artist
                }));
                setArtists(audio);
            })
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }
    return { artists, isLoading, isError };
}