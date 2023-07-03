import Title from "components/Title";
import Banner from "components/Banner";
import Card from "components/Card";
import styles from "./Home.module.css"
import { useEffect, useState } from "react";
import { useFavoritesContext } from "contexts/Favorites";

function Home() {
    const [videos, setVideos] = useState([]);
    const {favorites} = useFavoritesContext();


    useEffect(() => {
        fetch('https://my-json-server.typicode.com/monicahillman/cinetag-api/videos').then(response => response.json()).then(data => {
            setVideos(data);
        })
    }, []);

    return (
        <>
            <Banner image="home" />
            <Title>
                <h1>A place to store your videos and movies!</h1>
            </Title>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} isFavorite={favorites.some(favorite => favorite.id === video.id)} />
                })}
            </section>
        </>
    )
}

export default Home;