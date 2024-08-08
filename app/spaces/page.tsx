import CardList from "@/components/ui/CardList";
import CreateSpace from "@/components/ui/create_space";

export default function Spaces() {
    return (
        <div className="m-8">
            <CreateSpace/>
            <div className="my-4">
                <CardList
                    title="Spaces"
                    description="Your list of spaces"
                    items={["Algorithms", "NextJS", "Systems Programming"]}
                />
            </div>
        </div>
    );
}
