import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import Divider from '@mui/material/Divider';

import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="grid md:grid-cols-2 bg-gray-50 drop-shadow-lg rounded-lg mb-8">
      <div>
        <div className="relative overflow-hidden pb-80 md:rounded-lg rounded-t-lg h-full">
          <img src={post.featuredImage.url} alt="" className="object-center absolute h-full w-full object-cover" />
        </div>
      </div>
      <div className="grid grid-cols-1 px-4">
        <h1 className="transition duration-700 text-left mb-4 cursor-pointer hover:text-pink-600 sm:text-xl text-sm font-semibold lg:pl-15 my-4">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <Divider variant="middle" />
        <p className="text-left text-sm text-gray-700 font-normal pl-4 lg:pl-15 my-4">
          {post.excerpt}
        </p>
        <div>
          <ul className='flex flex-wrap justify-start'>
            {post.categories.map((category,index) =>(
              <li key={index} className='mx-1 px-2 rounded-full bg-gradient-to-r from-white to-blue-500'>{category.name}</li>
            ))
            }
          </ul>
        </div>
        <div className="block lg:flex text-center items-center justify-center my-4 w-full">
          <div className="flex items-center justify-center my-2 lg:mb-0 w-full lg:w-auto mr-8">
            <Image
              unoptimized
              loader={grpahCMSImageLoader}
              alt={post.author.name}
              height="17px"
              width="17px"
              className="align-middle rounded-full"
              src={post.author.photo.url}
            />
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-sm">{post.author.name}</p>
          </div>
          <div className="font-small text-gray-700 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <div className="text-center h-20">
          <Link href={`/post/${post.slug}`}>
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
          </Link>
        </div>
      </div>
    </div>
    

    
);

export default PostCard;
