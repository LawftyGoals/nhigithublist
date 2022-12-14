import '../cssModules/Home.css';
import React, {useState, useEffect} from "react";
import {NavLink} from "./NavbarElements";

const UserList = (props) => {
  return(
    <div className="card">
      {props.dataList.map(element => <Card key={element.id} {...element} />)}
    </div>
  );
};


const Card = (props)=>{
  const user = props;
  return(
    <div className="github-profile">
      <img src={user.avatar_url} />
      <div className="info">
        <a className="name" href={user.html_url} target="_blank" rel="noreferrer">{user.login}</a>
        <div className="name">
          User ID: {user.id}
        </div>
        <div>
          <NavLink to="/DetailsPage" state={{from: user.url,}}>
            Details Page
          </NavLink>
        </div>
      </div>
      <a className="gototop" href="#">Go to Top</a>
    </div>
    
  );
}

const DataFetcher = props => {
    useEffect(() => {
      const fetchData = async () => {
        
        const response = await fetch('https://api.github.com/users?since=0&per_page=20');
        const data = await response.json();

        props.setResponseOK({response: response.ok});
        props.setDataList(data);
      };

      fetchData();
    }, []
  );
}

const Home = (props) => {
  const [dataList, setDataList] = useState();
  const [responseOK, setResponseOK] = useState({response: false});
  
  console.log(!dataList);

    return(
      <div>
        <DataFetcher setDataList={setDataList} setResponseOK={setResponseOK}/>
        <div className="header">{props.title}</div>
        <div>{responseOK.response === false ? (<div style={{textAlign:"center"}} >Loading...</div>) : (<UserList dataList={dataList} />)}</div>
      </div>
    );
}

export default Home;
