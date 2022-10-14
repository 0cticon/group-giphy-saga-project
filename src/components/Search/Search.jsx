import axios from 'axios';
import { useEffect, useState } from 'react';

function Search () {

    const [giphList, setGiphList] = useState([]);

    const [tag, setTag] = useState('');

    const getSearch = () => {
        axios. get(`api/search/${tag}`)
            .then(response => {
                console.log(response.data);
                setGiphList(response.data.data);
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
            {/* {JSON.stringify(giphList)} */}
            <ul>
            {
                giphList.map(giph => {
                    return (
                        <li>
                            <img src={giph.images.fixed_height.url} />
                            
                        </li>
                    )
                })
            }
            </ul>
        </>
    )
}

export default Search;