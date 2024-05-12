import $api from "@shared/api/http";
import {LectureModel} from "@entities/Lecture/model/LectureModel.ts";

const getLectures = async (): Promise<LectureModel[]> => {
    return await $api.get("/lectures")
        .then(res => res.data)
        .catch(err => console.log(err.message))
}

const getLectureBySlug = async (slug: string): Promise<LectureModel> => {
    return await $api.get(`/lectures/${slug}`)
        .then(res => res.data)
        .catch(err => console.log(err.message))
}

export {
    getLectures,
    getLectureBySlug
}