import AllPosts from "../components/Posts/AllPosts"
import { useContext } from "react"
import  {UserContext} from "../context/UserContext"
const Home = () => {
	const {user} = useContext(UserContext)

	return (
		<div className="grid grid-cols-3 gap-4">
			<AllPosts/>
			<AllPosts />
			<AllPosts />
		</div>
	)
}

export default Home
