import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
// import Readingtime from './Components/Readingtime/Readingtime'


function App() {
const [bookmarks, setBookmarks] = useState([])
const [readingTime, setReadingTime] = useState(0)

const handleAddBookmark = blog => {
  const newBookMark = [...bookmarks, blog];
  setBookmarks(newBookMark)
}

const handleReadingTime = time => {

setReadingTime(readingTime + time)


}
  return (
    <>
      <Header></Header>

      <div className='md:flex mt-5 px-5 max-w-4xl mx-auto'>
      <Blogs handleAddBookmark={handleAddBookmark} handleReadingTime={handleReadingTime}></Blogs>
      {/* <Readingtime handleReadingTime={handleReadingTime}></Readingtime> */}
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     
      </div>
    
      
      
    </>
  )
}

export default App
