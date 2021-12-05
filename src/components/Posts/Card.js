import React from 'react'

const Card = ({post}) => {
	return (
		<div className="w-full rounded-md bg-gray-400 ring-1 ring-gray-500 p-4 space-y-4 text-gray-900">
			<h1 className="text-xl font-bold">{post.data().title}</h1>
			<p className="truncate text-sm">{post.data().content}</p>
		</div>
	)
}

export default Card
