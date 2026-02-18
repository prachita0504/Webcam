import { useEffect, useState } from "react"
import WebcamCapture from "./components/WebcamCapture"
import Gallery from "./components/Gallery"

function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("images")) || []
    setImages(saved)
  }, [])

  const addImage = (img) => {
    const updated = [img, ...images]
    setImages(updated)
    localStorage.setItem("images", JSON.stringify(updated))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Webcam Capture App</h1>
      <WebcamCapture addImage={addImage} />
      <Gallery images={images} />
    </div>
  )
}

export default App
