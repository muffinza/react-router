import blogs from "../data/blogs";
import "./Blog.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Blog() {
    const [search,setSearch] = useState("")
    const [filterBlog,setFilterBlog] =useState([])
    useEffect(()=>{
      const result =  blogs.filter((e)=>e.title.includes(search))
      setFilterBlog(result)
    },[search])

  return (
    <div className="blog-container">
      <div className="search-container">
        <input type="text" placeholder="ค้นหาความก้าก้า" value={search} onChange={(e)=>setSearch(e.target.value)} />
      </div>
      <article>
        {filterBlog.map((e) => (
          <Link key={e.id} to={`/blog/${e.id}`} state={{color:'black'}}>
            <div className="csrd">
              <h2>{e.title}</h2>
              <p>{e.content.substring(0, 100)}</p>
              <hr />
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
}
