export const formatType = (type: string) => {
    switch (type) {
        case 'BASIC':
            return 'Basic'
        case 'FAST':
            return 'Fast'
        case 'TURBO':
            return 'Turbo'
    }
}