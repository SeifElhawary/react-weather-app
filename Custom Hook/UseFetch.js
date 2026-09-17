import { useState, useEffect, useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";
function UseFetch(inputValue) {
  const [data, setData] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;
const {loading} = useContext(LoadingContext);
  useEffect(() => {
 
    if (inputValue.trim() !== "") {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`
          );
          const result = await response.json();
          setData(result);
        } catch (err) {
          console.log("حصل مشكله في ال API fetch يمعلم" , err);
        }
      };

      fetchData();
    }
  }, [loading]); 

  return data; 
}

export default UseFetch;