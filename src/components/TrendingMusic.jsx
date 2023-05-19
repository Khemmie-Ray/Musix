import { useState } from "react"
import musicData from "../musicData"

const TrendingMusic = () => {
    const [showPlayer, setShowPlayer] = useState(false)
    const [modalData, setModalData] = useState(null)
    const [clickedItemId, setClickedItemId] = useState(null)

    console.log(modalData)

  return (
    <div>
        {musicData.map(data => (
        <div key={data.id}>
            <div className="music-card">
                <div>
                <h2 className="title">{data.songTitle}</h2>
                <p>{data.artist}</p>
                </div>
                <button onClick={() => {
                    setModalData(data)
                    setShowPlayer(!showPlayer)
                    setClickedItemId(data.id)
                }}>+</button>
            </div>
            
            {showPlayer && clickedItemId === data.id && (<div>
            <iframe
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                height="175"
                style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px' }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                src={modalData.previewUrl}
            ></iframe>
            </div>)}
        </div>
    ))}
       
        </div>
  )
}

export default TrendingMusic