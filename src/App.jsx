import React, { useState,useEffect,useRef} from 'react'
import './App.css'
import Hero from './components/Hero';
import Home from './components/Home';
import Navbar from './components/Navbar';
import axios from 'axios';
import Modal from './components/Modal';
import Header from './components/Header';

function App() {
  const [query, setQuery] = useState('')
  const [photo, setPhoto] = useState([])
  const [imgTags,setImgTags] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [OpenModal,setOpenModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages,setTotalPages] = useState(0)
  const [theme,setTheme] = useState(false)
  const [clientId, setclientId] = useState("dS5IoUjOLkPTpmr4IVfzoSuAAS_ULwMgeKqUtacSMVg")

  const onClose = () =>setOpenModal(false)
  
  const handleChange = (e) => {
    if (e.keyCode === 13) {
      setQuery(e.target.value)
    }
    setQuery(e.target.value)
  }
 
  
  const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${clientId}&query=${query}&page=5`;
  
  const fetchImages= async()=>{
    setIsLoading(true)
    try {
      if(query){
      const res = await axios.get(fetchUrl)
      console.log(res.data.results)
      setPhoto(res.data.results)
      // setImgTags(res.data.results.tags)
      setTotalPages(res.data.total_pages)
      setQuery("")
      setIsLoading(false)
      }

    } catch (error) {
      setIsLoading(false)

    }
  }

  const handleSubmit = async () => {
    fetchImages()

  }


  const showDetailsModal = (image) =>{
    setSelectedImage(image)
  }
  function toggleDarkMode() {
    setTheme(prevDarkMode => !prevDarkMode)
}



  
  return (
    <div>
      {/* <Navbar 
        query={query} 
        setQuery={setQuery}
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
        theme={theme}
        toggleDarkMode={toggleDarkMode} /> */}
        <Header
        query={query} 
        setQuery={setQuery}
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
        theme={theme}
        toggleDarkMode={toggleDarkMode}/>
      <Hero/>
      <div className={`max-w-[1240px] mx-auto py-12 px-10`}>

   <Home 
      photo={photo} 
      isLoading={isLoading}      
      setPhoto={setPhoto}
      setOpenModal={setOpenModal}
      showDetailsModal={showDetailsModal}
      imgTags={imgTags}/>
      {
        OpenModal  ? <Modal close={onClose}  selectedImage={selectedImage}/> : null
      }
      </div>
    </div>
  )
}

export default App
