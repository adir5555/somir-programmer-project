
import { useEffect, useState } from "react";




const Useskills = () => {
  const [skills, setskills] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      fetch('skills.json')
          .then(res => res.json())
          .then(data =>{
              setskills(data);
              setLoading(false);
          })
  }, [])
  return [skills, loading];
}

export default Useskills;