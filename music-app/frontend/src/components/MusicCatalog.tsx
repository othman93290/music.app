import React, { useEffect, useState } from 'react';

const MusicCatalog: React.FC = () => {
    const [musicList, setMusicList] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchMusic = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/music');
                const data = await response.json();
                setMusicList(data);
            } catch (error) {
                console.error('Error fetching music:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMusic();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Music Catalog</h1>
            <ul>
                {musicList.map((music) => (
                    <li key={music._id}>
                        <h2>{music.title}</h2>
                        <p>Artist: {music.artist}</p>
                        <p>Genre: {music.genre}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MusicCatalog;