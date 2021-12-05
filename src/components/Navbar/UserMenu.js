import { ChevronDownIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom"
import { Menu, Transition } from "@headlessui/react"
import { signOut } from "@firebase/auth"
import { auth } from "../../firebase"
import { useContext } from 'react';
import { UserContext } from './../../context/UserContext'
import { useNavigate } from "react-router"
const UserMenu = ({ user }) =>
{
	let navigate = useNavigate();
	const { setIsLoggedIn } = useContext(UserContext);
	const logout = () => { 
		signOut(auth).then(()=>{
			setIsLoggedIn(false);
			navigate("/")
		}); 

	};
	if(user){
		return (
			<Menu as="div" className="relative">
				<Menu.Button>
					<div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded">
						<div className="w-9 h-9 rounded-full">
							<img className="object-cover rounded-full" src={user.photoURL} alt={`Profile for ${ user.displayName }`} />
						</div>
						<p className="flex items-center">{user.displayName} <span><ChevronDownIcon className="w-4 h-4 ml-2" /></span></p>
					</div>
				</Menu.Button>
				<Transition
					enter="transition duration-100 ease-out"
					enterFrom="transform scale-95 opacity-0"
					enterTo="transform scale-100 opacity-100"
					leave="transition duration-75 ease-out"
					leaveFrom="transform scale-100 opacity-100"
					leaveTo="transform scale-95 opacity-0"
				>
					<div className="absolute top-15 right-0 bg-gray-50 w-64 focus:ring-1 ring-gray-100 rounded grid grid-flow-row space-y-4 shadow text-gray-900">
						<Menu.Items as="ul" className="grid grid-cols-1 space-y-2 p-2">
							<Menu.Item as="li" className="hover:bg-gray-200 p-1 rounded cursor-pointer">
								<Link to="/">
									Home
								</Link>
							</Menu.Item>
							<hr />
							<Menu.Item as="li" className="hover:bg-gray-200 p-1 rounded cursor-pointer">
								<Link to="/userPosts">
									My Posts
								</Link>
							</Menu.Item>

							<Menu.Item as="li" className="hover:bg-gray-200 p-1 rounded cursor-pointer">
								<Link to="/addPost">
									Add Post
								</Link>
							</Menu.Item>
							<hr />
							<Menu.Item as="li" className="hover:bg-gray-200 p-1 rounded cursor-pointer">

								<Link to="/">
									Account Settings
								</Link>

							</Menu.Item>
							<hr />
							<Menu.Item as="li" className="hover:bg-gray-200 p-1 rounded text-red-600 cursor-pointer">

								<button onClick={logout}>
									Logout
								</button>

							</Menu.Item>
						</Menu.Items>
					</div>
				</Transition>
			</Menu>
		)
	
	} else
	{
		return ""
	}
	

}

export default UserMenu
