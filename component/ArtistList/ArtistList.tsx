import Link from 'next/link';
import Styles from './css/ArtistList.module.css';

export const ArtistList = (props: { id: number, slug: string, resource: string, image: string, artist: string }) => {
    return (
        <Link href={`/${props.slug}/`}>
            <img src={`/storage/${props.slug}/${props.image}.jpg`} className={Styles.albamImage} alt={props.image} />

            <div className={Styles.text}>
                <h3>{props.artist}</h3>
                <p>{props.resource}</p>
            </div>
        </Link>
    );
}