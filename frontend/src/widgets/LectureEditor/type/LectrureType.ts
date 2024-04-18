
export type LectureSectionType = {
    title: string;
    content: string;
}

export type LectureType = {
    title: string;
    sections: LectureSectionType[];
}