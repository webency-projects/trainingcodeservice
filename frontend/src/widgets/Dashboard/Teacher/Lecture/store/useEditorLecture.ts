import {useState} from "react";
import {useAppDispatch, useAppSelector} from "@app/store/hooks.ts";
import {addSection} from "./lectureSlice.ts";

export const useEditorLecture = () => {
    const [lecture, setLecture] = useState({})
    const [section, setSection] = useState({order: 1, title: "", description: ""})
    const dispatch = useAppDispatch();
    const createSection = () => {
        dispatch(addSection(section))
        setSection({order: section.order + 1, title: "", description: ""})
    }
    return [section, setSection, createSection]
}
