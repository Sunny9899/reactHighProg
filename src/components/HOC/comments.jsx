
import HighOrderComponent from "./HOC";

 const GetComment=({comp})=>{
 /*
  const [comment,setComment]=useState([]);

  useEffect(()=>{
    const fetchData=async ()=>{
      const res=await fetch("https://jsonplaceholder.typicode.com/comments");
      const res2=await res.json();
      setComment(res2);
      //console.log(res2);
    };
    fetchData();
  },[]);

let rendercomment= comment.slice(0,10).map((c)=>{
     return(<div key={c.id}>
       <p> {c.name}</p>
     </div>)
})
*/ 
//console.log(comp);

return (comp.map((c)=>{
<div key={c.id}>
COMMENT
<p> {c.name}</p>
</div>
})
);


}

const Comments=HighOrderComponent(GetComment,"comments");

export default Comments;


/*
    (<div key={c.id}>
      <p> {c.title}</p>
    </div>);
    */