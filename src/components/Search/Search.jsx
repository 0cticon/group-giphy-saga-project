import axios from 'axios';
import { useEffect, useState } from 'react';

function Search () {

    const [giphList, setGiphList] = useState([]);

    const [tag, setTag] = useState('');

    const getSearch = () => {
        axios. get(`/search/${tag}`)
            .then(response => {
                console.log(response.data.data.data.images.downsized_medium.url);
                setGiphList(response.data.data.data.images.downsized_medium.url);
            }).catch(error => {
                console.log(error);
                alert('Something wrong in search GET');
            });
    }

    const handleChange = (e) => {
        setTag(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getSearch()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={tag}/>
                <input type="submit"/>
            </form>
        </>
    )
}

export default Search;