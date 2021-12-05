import { getDocs, query, collection, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db, auth } from './../../firebase';
import { useContext } from 'react'
import { UserContext } from './../../context/UserContext'
import Card from './Card';

const Posts = () =>
{
	const [posts, setPosts] = useState(null);
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
		
	}, [posts])

	if ( posts)
	{
		posts.forEach((post) =>
		{
			newPosts.push(post)
		})
	}

	return (
		<div className="container mx-auto w-full grid grid-cols-1 gap-4">
			{posts ? newPosts.map((post) => <Card post={post} />) : ""}
		</div>
	)
}

export default Posts
