import { getDocs, query, collection } from 'firebase/firestore'
import { useEffect, useState, useContext } from 'react'
import { db } from './../../firebase';
import Card from './Card';
import { PostsContext } from '../../context/PostsContext';
const Posts = () =>
{

	const {posts, setPosts} = useContext(PostsContext);
	const newPosts = [];
	const getPosts = async (q) =>
	{
		await getDocs(q).then((res) =>
		{
			setPosts(res);
		})
	}
	useEffect(() =>
	{
			const q = query(collection(db, "users"))
			getPosts(q)
		
	}, [])

	if (posts)
	{
		posts.forEach((post) =>
		{
			newPosts.push(post)
		})
	}

	return (
		<div className="container mx-auto w-full grid grid-cols-1 gap-4">
			{posts ? newPosts.map((post) => <Card post={post}/>) : ""}
		</div>
	)
}

export default Posts
