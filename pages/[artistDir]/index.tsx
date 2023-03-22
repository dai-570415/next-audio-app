import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout } from '../../component/Layout/Layout';
import { useFetchAudio } from '../../hooks/useFetchAudio';
import { useFetchArtist } from '../../hooks/useFetchArtist';
import { AudioTypes } from '../../types/types';
import { AudioList } from '../../component/AudioList/AudioList';

const Index = () => {
    const { audios, isLoading, isError } = useFetchAudio();
    const { artists } = useFetchArtist();

    const router = useRouter();
    const { artistDir } = router.query;

    const artistList = artists.filter((artist: AudioTypes) => {
        return artist.slug === artistDir;
    });
    const audioList = audios.filter((audio: AudioTypes) => {
        return audio.slug === artistDir;
    });
    
    return (
        <Layout>
            <main className="audioPage">
                {artistList.map((artist: AudioTypes) => (
                    <div key={artist.id} className="navWrap">
                        <ul className="nav">
                            <li><Link href="/">TOP</Link></li>
                            <li><img src="/img/common/nav.svg" alt="" /></li>
                            <li>{artist.artist}</li>
                        </ul>
                    </div>
                ))}

                {artistList.map((artist: AudioTypes) => (
                    <div key={artist.id} className="artistIntro">
                        <img src={`/storage/${artist.slug}/${artist.image}.jpg`} className="jacketImage" alt="" />
                        <h3>{artist.artist}</h3>
                        <Link href="/" className="btn backBtn">TOPに戻る</Link>
                    </div>
                ))} 

                <h3 className="title">楽曲一覧</h3>
                
                {isError && <p style={{ color: 'red' }}>Server Error</p>}
                {isLoading ? <p>loading...</p> : (
                    <ul className="audioList">
                        {audioList.map((audio: AudioTypes) => (
                            <li key={audio.id} className="audioItems">
                                <AudioList
                                    id={audio.id}
                                    slug={audio.slug}
                                    resource={audio.resource}
                                    name={audio.name}
                                    image={audio.image}
                                    artist={audio.artist}
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