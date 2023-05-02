import React from 'react';
import classes from "../../css/index.module.scss";
import {FeedBackOpen} from "../../hocks/hideShowFeedBack";

const Feedback = () => {

    return (
        <section className={classes.feedback}>
            <div onDragStart={(e) => {
                e. preventDefault()
            }} className={classes.feedback_img}>
                <img alt={'Ювента рефрижератор'} src={require('../../img/auto_feedback.webp')}/>
            </div>

            <div className={classes.container}>
                <div className={classes.feedback_flex}>

                    <div className={classes.text}>
                        <div className={classes.title}>
                            Нет подходящего маршрута?
                        </div>
                        <div className={classes.description}>
                            Оставьте ваши данные и мы подберем для вас оптимальный вариант
                        </div>
                    </div>

                    <div>
                        <button onClick={() => FeedBackOpen(true)} className={classes.button_noBack}>Обратная связь</button>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Feedback;