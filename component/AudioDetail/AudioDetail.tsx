import Link from 'next/link';
import Styles from './css/AudioDetail.module.css';

export const AudioDetail = (props: { id: number, slug: string, resource: string, name: string, image: string, artist: string, albam: [{ id: number, song: string, file: string }] }) => { 
    return (
        <>
            <div className="navWrap">
                <ul key={props.id} className="nav">
                    <li><Link href="/">TOP</Link></li>
                    <li><img src="/img/common/nav.svg" alt="" /></li>
                    <li><Link href={`/${props.slug}/`}>{props.artist}</Link></li>
                    <li><img src="/img/common/nav.svg" alt="" /></li>
                    <li>{props.name}</li>
                </ul>
            </div>

            <div className={Styles.intro}>
                <img src={`/storage/${props.slug}/${props.image}.jpg`} alt={props.image} />
                <div className={Styles.text}>
                    <h3>{props.name}</h3>
                    <Link href={`/${props.slug}/`}>{props.artist}</Link>
                    <p>{props.albam.length}曲</p>
                </div>
            </div>

            <ul className={Styles.singleList}>
                {props.albam.map((single, index) => (
                    <li key={single.id}>
                        <div className={Styles.singleName}>
                            <img src="/img/common/reproduction.svg" alt="" />
                            <div className={Styles.text}>
                                <h3><span>0{index + 1}.</span>{single.song}</h3>
                                <p>{props.resource}</p>
                            </div>
                        </div>
                        <audio className={Styles.audioUi} src={`/mp3/${props.slug}/${single.file}.mp3`} controls={true} controlsList="nodownload" />
                    </li>
                ))}
            </ul>
            <Link href={`/${props.slug}/`} className="btn backBtn">一覧に戻る</Link>
        </>
    );
}