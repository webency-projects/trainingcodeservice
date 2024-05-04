import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './AddLecture.module.scss'
import {Input} from "@shared/ui/Input/Input.tsx";
import {LectureModel, Section} from "@entities/Lecture/model/LectureModel.ts";
import AddSection from "@widgets/AddLecture/ui/Section/AddSection.tsx";


interface AddLectureProps {
    classname?: string;
    lecture: LectureModel;
    setLectures: (lecture: LectureModel) => void;
}

const AddLecture = (props: AddLectureProps) => {
    const {classname = "", lecture, setLectures} = props;

    const addSection = (section: Section) => {
        setLectures({...lecture, sections: [...lecture.sections, section]})
    }
    return (
        <div className={cNames(cls.AddLecture, {}, [classname])}>
            <h3>Название лекции</h3>
            <Input value={lecture.title} onChange={e => {
                setLectures({...lecture, title: e.target.value})
            }}/>
            <AddSection addSection={addSection}/>
        </div>
    )
}

export default AddLecture;