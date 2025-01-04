export interface ContentItem {
    maintext: string;
    description: string;
}

export interface CommandsItem {
    id: number;
    title: string;
    content: ContentItem[];
}

export const commandsData: CommandsItem[] = [
    {
        id: 1,
        title: "Basic commands and background information",
        content: [
            {
                maintext: '/help',
                description: 'Output of all commands, symbols, and support contacts.'
            },
        ]
    },
    {
        id: 2,
        title: "Tracking target activity",
        content: [
            {
                maintext: '/at',
                description: 'Active lock tracking for 10 minutes.'
            },
            {
                maintext: '/i',
                description: 'Output of detailed information about the player.'
            },
            {
                maintext: '/pt or /t',
                description: 'Phalanx test (change in strength in 2 minutes).'
            },
            {
                maintext: '/g',
                description: 'Withdrawal of the player\'s equipment.'
            },
        ]
    },

];