import './App.css'
import DynamicCard from './components/dynamicCard'
import profImg from './assets/profImg.jpg'
import profImg2 from './assets/profImg2.jpg'
import ProductList from './components/products/productList'

import BlogPost from './components/blog/blogPost'


function App() {
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

      <BlogPost
        title="First Blog"
        content="Here is the content for the First Blog"
        author="Author-A"
      />

      <BlogPost
        title="Second Blog"
        content="Here is the content for the Second Blog"
        author="Author-B"
      />


    </>
  )
}

export default App
