export interface QuestionsItemContent {
    head: string;
    description: string;
}

export interface QuestionsItem {
    id: number;
    title: string;
    content: QuestionsItemContent[]; // Массив объектов, описанных выше
}

export const questionsData: QuestionsItem[] = [
    {
        id: 1,
        title: "Basic commands and background information",
        content: [
            {
                head: "/help",
                description: "Output of all commands, symbols, and support contacts."
            }
        ]
    },
    {
        id: 2,
        title: "Tracking target activity",
        content: [
            {
                head: "/at",
                description: "Active lock tracking for 10 minutes."
            },
            {
                head: "/pt or /t",
                description: "Phalanx test (change in strength in 2 minutes)."
            },
            {
                head: "/g",
                description: "Withdrawal of the player's equipment."
            },
        ]
    },
];