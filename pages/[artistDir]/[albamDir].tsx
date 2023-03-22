import { FC } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../component/Layout/Layout';
import { useFetchAudio } from '../../hooks/useFetchAudio';
import { useFetchArtist } from '../../hooks/useFetchArtist';
import { AudioTypes } from '../../types/types';
import { AudioDetail } from '../../component/AudioDetail/AudioDetail';
import { AudioList } from '../../component/AudioList/AudioList';

const Detail: FC = () => {
    const router = useRouter();
    const { artistDir } = router.query;
    const { albamDir } = router.query;

    const { audios, isLoading, isError } = useFetchAudio(); 
    const { artists } = useFetchArtist();

    const artistList = artists.filter((artist: AudioTypes) => {
        return artist.slug === artistDir;
    });
    const audioDetail = audios.filter((audio: AudioTypes) => {
        return audio.slug === artistDir && albamDir === audio.image;
    });
    const audioList = audios.filter((audio: AudioTypes) => {
        return audio.slug === artistDir && albamDir !== audio.image;
    });

    return (
        <Layout>
            <main className="audioPage">
                {isError && <p style={{ color: 'red' }}>Server Error</p>}
                {isLoading ? <p>loading...</p> : (
                    <>
                        {audioDetail.map((audio: AudioTypes) => (
                            <div key={audio.id} className="audioDetail">
                                <AudioDetail
                                    id={audio.id}
                                    slug={audio.slug}
                                    albam={audio.albam}
                                    resource={audio.resource}
                                    name={audio.name}
                                    image={audio.image}
                                    artist={audio.artist}
                                />
                            </div>
                        ))}

                        <h3 className="title">アーティスト情報</h3>

                        {artistList.map((artist: AudioTypes) => (
                            <div key={artist.id} className="artistDetail">
                                <div className="innerArtistDetail">
                                    <img src={`/storage/${artist.slug}/${artist.image}.jpg`} alt={artist.image} />
                                    <h3>{artist.artist}</h3>
                                </div>
                            </div>
                        ))}

                        <h3 className="title">関連楽曲</h3>

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
                    </>
                )}
            </main>
        </Layout>
    );
}

export default Detail;