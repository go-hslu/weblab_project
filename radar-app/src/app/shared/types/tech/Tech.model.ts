export interface Tech {
    id: string;
    name: string;
    nameIdentifier: string;
    category: string;
    state: string;
    description: string;
    createdOn: Date;
    createdBy: string;
    publication: Date|null;
}
