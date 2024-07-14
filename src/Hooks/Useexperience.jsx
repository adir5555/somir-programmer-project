
import { useEffect, useState } from "react";



const Useexperience = () => {
  const [experience, setexperience] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      fetch('experience.json')
          .then(res => res.json())
          .then(data =>{
              setexperience(data);
              setLoading(false);
          })
  }, [])
  return [experience, loading];
}

export default Useexperience;