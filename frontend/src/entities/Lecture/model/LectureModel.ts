
export interface LectureModel {
    order?: number;
    slug?: string;
    title: string;
    description: string;
    isAvailable?: boolean;
    sections: Section[]
}
export interface Section {
    order?: number,
    title: string,
    body: string
}