import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ">
            <h2 className=" p-4 text-3xl font-semibold text-center">Bookmarked Blogs : {bookmarks.length}</h2>

            {
                bookmarks.map((bookmarks,index)=><Bookmark key={index} bookmark={bookmarks}></Bookmark>)
            }


        </div>
    );
};

export default Bookmarks;