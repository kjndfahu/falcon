interface SubPrice {
    '30': string;
    '90': string;
    '180': string;
}

interface SubValue {
    name: string;
    value: boolean;
}

interface Subscription {
    title: string;
    prices: SubPrice;
    scan_speed: string;
    value: SubValue[];
}

export const activeSub: Subscription[] = [
    {
        title: 'Basic',
        prices: {
            '30': '50 $',
            '90': '155 $',
            '180': '240 $'
        },
        scan_speed: '30 sec',
        value: [
            {
                name: 'Shield tracker',
                value: true
            },
            {
                name: 'Fury tracker',
                value: true
            },
            {
                name: 'Activity tracker',
                value: true
            },
            {
                name: 'Migration Yools',
                value: true
            },
            {
                name: 'WOW & K71 Tracker',
                value: false
            },
            {
                name: 'Chat Bot',
                value: false
            },
            {
                name: 'Personalised Support 24/7',
                value: false
            },
        ]
    },
    {
        title: 'Fast',
        prices: {
            '30': '60 $',
            '90': '180 $',
            '180': '300 $'
        },
        scan_speed: '20 sec',
        value: [
            {
                name: 'Shield tracker',
                value: true
            },
            {
                name: 'Fury tracker',
                value: true
            },
            {
                name: 'Activity tracker',
                value: true
            },
            {
                name: 'Migration Yools',
                value: true
            },
            {
                name: 'WOW & K71 Tracker',
                value: true
            },
            {
                name: 'Chat Bot',
                value: false
            },
            {
                name: 'Personalised Support 24/7',
                value: false
            },
        ]
    },
    {
        title: 'Turbo',
        prices: {
            '30': '110 $',
            '90': '297 $',
            '180': '495 $'
        },
        scan_speed: '5 sec',
        value: [
            {
                name: 'Shield tracker',
                value: true
            },
            {
                name: 'Fury tracker',
                value: true
            },
            {
                name: 'Activity tracker',
                value: true
            },
            {
                name: 'Migration Yools',
                value: true
            },
            {
                name: 'WOW & K71 Tracker',
                value: true
            },
            {
                name: 'Chat Bot',
                value: true
            },
            {
                name: 'Personalised Support 24/7',
                value: true
            },
        ]
    }
];
