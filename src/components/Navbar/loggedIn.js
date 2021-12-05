import { UserIcon, ChevronDownIcon } from "@heroicons/react/outline"
const LoggedIn = () => {
	return (
		<div className="flex items-center text-gray-50 hover:text-gray-400 cursor-pointer">
			<UserIcon className="w-6 h-6 "/>
			<ChevronDownIcon className="w-4 h-4"/>
		</div>
	)
}

export default LoggedIn
