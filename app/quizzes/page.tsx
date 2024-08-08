import CardList from "@/components/ui/CardList";

export default function Quizzes() {
    return (
        <div className="m-8">
            <div className="my-4">
                <CardList
                    title="Quizzes"
                    description="Your list of quizzes"
                    items={["Number Theory Algorithms Quiz", "Server Side Rendering Quiz", "Memory Management Quiz"]}
                />
            </div>
        </div>
    );
}
