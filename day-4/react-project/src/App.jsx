import './App.css'
import DynamicCard from './components/products/dynamicCard'
import profImg from './assets/profImg.jpg'
import profImg2 from './assets/profImg2.jpg'
import ProductList from './components/products/productList'

import BlogPost from './components/blog/blogPost'


function App() {

  const Posts = [
    {id:1, title: "First Blog", content: "This is the content for First Blog", author:  "Author-A" },
    {id:1, title: "Second Blog", content: "This is the content for Second Blog", author:  "Author-B"}
  ]
  return (
    <>

      {/* <DynamicCard 

    name = "Gursimran"
    age = "20"
    role = "developer"
    profileImage={profImg}
    />

    
    <DynamicCard 

    name = "Ram"
    age = "18"
    role = "developer"
    profileImage={profImg2}
    /> */}

      {/* <ProductList /> */}

      {/* <BlogPost
        title="First Blog"
        content="Here is the content for the First Blog"
        author="Author-A"
      />

      <BlogPost
        title="Second Blog"
        content="Here is the content for the Second Blog"
        author="Author-B"
      /> */}

      {/* we can do this in following ways as well */}
     <p> {Posts.map((post) => (
      <BlogPost 
      id = {post.id}
      title = {post.title}
      content = {post.content}
      author = {post.author}
      />

     ))} </p>


    </>
  )
}

export default App
