import React from "react"

const ImageGallery = ({ links, handleRemoveImage }) => {
  return (
    <div>
      {links.map((link) => {
        return (
          <div className="image" key={link.id}>
            <img src={link.url} alt={`${link.id} Img`} />
            <button
              className="button"
              onClick={() => handleRemoveImage(link.id)}
            >
              X
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default ImageGallery
