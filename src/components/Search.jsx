import React from 'react';
import '../App.css';

const Search = () => {

    const [input, setInput] = React.useState('');

    const handleClick = (action) => {
        switch (action) {
            case 'SEARCH_KEYWORD': {
                return setInput('It worked kinda')
            }
        }
    }
    
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
                onClick={() => handleClick('SEARCH_KEYWORD')}
            >
                Search
            </button>
        </div>

    )
}

export default Search