export interface TechDto {
    id: string;
    name: string;
    nameIdentifier: string;
    category: string;
    state: string;
    description: string;
    createdOn: Date;
    createdBy: string;
    updatedOn: Date;
    updatedBy: string;
    publication: Date|null;
}
