import React from 'react'

const Card = ({post}) => {
	return (
		<div className="w-full rounded-md bg-gray-900 ring-1 ring-gray-500 p-4 space-y-4 text-gray-200 hover:bg-gray-600 cursor-pointer">
			<h1 className="text-xl font-bold line-clamp-2">{post.data().title}</h1>
			<p className="line-clamp-2 text-sm">{post.data().content}</p>
			<p className="text-sm">{post.data().author["name"]}</p>
		</div>
	)
}

export default Card
