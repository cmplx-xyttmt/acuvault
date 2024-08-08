import {Card} from "@/components/ui/card";
import {CardContent, CardDescription, CardHeader, CardTitle} from "./card";
import {CardItemContent, Quiz, Space} from "@/lib/definitions";


type CardListProps = {
    title: string,
    description: string,
    items: CardItemContent[]
}

export default function CardList({title, description, items}: CardListProps) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {items.map((item, index) => (
                    <div className="hover:text-orange-600" key={index}>{item.title}</div>
                ))
                }
            </CardContent>
        </Card>
    )
}
