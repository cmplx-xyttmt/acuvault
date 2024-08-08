'use client';


import Navbar from "@/components/main-nav";
import CreateSpace from "@/components/ui/create_space";
import CardList from "@/components/ui/CardList";

export default function Home() {
    return (
        <>
            <div className="m-8">
                <CreateSpace/>
                <div className="my-4 grid grid-cols-2 gap-2">
                    <CardList
                        title="Spaces"
                        description="Your list of spaces"
                        items={["Algorithms", "NextJS", "Systems Programming"]}
                    />
                    <CardList
                        title="Quizzes"
                        description="Your list of quizzes"
                        items={["Number Theory Algorithms Quiz", "Server Side Rendering Quiz", "Memory Management Quiz"]}
                    />
                </div>
            </div>
        </>
        // <main className="flex min-h-screen flex-col items-center justify-between p-24">
        //     <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        //         {/*<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">*/}
        //         {/*  Acuvault*/}
        //         {/*</p>*/}
        //         <Navbar/>
        //     </div>
        //
        // </main>
    );
}
