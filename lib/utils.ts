import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {Space, User, Timestamp, CardItemContent} from "@/lib/definitions";
import exp from "node:constants";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const defaultUser: User = {
    id: "1",
    username: "admin",
    email: "admin@mail.com",
    password: "pw",
    timestamp: null
}

type SpaceInputFields = {
    space_name: string,
    category: string,
    tags: string
}

export function saveSpaceLocalStorage({space_name, category, tags}: SpaceInputFields): Space[] {
    const nowTimestamp = new Date().getTime();
    let timestamp: Timestamp = {
        created_at: nowTimestamp,
        updated_at: nowTimestamp
    }
    let spacesList = getSpacesLocalStorage();
    let space: Space = {
        id: (spacesList.length + 1).toString(),
        space_name: space_name,
        category: category,
        tags: tags.split(","),
        author: defaultUser,
        timestamp: timestamp
    }

    spacesList.push(space);

    localStorage.setItem("spaces", JSON.stringify(spacesList));

    return spacesList;
}

export function getSpacesLocalStorage(): Space[] {
    let spacesString = localStorage.getItem('spaces');
    let spacesList: Space[];
    if (spacesString) {
        spacesList = JSON.parse(spacesString);
    } else {
        spacesList = [];
    }
    return spacesList;
}

export const convertSpacesToCardItems = (spaces: Space[]): CardItemContent[] => (
    spaces.map((space) => ({
        title: space.space_name,
        description: space.category
    }))
);

export const convertStringsToCardItems = (strings: string[]): CardItemContent[] => (
    strings.map((s) => ({
        title: s,
        description: ''
    }))
);
