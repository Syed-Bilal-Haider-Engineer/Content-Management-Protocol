export interface Ticket {
    id: number;
    title: string;
    description: string;
    date: Date;
    status: 'open' | 'in-progress' | 'closed';
}