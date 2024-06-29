import './share.css'
import {PermMedia, Label, LocationOn, Mood} from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/profile-pictures/1.jpeg" alt="" className="shareTopImage" />
                <input type="text" placeholder="What's on your mind, Aadi?" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia className='shareOptionIcon' style={{color: "#3626A7"}}/>
                        <span className="shareOptionText">Media</span>
                    </div>
                    <div className="shareOption">
                        <Label className='shareOptionIcon' style={{color: "#EE4266"}}/>
                        <span className="shareOptionText">Tags</span>
                    </div>
                    <div className="shareOption">
                        <LocationOn className='shareOptionIcon' style={{color: "#32533D"}}/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <Mood className='shareOptionIcon' style={{color: "#EFCA08"}}/>
                        <span className="shareOptionText">Emoji</span>
                    </div>
                </div>
                <div className="shareShare">
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    </div>
  )
}
