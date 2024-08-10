"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import React, {useState} from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const formSchema = z.object({
    quiz_name: z.string().min(2).max(50),
    spaces: z.string().min(2).max(50),
    tags: z.string().min(2).max(50)
});

export default function CreateQuiz() {
    const [isOpen, setIsOpen] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            quiz_name: '',
            spaces: '',
            tags: ''
        }
    });

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>Create New Quiz</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Quiz Details</DialogTitle>
                    <DialogDescription>
                        Enter the details for the quiz.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="quiz_name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Quiz Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            id="quiz_name"
                                            placeholder="Algorithms Quiz" {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="spaces"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Choose a space for this quiz
                                    </FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a space."/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="0">Algorithms</SelectItem>
                                            <SelectItem value="1">Frontend Development</SelectItem>
                                            <SelectItem value="2">Systems Programming</SelectItem>
                                        </SelectContent>
                                    </Select>

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
                                            placeholder="stacks,queues,graphs"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button>
                            Add questions
                        </Button>
                        <DialogFooter>
                            <Button type="submit">
                                Save Quiz
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>
    )
}