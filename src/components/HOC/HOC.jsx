import { useEffect,useState} from "react";

 const HighOrderComponent=(WrappedComponent,entity)=>{
 
  const [data,setData]=useState([]);

  useEffect(()=>{
    const fetchData=async ()=>{
      const res=await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
      const res2=await res.json();
      setData(res2);
      //console.log(res2);
    };
    fetchData();
  },[]);
//let renderData= data.slice(0,10);

 
return <WrappedComponent comp={data}/>


}


export default HighOrderComponent;