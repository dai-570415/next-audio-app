import Link from 'next/link';
import Styles from './css/AudioList.module.css';

export const AudioList = (props: { id: number, slug: string, resource: string, name: string, image: string, artist: string }) => {
    return (
        <Link href={`/${props.slug}/${props.image}`}>
            <img src={`/storage/${props.slug}/${props.image}.jpg`} className={Styles.albamImage} alt={props.image} />

            <div className={Styles.text}>
                <h3>{props.name}</h3>
                <h4>{props.artist}</h4>
                <p>{props.resource}</p>
            </div>
        </Link>
    );
}