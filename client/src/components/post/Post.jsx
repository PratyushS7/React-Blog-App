import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img
            className="postImg" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywgfQlbqDSQUzVmIJRjnvvn2ruS3UvoGDyA&usqp=CAU"
            alt=""       
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </span>
            <hr/>
            <span className="postDate">
                1 hour ago
            </span>
        </div>
        <p className="postDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum iste 
            iure magnam voluptas quam enim, veniam, eveniet deserunt veritatis consequuntur 
            facilis consequatur voluptates quaerat tenetur excepturi nihil ratione ex rem?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum iste 
            iure magnam voluptas quam enim, veniam, eveniet deserunt veritatis consequuntur 
            facilis consequatur voluptates quaerat tenetur excepturi nihil ratione ex rem?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum iste 
            iure magnam voluptas quam enim, veniam, eveniet deserunt veritatis consequuntur 
            facilis consequatur voluptates quaerat tenetur excepturi nihil ratione ex rem?
        </p>
    </div>
  )
}
