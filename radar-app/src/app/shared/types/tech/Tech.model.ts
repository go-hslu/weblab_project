export interface Tech {
    id: string|null;
    name: string;
    nameIdentifier: string;
    category: string;
    state: string;
    description: string;
    createdOn: Date|null;
    createdBy: string|null;
    publication: Date|null;
}
