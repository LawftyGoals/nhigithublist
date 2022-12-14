import React, {useState, useEffect} from "react";
import '../cssModules/DetailsPage.css';
import { useLocation } from "react-router-dom";


const RepoList = (props) => (
    <div>
        {props.userRepos.map(repo => <RepoLink key={repo.id} {...repo} />)}
    </div>
);

const RepoLink = (props) => {

    return(
        <div>
            <a href={props.html_url} target="_blank" rel="noreferrer">{props.name}</a>
        </div>
    );
}

const UserPage = (props) => (
    <div>
        <div className="header">
            {props.useData.userData.login}
        </div>
        <div className="profile">
            <img src={props.useData.userData.avatar_url} />
            <div className="info">
                <div className="name">
                    {props.useData.userData.name}
                </div>
                <div className="text">
                    Public Repo Count: {props.useData.userData.public_repos}
                    <br />
                    Repositories:
                </div>
                <div style={{padding:5 + "px"}}>
                    <RepoList userRepos={props.useData.userRepos}/>
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
            const responseRepos= await fetch(data.repos_url + "?per_page=" + data.public_repos);
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
    const location = useLocation();
    const {from} =location.state;
    

    const [useData, setUseData] = useState(
        {
            userData: null,
            userRepos: null,
        }
    );

    //console.log(useData.userData);

    return(
        <div>
            <DataFetcher user={from} setUseData={setUseData} />
            <div>
             <div>
                {!useData.userRepos ? <div>Loading...</div>:<UserPage useData = {useData}/>}
            </div>   
            </div>
        </div>
    );
}


export default DetailsPage;