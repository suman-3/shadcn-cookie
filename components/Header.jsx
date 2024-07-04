import { CookieIcon } from "lucide-react";
import { Button } from "./ui/button";
import { FaCodeFork, FaGithub } from "react-icons/fa6";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
    return (
        <header className="py-5 px-6 md:px-20 lg:px-32 flex items-center justify-between">
            <div>
                <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
            </div>
            <div className="flex items-center gap-2">
                <Button size="icon" asChild><a href="https://github.com/suman-3/shadcn-cookie"><FaGithub className="h-[1.1rem] w-[1.1rem]" /></a></Button>
                <Button size="icon" variant="secondary" asChild><a href="https://github.com/suman-3/shadcn-cookie/fork"><FaCodeFork className="h-[1.1rem] w-[1.1rem]" /></a></Button>
                <ModeToggle/>
            </div>
        </header>
    )
}