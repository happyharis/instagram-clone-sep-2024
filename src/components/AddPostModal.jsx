import { useContext, useState } from "react"
import { ProfileContext } from "../App"

export default function AddPostModal() {
  const { image, name } = useContext(ProfileContext)
  const [imageUrl, setImageUrl] = useState('')
  const [description, setDescription] = useState('')
  const [invalidUrl, setInvalidUrl] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageUrl) { // if the image url is not empty
      setImageUrl('')
      setDescription('')
      // handleClose()
    } else { // if the image url is empty
      setInvalidUrl(true) // show an error
    }
  }

  const handleImageError = () => {
    setInvalidUrl(true)
  }

  return (
    <div>AddPostModal</div>
  )
}
