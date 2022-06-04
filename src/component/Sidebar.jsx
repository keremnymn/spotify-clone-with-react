import logo from "img/logo.svg"
import { Icon } from "icons"
import Menu from "component/Sidebar/Menu"
import Playlist from "component/Sidebar/Playlist"
import DownloadButton from "component/Sidebar/DownloadButton"


function Sidebar() {
    return (
        <aside className="w-60 pt-6 flex flex-col bg-black">

            <a href="#" className="mb-7 px-6">
                <img src={logo} alt="spotify logo" className="h-10" />
            </a>
            
            <Menu />
            <nav className="mt-6">
                <ul>
                    <li>
                        <a href="" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-70 group-hover:bg-opacity-100 rounded-sm text-black">
                                <Icon name="plus" size = {12}/>
                            </span>
                            Create Playlist
                        </a>
                    </li>
                    <li>
                        <a href="" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-200 opacity-60 group-hover:bg-opacity-100">
                                <Icon name="heart" size = {12}/>
                            </span>
                            Liked Songs
                        </a>
                    </li>
                </ul>
            </nav>

            <Playlist />
            <DownloadButton />
        </aside>
    )
}

export default Sidebar