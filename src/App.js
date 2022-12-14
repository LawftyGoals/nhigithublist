import './App.css';
import React, {useState, useEffect} from "react";

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
        <a className="name" href={user.html_url} target="_blank">{user.login}</a>
        <div className="name">
          User ID: {user.id}
        </div>
        <div>
          <a href="#">Details</a>
        </div>
        <div>
          <a href="#">Go to Top</a>
        </div>
      </div>
    </div>
  );
}

const DataFetcher = props => {

  useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://api.github.com/users?since=0&per_page=20');
        const data = await response.json();

        props.setDataList(data);
      };

      fetchData();
    }, []
  );
}

const App = (props) => {
  const [dataList, setDataList] = useState();
  
    return(
      <div>
        <DataFetcher setDataList={setDataList}/>
        <div className="header">{props.title}</div>
        <div>{!dataList ? (<div>Loading...</div>) : (<UserList dataList={dataList} />)}</div>
      </div>
    );
}

export default App;
