import { Icon } from "icons";

function DownloadButton() {
 return (
     <a href="#" className="h-10 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white gap-x-4 item-center px-6">
         <Icon name="download" size={20} />
         Download the App
     </a>
 )
}

export default DownloadButton