import { Icon } from "icons"
import { NavLink } from "react-router-dom"

function Section({ title, more = false, items }) {
    return (
        <section>
            <header className="flex items-center justify-between mb-4">
                <NavLink to={more ?? '#'}>
                    <h3 className="hover:underline text-2xl text-white font-semibold tracking-tight">{title}</h3>
                </NavLink>

                {more && (
                    <NavLink className={"text-xs font-semibold text-link hover:underline tracking-wider"} to={more}>
                        See All
                    </NavLink>
                )}
            </header>
            <div className="grid grid-cols-5 gap-x-6">
                {items.map(item => (
                    <NavLink 
                        key={item.id} 
                        to="/"
                        className={"bg-footer p-4 rounded-lg hover:bg-active group transition-all duration-700"}
                    >
                        <div className="pt-[100%] relative mb-4">
                            <img src={item.image}
                                loading="lazy"
                                className={`absolute inset-0 w-full h-full object-cover drop-shadow-md ${item.isRound ? "rounded-full" : "rounded-md"}`}
                            />
                            <button className="group-hover:flex group-focus:flex w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center hidden">
                                <Icon name="play" size={24} />
                            </button>
                        </div>
                        <h6 className="line-clamp-1 text-base font-semibold">{item.title}</h6>
                        <p className="text-sm mt-1 text-link line-clamp-2">{item.description}</p>
                    
                    </NavLink>
                ))}
            </div>

        </section>
    )
}

export default Section