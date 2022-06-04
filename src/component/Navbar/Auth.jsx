import { Menu } from "@headlessui/react";
import { Icon } from "icons";

function Auth() {
    return (
        <Menu as={"nav"} className="relative">
        {({ open }) => (
            <>
            <Menu.Button className={`flex items-center h-8 rounded px-2 ${open ? "bg-active" : "bg-black"} hover:bg-active`}>
                <span className="text-sm font-semibold mr-2">
                    Test User
                </span>
                <span className={open ? "rotate-180" : ""}>
                    <Icon size={16} name="downDir"  />
                </span>
            </Menu.Button>
            <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"}>
                <Menu.Item>
                    {({ active }) => (
                    <a
                        className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                        href="#"
                    >
                        Account
                    </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                    <a
                        className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                        href="#"
                    >
                        Profile
                    </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                    <a
                        className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                        href="#"
                    >
                        Log out
                    </a>
                    )}
                </Menu.Item>
            </Menu.Items>
            </>
        )}
      </Menu>
    )
}

export default Auth