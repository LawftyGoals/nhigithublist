import './App.css';
import React, {useState, useEffect} from "react";


const DataFetcher = (props) => {
    useEffect(() => {
        const dataFetcher= async () => {
            const response = await fetch(props.user);
            const data = await response.json();
            const responseRepos= await fetch(data.repos_url);
            const repos = await responseRepos.json();

            props.setUseData({
                userData: data,
                userRepos: repos,
            });
            
        }

        dataFetcher();
    }, []);
}


const DetailsPage = (props) => {

    const [useData, setUseData] = useState(
        {
            userData: null,
            userRepo: null,
        }
    );

    console.log(useData.userData);

    return(
        <div>
            <DataFetcher user={props.user} setUseData={setUseData} />
            <div>

            </div>
        </div>
    );
}


export default DetailsPage;