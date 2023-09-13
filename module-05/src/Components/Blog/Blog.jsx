import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmarks}) => {
   console.log(blog);
    // eslint-disable-next-line react/prop-types
    const{title,cover,author_img, author, reading_time,posted_date,hashtags }=blog;
    return (
        <div className="mb-20">
            
            <img className="w-full" src={cover} alt={`cover picture of title ${title}`} />
            <div className="flex justify-between">
                <div className="flex  items-center gap-5 my-4">
                        <img className="w-[60px]" src={author_img} alt="" />
                        <div>
                        <h1 className="text-2xl font-semibold">{author}</h1>
                        <h1>{posted_date}</h1>
                        </div>
                 </div>

                <div className='flex gap-2 items-center'>
                    <p>{reading_time} min read</p>
                    <span><button
                     onClick={()=>handleAddToBookmarks(blog)} className='text-red-600 text-2xl'><FaBookmark></FaBookmark></button></span>

                </div>

            </div>
            <h2 className="text-4xl ">{title}</h2>
            {/* <p>#{hashtags}</p> */}
            {
                hashtags.map((hash,index)=> <span key={index}><a href="">#{hash}</a></span>)
            }
           
            
        </div>
    );
};

export default Blog;