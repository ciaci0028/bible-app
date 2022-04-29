import React from 'react';

const Random = () => {

    React.useEffect( () => {
        
    }, [])

    const [randomVerse, setRandomVerse] = React.useState('Random Verse Loading...')

    return (
        <div>
            <h3>{randomVerse}</h3>
        </div>
    )
}

export default Random