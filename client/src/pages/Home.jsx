import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my Porject's Blog</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cum adipisci magni pariatur fugit. Totam porro dolore non odit quasi est quod necessitatibus id. Libero officiis placeat aliquid accusantium est.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-red-700 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      <div className='p-3 bg-red-100 dark:bg-slate-700'>
        <CallToAction />
      </div>

      <div className='max-w-full mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className=' grid grid-cols-2 sm:grid-cols-3 gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-blue-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
