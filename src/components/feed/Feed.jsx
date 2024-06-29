import './feed.css'
import Share from '../share/Share.jsx'
import Post from '../post/Post.jsx'
import {Data} from "../dummyData.js"

export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Data.map( props => (
        <Post key={props.id} post={props}/>
        )
        )}
      </div>
    </div>
  )
}
