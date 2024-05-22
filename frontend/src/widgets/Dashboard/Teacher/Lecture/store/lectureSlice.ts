import {createSlice} from "@reduxjs/toolkit";

type editorLectureState =  {
    title: string;
    description: string;
    sections: SectionState[];
}
type SectionState = {
    order: number;
    title: string;
    content: string;
}
const initialState:editorLectureState = {
    title: "",
    description: "",
    sections: [],
}

const editorLectureSlice = createSlice({
    name: "@@editorLecture",
    initialState,
    reducers: {
        deleteLecture: (state) => {
            Object.assign(state, initialState);
        },
        addLecture: (state, action) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
        },
        addSection: (state, action) => {
            state.sections.push(action.payload)
        },
        removeSection: (state, action) => {
            state.sections = state.sections.filter(section => section.order!== action.payload)
        },
        editSection: (state, action) => {
            state.sections = state.sections.map(section => {
                if (section.order === action.payload.order) {
                    section.title = action.payload.title;
                    section.content = action.payload.content;
                }
                return section;
            })
        },
        saveLecture: (state) => {
            console.log(state)
            Object.assign(state, initialState);
        }
    }
})

export const {
    addLecture,
    addSection,
    removeSection,
    deleteLecture,
    saveLecture,
    editSection} = editorLectureSlice.actions;
export const editorLectureReducer = editorLectureSlice.reducer;