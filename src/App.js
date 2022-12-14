import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";




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
        <div>{dataList[0].login}</div>
      </div>
    );
}

export default App;
