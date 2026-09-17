import SearchIcon from '@mui/icons-material/Search';
import './Search.css'
import { LoadingContext } from '../../context/LoadingContext';
import { useContext } from 'react';
function Search(){
    const { loading, setLoading, inputValue, setInputValue } = useContext(LoadingContext);
    function handelSubmit(e){
        e.preventDefault();
        if(inputValue == ""){
            return alert("you must type City Name")
        }
        setLoading(!loading);
        setTimeout(()=>{
            setInputValue("")
        },1000)
    }
    return(
        <form onSubmit={handelSubmit}>
            <input value={inputValue} onChange={(e)=>{
                setInputValue(e.target.value)
            }} type="text" placeholder="Search" />
            <button className='searchBtn'><SearchIcon/></button>
        </form>
    )
}
export default Search;