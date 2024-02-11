export interface TechDto {
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
