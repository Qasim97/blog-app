import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr></hr>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque ipsa eos consequuntur a? Facilis asperiores, laboriosam repellendus aliquid accusantium nemo illum, ab, quidem iste assumenda molestias cupiditate nulla veniam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque ipsa eos consequuntur a? Facilis asperiores, laboriosam repellendus aliquid accusantium nemo illum, ab, quidem iste assumenda molestias cupiditate nulla veniam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque ipsa eos consequuntur a? Facilis asperiores, laboriosam repellendus aliquid accusantium nemo illum, ab, quidem iste assumenda molestias cupiditate nulla veniam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque ipsa eos consequuntur a? Facilis asperiores, laboriosam repellendus aliquid accusantium nemo illum, ab, quidem iste assumenda molestias cupiditate nulla veniam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque ipsa eos consequuntur a? Facilis asperiores, laboriosam repellendus aliquid accusantium nemo illum, ab, quidem iste assumenda molestias cupiditate nulla veniam?
            </p>
        </div>
    )
}