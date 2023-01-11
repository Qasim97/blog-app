import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />
            </div>
            <h1 className="singlePostTitle">
                Lorem ipsum, dolor sit amet.
                <div className="singlePostEdit">
                <i class="singlePostIcon fa-regular fa-edit"></i>
                <i class="singlePostIcon fa-regular fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Safak</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit cupiditate a libero est asperiores sit temporibus ut! Perspiciatis error magni iure fugiat odio consequatur dolore a molestias. Nostrum, error!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit cupiditate a libero est asperiores sit temporibus ut! Perspiciatis error magni iure fugiat odio consequatur dolore a molestias. Nostrum, error!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit cupiditate a libero est asperiores sit temporibus ut! Perspiciatis error magni iure fugiat odio consequatur dolore a molestias. Nostrum, error!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit cupiditate a libero est asperiores sit temporibus ut! Perspiciatis error magni iure fugiat odio consequatur dolore a molestias. Nostrum, error!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit cupiditate a libero est asperiores sit temporibus ut! Perspiciatis error magni iure fugiat odio consequatur dolore a molestias. Nostrum, error!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit cupiditate a libero est asperiores sit temporibus ut! Perspiciatis error magni iure fugiat odio consequatur dolore a molestias. Nostrum, error!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit cupiditate a libero est asperiores sit temporibus ut! Perspiciatis error magni iure fugiat odio consequatur dolore a molestias. Nostrum, error!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit cupiditate a libero est asperiores sit temporibus ut! Perspiciatis error magni iure fugiat odio consequatur dolore a molestias. Nostrum, error!
            </p>
        </div>
    )
}