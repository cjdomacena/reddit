import { doc, serverTimestamp, setDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'
import { useContext } from 'react'
import React, { useState } from 'react'
import { UserContext } from '../context/UserContext'
const AddPost = () =>
{
	const [postTitle, setPostTitle] = useState("");
	const [postContent, setPostContent] = useState("");
	const { user } = useContext(UserContext);
	const handleInputChange = (e, setter) =>
	{
		setter(e.target.value);
	}

	const onSubmitForm = async () =>
	{
		const postRef = doc(collection(db, "users"));
		
		const postData = {
			content: postContent,
			title: postTitle,
			author: {
				name: user.displayName,
				photoURL: user.photoURL,
				email: user.email,
				uid: user.uid
			},
			created_at: serverTimestamp(),
			updated_at: serverTimestamp(),
			post_id: postRef.id
		}
		await setDoc(postRef, postData).catch(e => console.error(e)).finally(() =>
		{
			setPostContent("");
			setPostTitle("");
		})

	}


	return (
		<div className="w-96 mx-auto">
			<div className="grid grid-cols-1 gap-6">
				<div>
					<label htmlFor="post-title" className="block text-sm font-medium text-gray-50">Post Title</label>
					<input type="text" name="post-title" id="post-title" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required onChange={(e) => handleInputChange(e, setPostTitle)} value={postTitle} />
				</div>

				<div>
					<label htmlFor="about" class="block text-sm font-medium text-gray-50">
						About
					</label>
					<div className="mt-1">
						<textarea id="about" name="about" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com" required onChange={(e) => handleInputChange(e, setPostContent)} value={postContent}></textarea>
					</div>
					<p class="mt-2 text-sm text-gray-500">
						Brief description about the post.
					</p>
				</div>
				<div className="space-x-4">
					<button className="bg-green-500 px-4 py-2 text-gray-50 hover:bg-green-400 rounded" onClick={onSubmitForm} >Submit</button>
					<button className="bg-gray-500 px-4 py-2 text-gray-50 hover:bg-gray-400 rounded" type="submit">Cancel</button>
				</div>
			</div>
		</div>

	)
}

export default AddPost
