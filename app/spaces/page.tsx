'use client';

import CardList from "@/components/ui/CardList";
import CreateSpace from "@/components/ui/create_space";
import {useEffect, useState} from "react";
import {convertSpacesToCardItems, getSpacesLocalStorage} from "@/lib/utils";
import {Space} from "@/lib/definitions";

export default function Spaces() {
    const [spaces, setSpaces] = useState<Space[]>([]);
    useEffect(() => {
        const allSpaces = getSpacesLocalStorage();
        setSpaces(allSpaces);
    }, []);

    return (
        <div className="m-8">
            <CreateSpace
                    setSpaces={setSpaces}
                />
            <div className="my-4">
                <CardList
                    title="Spaces"
                    description="Your list of spaces"
                    items={convertSpacesToCardItems(spaces)}
                />
            </div>
        </div>
    );
}
