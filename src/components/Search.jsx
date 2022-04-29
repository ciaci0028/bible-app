import React from 'react'
import axios from 'axios'
import '../App.css'

const Search = () => {

    const [input, setInput] = React.useState('');

    const handleClick = (action) => {
        switch (action) {
            case 'SEARCH_KEYWORD': {
                axios({
                    method: 'GET',
                    url: '/search',
                    payload: input
                })
                .then((response) => {
                    console.log('get success', response.data)
                })
                .catch((error) => {
                    console.log('get failure', error)
                })
            }
            // default: {
            //     return input
            // }
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