import Logo from "./Logo"
import { InteractiveHoverButton } from "./ui/interactive-hover-button"

const Footer = () => {
  return (
    <footer className="max-w-[1500px] mx-auto border-t border-orange-400/70 max-md:pt-5 pt-10 pb-10">
        <div className="grid gap-8 grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1">
            <div className="col-span-2 max-lg:col-span-1">
                <Logo/>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores necessitatibus quidem nemo voluptate possimus dolores ullam, amet praesentium tenetur veniam. Accusamus sunt cupiditate numquam odit veritatis voluptate ut neque.</p>
            </div>
            <div className="col-span-1 max-md:text-left text-center space-y-2">
                <li className="list-none">Home</li>
                <li className="list-none">Service</li>
                <li className="list-none">About</li>
                <li className="list-none">Contact</li>
            </div>
            <div className="col-span-1 space-y-2">
                <h3 className="text-2xl font-bold">Guides</h3>
                <li className="list-none">React</li>
                <li className="list-none">Tailwind CSS</li>
                <li className="list-none">Motion</li>
            </div>
            <div className="col-span-2 space-y-4 max-lg:col-span-1">
                <h3 className="text-2xl font-bold">Contact Us</h3>
                <input type="text" placeholder="Email" className="bg-transparent border rounded-md p-1 w-full" />
                <InteractiveHoverButton className="text-black bg-orange-400 max-md:p-1 max-md:px-2 text-[.8rem]">Subscribe</InteractiveHoverButton>
            </div>
        </div>
    </footer>
  )
}

export default Footer