import {Card} from "@/components/ui/card";
import {CardContent, CardDescription, CardHeader, CardTitle} from "./card";
import {CardItemContent, Quiz, Space} from "@/lib/definitions";
import Link from "next/link";


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
                    <Link key={index} href="/">
                        <div
                             className="mb-4 grid items-start rounded-sm pl-2 pt-2 pb-4 last:mb-0 hover:text-orange-600 hover:bg-white hover:bg-opacity-5"
                        >
                            <p className="text-lg font-medium leading-none">
                                {item.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Category: <span className="text-orange-400 hover:text-orange-600">{item.description}</span>
                            </p>
                        </div>
                    </Link>
                ))
                }
            </CardContent>
        </Card>
    )
}
