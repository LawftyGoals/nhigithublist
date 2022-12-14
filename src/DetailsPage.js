import './App.css';
import React, {useState, useEffect} from "react";



const RepoLink = (props) => {

    return(
        <div>
            <a href={props.userRepos.html_url} target="_blank">{props.userRepos.name}</a>
        </div>
    );
}

const UserPage = (props) => (
    <div>
        <div>
            {props.useData.userData.login}
        </div>
        <div>
            <img src={props.useData.userData.avatar_url} />
            <div>
                <div>
                    {props.useData.userData.name}
                </div>
                <div>
                    <RepoLink userRepos={props.useData.userRepos[0]}/>
                </div>
            </div>
        </div>
    </div>
);

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
            userRepos: null,
        }
    );

    //console.log(useData.userData);

    return(
        <div>
            <DataFetcher user={props.user} setUseData={setUseData} />
            <div>
             <div>
                {!useData.userRepos ? <div>Loading...</div>:<UserPage useData = {useData}/>}
            </div>   
            </div>
        </div>
    );
}


export default DetailsPage;