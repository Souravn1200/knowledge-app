import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
const [bookmarks, setBookmarks] = useState([])

const handleAddBookmark = blog => {
  const newBookMark = [...bookmarks, blog];
  setBookmarks(newBookMark)
}

  return (
    <>
      <Header></Header>

      <div className='md:flex mt-5 px-5 max-w-4xl mx-auto'>
      <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    
      
      
    </>
  )
}

export default App
