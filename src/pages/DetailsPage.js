import React, {useState, useEffect} from "react";
import '../DetailsPage.css';


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
        <div className="github-profile">
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
    const setUseData = props.setUseData;
    useEffect(() => {
        const dataFetcher= async () => {
            const response = await fetch(props.user);
            const data = await response.json();
            const responseRepos= await fetch(data.repos_url + "?per_page=" + data.public_repos);
            const repos = await responseRepos.json();

            setUseData({
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