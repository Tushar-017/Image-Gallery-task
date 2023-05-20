import { useState } from "react"
import "./App.css"
import ImageGallery from "./components/ImageGallery"

function App() {
  const Images = [
    { id: 1, url: "https://bit.ly/3lmYVna" },
    { id: 2, url: "https://bit.ly/3flyaMj" },
  ]

  const [links, setLinks] = useState(Images)

  const handleRemoveImage = (id) => {
    // Filter out the image with the specified id
    const updatedImages = links.filter((image) => image.id !== id)
    // Update the state with the new image array
    setLinks(updatedImages)
  }

  return (
    <div className="App">
      <ImageGallery links={links} handleRemoveImage={handleRemoveImage} />
    </div>
  )
}

export default App
