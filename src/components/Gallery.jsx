function Gallery({ images }) {

  const downloadImage = (image, index) => {
    const link = document.createElement("a")
    link.href = image
    link.download = `webcam-image-${index + 1}.png`
    link.click()
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>

      {images.length === 0 && (
        <p className="text-gray-400">No images captured yet</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative group">
            <img
              src={img}
              alt="capture"
              className="rounded-lg border border-gray-700"
            />

            <button
              onClick={() => downloadImage(img, index)}
              className="absolute bottom-2 right-2 bg-black/70 px-3 py-1 text-sm rounded hidden group-hover:block"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
