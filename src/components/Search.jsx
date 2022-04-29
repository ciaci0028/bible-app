import React from 'react';
import '../App.css';

const Search = () => {

    const [input, setInput] = React.useState('');
    
    return (
        <div className='container'>
            <input 
                className='input'
                placeholder="Search verse or keyword here" 
                value={input}
                onChange={event => setInput(event.target.value)}
                >
                </input>
            <button
                className='button'
            >
                Search
            </button>
        </div>

    )
}

export default Search