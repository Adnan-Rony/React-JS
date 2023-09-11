

const Blog = ({blog}) => {
    const{title}=blog;
    return (
        <div>
            <h2 className="text-4xl ">{title}</h2>
            
        </div>
    );
};

export default Blog;