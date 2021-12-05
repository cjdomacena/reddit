import { getDocs, query, collection, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db, auth } from './../../firebase';
import { useContext } from 'react'
import { UserContext } from './../../context/UserContext'
import Card from './Card';

const UserPosts = () =>
{
	const { user } = useContext(UserContext);
	const [posts, setPosts] = useState(null);
	const newPosts= [];
	const getPosts = async (q) =>
	{
		await getDocs(q).then((res) =>
		{
			setPosts(res);
		})
	}
	useEffect(() =>
	{
		if (user)
		{
			const q = query(collection(db, "users"), where("author.uid", "==", user.uid))
			getPosts(q)
		}
	}, [user])

	if(user && posts){
		posts.forEach((post) => {
			newPosts.push(post)
		})
	}

	return (
		<div className="container mx-auto grid grid-cols-5 gap-4">
			{posts ? newPosts.map((post) => <Card post={post} />) : ""}
		</div>
	)
}

export default UserPosts
