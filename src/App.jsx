import React, { useState,useEffect} from 'react'
import './App.css'
import Hero from './components/Hero';
import Home from './components/Home';
import Navbar from './components/Navbar';
import axios from 'axios';
import Loader from './components/Loader';
import Modal from './components/Modal';

function App() {
  const [query, setQuery] = useState('')
  const [photo, setPhoto] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [OpenModal,setOpenModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages,setTotalPages] = useState(0)
  const [theme,setTheme] = useState("light")
  const [clientId, setclientId] = useState("dS5IoUjOLkPTpmr4IVfzoSuAAS_ULwMgeKqUtacSMVg")


  const onClose = () =>setOpenModal(false)
  
  const handleChange = (e) => {
    if (e.keyCode === 13) {
      setQuery(e.target.value)
    }
    setQuery(e.target.value)
  }

  const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${clientId}&query=${query}&page=5`;
  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get(fetchUrl)
      console.log(res.data.results)
      setPhoto(res.data.results)
      setTotalPages(res.data.total_pages)
      setQuery("")
      setIsLoading(false)

    } catch (error) {
      setIsLoading(false)

    }

  }

  const showDetailsModal = (image) =>{
    setSelectedImage(image)
  }


  
  return (
    <div>
      <Navbar 
        query={query} 
        setQuery={setQuery}
        handleChange={handleChange} 
        handleSubmit={handleSubmit} />
      <Hero/>
      <div className='max-w-[1240px] mx-auto py-12 px-10'>

    {isLoading ? <Loader/> :<Home 
      photo={photo}       
      setPhoto={setPhoto}
      setOpenModal={setOpenModal}
      showDetailsModal={showDetailsModal}/>}
      {
        OpenModal  ? <Modal close={onClose}  selectedImage={selectedImage}/> : null
      }
      </div>
    </div>
  )
}

export default App
