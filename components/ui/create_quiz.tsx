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

const createQuizFormSchema = z.object({
    quiz_name: z.string().min(2).max(50),
    spaces: z.string().min(2).max(50),
    tags: z.string().min(2).max(50)
});

const createQuestionFormSchema = z.object({
    question: z.string().min(2).max(255),
    answer: z.string().min(2).max(255),
    tags: z.string().min(0).max(50)
});

type DialogContentProps = {
    changeStage: () => void;
}

export default function CreateQuiz() {
    const [isOpen, setIsOpen] = useState(false);
    const [stage, setStage] = useState("creating-quiz");
    console.log(stage);
    const changeStage = () => {
        if (stage === "creating-quiz")
            setStage("adding-questions")
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>Create New Quiz</Button>
            </DialogTrigger>
            {
                stage === "creating-quiz" ? <CreateQuizDialogContent changeStage={changeStage}/> :
                    <AddQuestionsDialogContent/>
            }

        </Dialog>
    )
}

function CreateQuizDialogContent({changeStage}: DialogContentProps) {
    const form = useForm<z.infer<typeof createQuizFormSchema>>({
        resolver: zodResolver(createQuizFormSchema),
        defaultValues: {
            quiz_name: '',
            spaces: '',
            tags: ''
        }
    });

    const handleSubmit = (values: z.infer<typeof createQuizFormSchema>) => {
        console.log(values);
        changeStage();
    }
    return (
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
                                        <SelectItem value="Algorithms">Algorithms</SelectItem>
                                        <SelectItem value="Frontend Development">Frontend Development</SelectItem>
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
                    <DialogFooter>
                        <Button type="submit">
                            Save Quiz and Add Questions
                        </Button>
                    </DialogFooter>
                </form>
            </Form>

        </DialogContent>
    )
}

function AddQuestionsDialogContent() {
    const form = useForm<z.infer<typeof createQuestionFormSchema>>({
        resolver: zodResolver(createQuizFormSchema),
        defaultValues: {
            question: '',
            answer: '',
            tags: ''
        }
    });
    const [submittedQuestions, setSubmittedQuestions] = useState<z.infer<typeof createQuestionFormSchema>[]>([])

    const handleSubmit = (values: z.infer<typeof createQuestionFormSchema>) => {
        setSubmittedQuestions([...submittedQuestions, values]);
        console.log("Saving all questions")
        console.log(`Question: ${values['question']}`);
        console.log(`Answer: ${values['answer']}`);
        console.log("All questions:");
        console.log(submittedQuestions);
    }

    const handleSaveAndAdd = () => {
        console.log("Saving current values and ")
        console.log(form.getValues());
        setSubmittedQuestions([...submittedQuestions, form.getValues()]);
        form.reset();
    }

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Quiz Questions</DialogTitle>
                <DialogDescription>
                    Add a new question.
                </DialogDescription>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="question"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Question
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        id="question"
                                        placeholder="What is an algorithm?" {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="answer"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Answer
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        id="answer"
                                        placeholder="An algorithm is a sequence of steps that lead to an outcome" {...field}
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
                                        placeholder="stacks,queues,graphs"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <DialogFooter>
                        <Button type="button" onClick={handleSaveAndAdd}>
                            Add Another Question
                        </Button>
                        <Button type="submit">
                            Save and Close
                        </Button>
                    </DialogFooter>
                </form>
            </Form>

        </DialogContent>
    );
}
