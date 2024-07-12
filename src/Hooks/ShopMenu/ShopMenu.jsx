
import { useEffect, useState } from "react";


const ShopMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      fetch('shopss.json')
          .then(res => res.json())
          .then(data =>{
              setMenu(data);
              setLoading(false);
          })
  }, [])
  return [menu, loading];
}

export default ShopMenu;