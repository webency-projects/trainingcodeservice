import {BsArrowLeft, BsArrowRight, BsJournalText, BsPersonBoundingBox} from "react-icons/bs";
import {Button, ButtonTheme} from "@shared/ui/Buttton/Button.tsx";

import {cNames} from "@shared/lib/cNames/cNames.ts";
import cls from './ManageLecturePanel.module.scss';

interface ManageLecturePanelProps {
    classname?: string;
}

const ManageLecturePanel = (props: ManageLecturePanelProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.ManageLecturePanel, {}, [classname])}>
            <div className={cls.buttonsWrapper}>
                <Button theme={ButtonTheme.CLEAR}><BsArrowLeft className={cls.arrowLeft} size={18}/></Button>
                <span>|</span>
                <Button theme={ButtonTheme.CLEAR}><BsArrowRight className={cls.arrowRight} size={18}/></Button>
            </div>
            <div className={cls.helpElements}>
                <BsJournalText className={cls.journalIcon} size={18}/>
                <BsPersonBoundingBox className={cls.profileIcon} size={18}/>
            </div>
        </div>
    )
}

export default ManageLecturePanel;