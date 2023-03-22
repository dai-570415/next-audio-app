import { ReactNode } from 'react';

export type AudioTypes = {
    id: number,
    slug: string,
    resource: string,
    name: string,
    image: string,
    artist: string,
    albam: [{
        id: number,
        song: string,
        file: string,
    }],
}

export type Children = {
    children: ReactNode,
}