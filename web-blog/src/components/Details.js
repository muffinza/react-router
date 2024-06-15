
import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import blogs from "../data/blogs"
export default function Details(){
    const [detail,setDetail] =useState([])
    useEffect(()=>{
        //ดึงข้อมูลบทความ
       const result = blogs.find((item)=>item.id.toString()===id)
       if(result){
        setDetail(result)
       }
    },[])
    const {id} = useParams()
    return(
      <div>
         <h1>{detail.title}</h1>
        <p>{detail.content}</p>
        <img src={detail.imgUrl} alt="title"/>
        <p>{detail.auther}</p>
      </div>
    )
}