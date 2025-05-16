import React, { useEffect, useState } from 'react';

interface Music {
    _id: string;
    title: string;
    artist: string;
    genre: string;
}

const MusicCatalog: React.FC = () => {
    const [musicList, setMusicList] = useState<Music[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/music')
            .then(res => res.json())
            .then(data => {
                setMusicList(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Chargement...</div>;

    return (
        <div>
            <h2>Catalogue de Musique</h2>
            <ul>
                {musicList.map(music => (
                    <li key={music._id}>
                        <strong>{music.title}</strong> — {music.artist} ({music.genre})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MusicCatalog;