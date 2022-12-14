import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';



const UserList = (props) => {
  return(
    <div>
      {props.dataList.map(element => <Card key={element.id} {...element} />)}
    </div>
  );
};


const Card = (props)=>{
  console.log(props);
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
        <div>{props.title}</div>
        <div>{!dataList ? (<div>Loading...</div>) : (<UserList dataList={dataList} />)}</div>
      </div>
    );
}

export default App;
