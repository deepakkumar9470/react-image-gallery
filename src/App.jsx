import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Home from "./components/Home";
import axios from "axios";
import Modal from "./components/Modal";
import Header from "./components/Header";

function App() {
  const [query, setQuery] = useState("");
  const [photo, setPhoto] = useState([]);
  const [imgTags, setImgTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [OpenModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [theme, setTheme] = useState(false);
  const [errMsg,setErrMsg] = useState('')
  const [clientId, setclientId] = useState(
import.meta.env.VITE_ACCESS_KEY
  );
  const [darkMode, setDarkMode] = useState(false);

  const onClose = () => setOpenModal(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const handleChange = (e) => {
    if (e.keyCode === 13) {
      setQuery(e.target.value);
    }
    setQuery(e.target.value);
  };

  const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${clientId}&query=${query}&page=1`;

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      if (query) {
        const res = await axios.get(fetchUrl);
        setPhoto(res.data.results);
        setTotalPages(res.data.total_pages);
        setQuery("");
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setErrMsg("Oops error")
    }
  };

  const handleSubmit = async () => {
    fetchImages();
  };

  const handleSerachEnter = (e) => {
    if (e.keyCode === 13) {
      fetchImages();
      setQuery("");
    }
  };

  const showDetailsModal = (image) => {
    setSelectedImage(image);
  };

  
  return (
    <div className={`w-full ${darkMode ? "bg-[#FFF] " : "bg-[#272829]"}`}>
      <Header
        query={query}
        setQuery={setQuery}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        theme={theme}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        handleSerachEnter={handleSerachEnter}
        errMsg={errMsg}
      />
      <Hero
        query={query}
        setQuery={setQuery}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleSerachEnter={handleSerachEnter}
      />
      <div className={`max-w-[1240px] w-full mx-auto py-12 px-10`}>
     
        <Home
          query={query}
          photo={photo}
          isLoading={isLoading}
          setPhoto={setPhoto}
          setOpenModal={setOpenModal}
          showDetailsModal={showDetailsModal}
          imgTags={imgTags}
          darkMode={darkMode}
          fetchImages={fetchImages}
        />
       
        {OpenModal ? (
          <Modal
            close={onClose}
            darkMode={darkMode}
            selectedImage={selectedImage}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
