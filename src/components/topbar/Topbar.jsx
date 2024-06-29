import './topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material';

function Topbar(){
    return (
        <div>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <span className="logo">PeaQuack</span>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        <Search className='searchIcon'/>
                        <input type="text" placeholder='Search for anything...' className="searchInput" />
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarLink">Homepage</span>
                        <span className="topbarLink">Timeline</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <Person/>
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <Chat/>
                            <span className="topbarIconBadge">3</span>
                        </div>
                        <div className="topbarIconItem">
                            <Notifications/>
                            <span className="topbarIconBadge">2</span>
                        </div>
                    </div>
                    <div className="account">
                        <img src="/assets/profile-pictures/1.jpeg" alt="" className="topbarImage" />
                        <span className="topbarName">Aadi Yadav</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar