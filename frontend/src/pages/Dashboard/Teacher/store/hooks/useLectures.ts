import {useAppDispatch, useAppSelector} from "@app/store/hooks.ts";
import {loadLectures, selectAllLectures, selectLecturesInfo} from "../slice/lectureSlice.ts";
import {useEffect} from "react";

export const useLectures = ()  => {
    const dispatch = useAppDispatch();
    const lectures = useAppSelector(selectAllLectures)
    const {status, error, qty} = useAppSelector(selectLecturesInfo);
    useEffect(() => {
        if (!qty) {
            dispatch(loadLectures());
        }
    }, [qty, dispatch]);
    return [lectures, {status, error, qty}]
}