import { useEffect,useState} from "react";

 const GetPost=()=>{
 
  const [post,setPost]=useState([]);

  useEffect(()=>{
    const fetchData=async ()=>{
      const res=await fetch("https://jsonplaceholder.typicode.com/posts");
      const res2=await res.json();
      setPost(res2);
      //console.log(res2);
    };
    fetchData();
  },[]);

let renderpost= post.slice(0,10).map((p)=>{
     return(<div key={p.id}>
       <p> {p.title}</p>
     </div>)
})
 
return <div>
    <strong>POST</strong>
    {renderpost}
    </div>

}


export default GetPost;