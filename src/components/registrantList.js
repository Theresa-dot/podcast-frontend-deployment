import Axios from "axios";
import { useEffect, useState } from "react";
import Account from "./account";

function RegistrantList({ loggedInUser, setNotLoggedIn }) {
    const [arr, setArr] = useState([]);



    useEffect(() => {
        Axios.get("http://localhost:4000/registerRoute")
            .then((res) => {
                if (res.status === 200)
                    setArr(res.data)
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }, [])

    const filteredList = arr.filter((val) => val.name === loggedInUser); // Filter based on name

    const ListItems = () => {
        console.log(filteredList);
        return filteredList.map((val, ind) => {
          return <Account key={ind} obj={val} setNotLoggedIn={setNotLoggedIn} />;
        });
      };
      

    return (
        <div>
            {ListItems()}
        </div>
        
           
        

    )
}
export default RegistrantList;