import { useState } from 'react'
import './post.css'
import {MoreVert, FavoriteRounded, FavoriteBorderRounded, ChatBubbleRounded} from "@mui/icons-material"

export default function Post({post}) {
  const [like, setLike] = useState(post.likes)
  const [isLiked, setIsLiked] = useState(false)

  function likeHandler(){
    setLike(isLiked ? (like-1): like+1)
    setIsLiked(!isLiked)

  } 
  return (
    <div>
      <div className="post">
        <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img src={post.photo} alt="" className="postProfileImage" />
                <ul className="postTopInfoList">
                  <li className="postUsername">{post.username}</li>
                  <li className="postDate">{post.time}</li>
                </ul>
              </div>
              <div className="postTopRight">
                <MoreVert className='postMore'/>
              </div>
            </div>
            <div className="postCenter">
              <div className="postCaption">{post.caption}</div>
              <img src={post.post} alt="" className="postImage" />
            </div>
            <div className="postBottom">
              <div className='postBottomLeft'>
                <div className="postLikeIcon" onClick={likeHandler}>
                  {isLiked ? <FavoriteRounded htmlColor='red'/> : <FavoriteBorderRounded htmlColor='red'/>}
                </div>
                <span className="postLikeCount">{like}</span>
                <div className='postCommentIcon'>
                  <ChatBubbleRounded htmlColor='blue'/>
                </div>
                <span className="postCommentCount">{post.comments}</span>
              </div>
              <div className="postBottomRight">
                <span className="postComment">Add a Comment</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
