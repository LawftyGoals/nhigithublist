import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";




const App = (props) => {
const [dataList, setDataList] = useState();

useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/users?since=0&per_page=20');
      const data = await response.json();

      setDataList(data);
    };

    fetchData();
  }, []
);
  return(
    <div>
      <div>{props.title}</div>
      <div>{dataList[0].login}</div>
    </div>
  );
}

export default App;
