'use client'

import { Minus, Plus } from "lucide-react"
import { useCallback, useState } from "react"

interface Question {
    id: number;
    question: string;
    answer: string;
}

const listQuestion: Question[] = [
    {
        id: 0,
        question: "What happens to my saved games?",
        answer: "All your progress is stored securely on our servers, so you don’t have to worry about losing your data. Each time you log in, your saved games will be right where you left them, ready for you to continue your adventure without interruptions."
    },
    {
        id: 1,
        question: "Can I install mods on the games?",
        answer: "Yes, you can install mods as long as they come from reliable sources such as the Steam Workshop or other trusted communities. This ensures both your safety and the stability of the system. Our platform supports mods so you can customize and enhance your gaming experience just the way you like."
    },
    {
        id: 2,
        question: "What do I need for a good experience?",
        answer: "You don’t need powerful hardware to enjoy our service — even a basic computer or laptop will do. What really matters is having a stable and fast internet connection, since the quality of your experience depends on your bandwidth and latency. With a good connection, you’ll enjoy smooth gameplay in high resolution with minimal delays."
    },
    {
        id: 3,
        question: "Do I need to download the games on my PC?",
        answer: "Not at all. All games are already installed and ready to play directly on InstantPC. This means you save space on your device and avoid long installation times. Just connect, start your session, and jump straight into the game."
    },
    {
        id: 4,
        question: "Can I play games from my Steam, Epic, or other libraries?",
        answer: "Yes, you can log in to your personal accounts with complete security. Our systems are always wiped and kept clean after every use, ensuring your data stays private. This allows you to enjoy your own game libraries just as if you were on your own powerful gaming PC."
    },
    {
        id: 5,
        question: "Do I need to pay a subscription?",
        answer: "No monthly or hidden subscription is required. You only pay for the time you use, at an hourly rate. This way you have full control of your spending — whether you want to play for just a short session or for several hours, it’s completely up to you."
    },
    {
        id: 6,
        question: "Can I play with my friends?",
        answer: "Absolutely! You can play multiplayer games online with your friends just as you normally would. Whether it’s co-op missions or competitive matches, our remote PCs are fully compatible with online services, so you’ll never miss a chance to team up or compete."
    },
]

export const FAQ = () => {

    const [questionSelected, setQuestionSelected] = useState<number | null>(null)

    const onSelectQuestion = useCallback((id: number) => {
        setQuestionSelected(prev => prev === id ? null : id)
    }, [])

    return (
        <>
            <h2 className="text-center text-4xl mb-5">FAQ</h2>
            <ul className="space-y-3">
                {
                    listQuestion.map(({ question, answer, id }) =>
                    (<li key={id} className="w-full rounded-md px-8 py-4 border-b-1 shadow">
                        <button className="w-full text-left flex justify-between items-center cursor-pointer group  transition-all duration-200" onClick={() => onSelectQuestion(id)}>
                            <h4 className={`font-semibold ${questionSelected === id ? 'text-instant-indigo' : 'group-hover:text-instant-indigo'} `}>{question}</h4>
                            <span>
                                {questionSelected === id ? <Minus className="w-5" /> : <Plus className="w-5" />}
                            </span>
                        </button>
                        <p className={`${questionSelected === id ? 'max-h-40 opacity-100 mt-4 ' : 'max-h-0 opacity-0'} transition-all duration-500 overflow-hidden pr-10`}>{answer}</p>
                    </li>)
                    )
                }
            </ul>
        </>
    )
}
