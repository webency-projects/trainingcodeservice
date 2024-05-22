import cls from './PreviewLecture.module.scss'
import {Button, ButtonTheme} from "@shared/ui/Buttton/Button.tsx";
import { FiEdit } from "react-icons/fi";
import {CgRemoveR} from "react-icons/cg";
import {useAppDispatch} from "@app/store/hooks.ts";
import {removeSection} from "@widgets/Dashboard/Teacher/Lecture/store/lectureSlice.ts";
interface SectionProps {
    order: number;
    title: string;
    content: string;
}

const Section = ({order, title, content}: SectionProps) => {
    const dispatch = useAppDispatch()
    return (
        <section className={cls.sectionWrapper}>
            <div className={cls.sectionControl}>
                <Button theme={ButtonTheme.CLEAR} onClick={() => dispatch(removeSection(order))}>
                    <CgRemoveR className={cls.deleteIcon} size={24} />
                </Button>
                <Button theme={ButtonTheme.CLEAR}>
                    <FiEdit className={cls.editIcon} size={24}/>
                </Button>
            </div>
            <h2>{order}. {title}</h2>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </section>
    )
}
export default Section;