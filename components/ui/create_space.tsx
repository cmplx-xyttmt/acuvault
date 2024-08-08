import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import React, {useEffect, useState} from "react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {saveSpaceLocalStorage} from "@/lib/utils";
import {Space} from "@/lib/definitions";

const formSchema = z.object({
    space_name: z.string().min(2).max(50),
    category: z.string().min(2).max(50),
    tags: z.string().min(2).max(50)
});

type CreateSpaceProps = {
    setSpaces: React.Dispatch<React.SetStateAction<Space[]>>
}

export default function CreateSpace({setSpaces}: CreateSpaceProps) {
    const [isOpen, setIsOpen] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            space_name: '',
            category: '',
            tags: ''
        },
    });

    const handleSubmit = (values: z.infer<typeof formSchema>) => {

        const spacesList = saveSpaceLocalStorage(values);
        setSpaces(spacesList);
        setIsOpen(false);
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>Create New Space</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Space Details</DialogTitle>
                    <DialogDescription>
                        Enter the details for the space you're creating.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="space_name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Space Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            id="space_name"
                                            placeholder="Algorithms" {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="category"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Category
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            id="category"
                                            placeholder="Computer Science" {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="tags"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Tags (comma separated)
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            id="tags"
                                            placeholder="C++,Algorithms"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit">
                                Create Space
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>
    );
}
