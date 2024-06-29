import './sidebar.css'
import {Event, Bookmarks, CalendarToday, Collections, AddToPhotos, PeopleAlt, SmartDisplay, KeyboardArrowDown} from '@mui/icons-material'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
                <Event className="sidebarListIcon"/>
                <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
                <PeopleAlt className="sidebarListIcon"/>
                <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
                <SmartDisplay className="sidebarListIcon"/>
                <span className="sidebarListItemText">Watch</span>
            </li>
            <li className="sidebarListItem">
                <Collections className="sidebarListIcon"/>
                <span className="sidebarListItemText">Collections</span>
            </li>
            <li className="sidebarListItem">
                <Bookmarks className="sidebarListIcon"/>
                <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
                <CalendarToday className="sidebarListIcon"/>
                <span className="sidebarListItemText">Calendar</span>
            </li>
            <li className="sidebarListItem">
                <AddToPhotos className="sidebarListIcon"/>
                <span className="sidebarListItemText">New Post</span>
            </li>
            <button className="sidebarButton">
                <KeyboardArrowDown className="sidebarButtonIcon"/>
                <span className="sidebarButtonText">Show More</span>
            </button>
        </ul>
        <hr className='sidebarHr'/>
        <div className="accounts">Friends</div>
        <ul className="sidebarFriendList">
            <li className="sidebarFriend">
                <img src="assets/profile-pictures/5.jpeg" alt="" className="sidebarFriendImage" />
                <span className="sidebarFriendName">Joe Biden</span>
            </li>
            <li className="sidebarFriend">
                <img src="assets/profile-pictures/2.jpeg" alt="" className="sidebarFriendImage" />
                <span className="sidebarFriendName">William Shakespeare</span>
            </li>
            <li className="sidebarFriend">
                <img src="assets/profile-pictures/4.jpeg" alt="" className="sidebarFriendImage" />
                <span className="sidebarFriendName">Kalpana Chawla</span>
            </li>
            <li className="sidebarFriend">
                <img src="assets/profile-pictures/6.jpeg" alt="" className="sidebarFriendImage" />
                <span className="sidebarFriendName">Kim Jong Un</span>
            </li>
            <li className="sidebarFriend">
                <img src="assets/profile-pictures/7.jpeg" alt="" className="sidebarFriendImage" />
                <span className="sidebarFriendName">Tom Holland</span>
            </li>
            <li className="sidebarFriend">
                <img src="assets/profile-pictures/3.jpeg" alt="" className="sidebarFriendImage" />
                <span className="sidebarFriendName">Michael Jackson</span>
            </li>
        </ul>
      </div>
    </div>
  )
}
