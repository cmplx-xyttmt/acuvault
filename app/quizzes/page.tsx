import CardList from "@/components/ui/CardList";
import {convertStringsToCardItems} from "@/lib/utils";
import CreateQuiz from "@/components/ui/create_quiz";

export default function Quizzes() {
    return (
        <div className="m-8">
            <CreateQuiz/>
            <div className="my-4">
                <CardList
                    title="Quizzes"
                    description="Your list of quizzes"
                    items={convertStringsToCardItems(["Number Theory Algorithms Quiz", "Server Side Rendering Quiz", "Memory Management Quiz"])}
                />
            </div>
        </div>
    );
}
