import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img src="https://images.unsplash.com/photo-1523635252177-cedd4a1502c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" alt="" className="postImg" />
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