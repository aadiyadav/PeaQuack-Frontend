import './rightbar.css'
import {FiberManualRecordRounded} from "@mui/icons-material"

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="rightbarAd">
          <img src="assets/ad.jpg" alt="" className="adImage" />
        </div>
        <div className="onlineFriendsHeading">
          <FiberManualRecordRounded className='onlineFriendsIcon' fontSize='smaller'/>
          <span className="onlineFriendsText">Online Friends</span>
        </div>
        <div className="onlineFriends">
          <div className="onlineFriend">
            <img src="assets/profile-pictures/2.jpeg" alt="" className="onlineFriendImage" />
            <FiberManualRecordRounded className='onlineFriendIcon' fontSize='smaller'/>
            <span className="onlineFriendName">William Shakespeare</span>
          </div>
          <div className="onlineFriend">
            <img src="assets/profile-pictures/3.jpeg" alt="" className="onlineFriendImage" />
            <FiberManualRecordRounded className='onlineFriendIcon' fontSize='smaller'/>
            <span className="onlineFriendName">Michael Jackson</span>
          </div>
          <div className="onlineFriend">
            <img src="assets/profile-pictures/4.jpeg" alt="" className="onlineFriendImage" />
            <FiberManualRecordRounded className='onlineFriendIcon' fontSize='smaller'/>
            <span className="onlineFriendName">Kalpana Chawla</span>
          </div>
          <div className="onlineFriend">
            <img src="assets/profile-pictures/5.jpeg" alt="" className="onlineFriendImage" />
            <FiberManualRecordRounded className='onlineFriendIcon' fontSize='smaller'/>
            <span className="onlineFriendName">Joe Biden</span>
          </div>
          <div className="onlineFriend">
            <img src="assets/profile-pictures/6.jpeg" alt="" className="onlineFriendImage" />
            <FiberManualRecordRounded className='onlineFriendIcon' fontSize='smaller'/>
            <span className="onlineFriendName">Kim Jong Un</span>
          </div>
        </div>
      </div>
    </div>
  )
}
