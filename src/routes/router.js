import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import QuizTest from "../components/QuizTest/QuizTest";
import Quizzes from "../components/Quizzes/Quizzes";
import Statistics from "../components/Statistics/Statistics";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/',
                element: <Quizzes></Quizzes>,
                loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz')
            },
            { 
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz')
            },
            { path: '/blogs', element: <Blogs></Blogs> },
            {
                path: '/quiz/:id',
                element: <QuizTest></QuizTest>,
                loader: async({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            }
        ]
    }
])

export {
    router
}