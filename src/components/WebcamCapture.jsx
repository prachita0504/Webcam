import Webcam from "react-webcam"
import { useRef } from "react"

function WebcamCapture({ addImage }) {
  const webcamRef = useRef(null)

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot()
    addImage(imageSrc)
  }

  return (
    <div className="flex flex-col items-center">
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/png"
        className="rounded-xl w-80 mb-4"
      />

      <button
        onClick={capture}
        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold"
      >
        Capture Photo
      </button>
    </div>
  )
}

export default WebcamCapture
