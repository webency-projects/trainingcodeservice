
export const enum TypeTreeNode {
    FOLDER,
    FILE,
}


export interface TreeModel {
    id: number;
    label: string;
    type?: TypeTreeNode;
    children?: TreeModel[];
    selected?: boolean;
}