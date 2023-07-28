import { Layout } from '../component/Layout/Layout';
import { useFetchArtist } from '../hooks/useFetchArtist';
import { AudioTypes } from '../types/types';
import { ArtistList } from '../component/ArtistList/ArtistList';

const Index = () => {
    const { artists, isLoading, isError } = useFetchArtist();

    return (
        <Layout>
            <main className="audioPage">
                <div className="navWrap">
                    <ul className="nav">
                        <li>TOP</li>
                    </ul>
                </div>

                <h3 className="title">楽曲一覧</h3>

                {isError && <p style={{ color: 'red' }}>Server Error</p>}
                {isLoading ? <p>loading...</p> : (
                    <ul className="audioList">
                        {artists.map((artist: AudioTypes) => (
                            <li key={artist.id} className="audioItems">
                                <ArtistList
                                    id={artist.id}
                                    slug={artist.slug}
                                    resource={artist.resource}
                                    image={artist.image}
                                    artist={artist.artist}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </main>
        </Layout>
    );
}

export default Index;