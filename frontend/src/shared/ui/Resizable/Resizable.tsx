import {cNames} from "@shared/lib/cNames/cNames.ts";

import { PiDotsSixVerticalBold, PiDotsSixBold } from "react-icons/pi";

import cls from './Resizable.module.scss'
import {ReactNode, useEffect, useRef, useState} from "react";

interface ResizableProps {
    children?: ReactNode;
    direction: 'horizontal' | 'vertical';
    resizerPosition: 'left' | 'right';
    changedWidth: (w: number) => void;
}
// TODO: Need to fix because we have jumping when we click on separator
export const Resizable: React.FC<ResizableProps> = (props) => {
    const {
        children,
        direction,
        resizerPosition = 'right',
        changedWidth,
    } = props;

    const resizerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(900);

    useEffect(() => {
        const resizer = resizerRef.current;
        if (!resizer) {
            return;
        }

        let canMove = false;

        const handleMouseDown = () => {
            canMove = true
        }
        const handleMouseUp = () => {
            canMove = false
        }
        const handleMouseMove = (event: MouseEvent) => {
            if (canMove) {
                setWidth(event.x)
                changedWidth(event.x);
            }
        }

        resizer.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            resizer.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('mousemove', handleMouseMove)
        };
    }, [])

    return (
        <div className={cNames(cls.resizableContainer, {}, [direction])} style={{width: width}}>
            {resizerPosition === 'left' && <div ref={resizerRef} className={cls.resizerV}><PiDotsSixBold size={200} /></div>}
            {children}
            {resizerPosition === 'right' && <div ref={resizerRef} className={cls.resizerV}><PiDotsSixVerticalBold size={200} /></div>}
        </div>
    );
};
