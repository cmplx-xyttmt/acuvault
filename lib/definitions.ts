export type Timestamp = {
    created_at: string;
    updated_at: string;
}

export type User = {
    id: string;
    username: string;
    email: string;
    password: string;
    timestamp: Timestamp;
}

export type Space = {
    id: string;
    space_name: string;
    category: string;
    tags: string[];
    author: User;
    timestamp: Timestamp;
}

export type Quiz = {
    id: string;
    quiz_name: string;
    spaces: Space[];
    tags: string[];
    author: User;
    timestamp: Timestamp;
}

export type Question = {
    id: string;
    question_text: string;
    solution_text: string;
    tags: string[];
    quizzes: Quiz[];
    author: User;
    source: string;  // Where did the question from? textbook, contest, e.t.c.
    timestamp: Timestamp;
}

export type UserQuizParticipation = {
    id: string;
    user: User;
    quiz: Quiz;
    score: number;
    time_limit: number;
    started_at: string;
    finished_at: string;
}
