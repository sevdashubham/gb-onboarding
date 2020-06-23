import React, {useState} from 'react';
import utilStyles from './stepper.module.css';
import appConstants from "../util/enUS";

export default function Stepper() {
    const {buttonPrevious, buttonNext, buttonComplete} = appConstants;

    const [count, setCount] = useState(0);

    const dotsArray = new Array(5);

    const stepper = [1, 2, 3, 4, 5].map((dot, index) => {
        return (
            <a href="#" className={`${utilStyles.slider__dot} ${index === count ? utilStyles.slider__indicator : ''}`}
               data-pos={`${index}`} key={index}/>
        )
    })

    console.log(count)
    return (
        <div className={utilStyles.container}>
            <div className={utilStyles.section} onClick={() => setCount(count >= 1 ? count - 1 : 0)}>
                <h3>{buttonPrevious}</h3>
            </div>
            <div className={utilStyles.section}>
                <div className={utilStyles.slider__dots}>
                    {stepper}
                </div>
            </div>
            <div className={`${utilStyles.section} ${utilStyles.active}`}
                 onClick={() => setCount(count < 4 ? count + 1 : 4)}>
                <h3>{count === dotsArray.length - 1 ? buttonComplete : buttonNext}</h3>
            </div>
        </div>
    )
}
