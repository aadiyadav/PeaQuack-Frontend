import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import './profile.css'

export default function App(){
    return (
        <div>
            <Topbar/>
            <div className="line"></div>
            <div className="profileContainer">
                <Sidebar/>
                <Feed/>
            </div>
        </div>
    )
}