import React from 'react';
import classes from "../../css/index.module.scss";
import {SuccessOpen} from "../../hocks/hideShowFeedBack";

const Success = () => {
    return (
        <div id={'modalSuccess'} className={classes.modals_feed_fixed}>

            <div className={classes.relative}>

                <div onClick={() => SuccessOpen(false)} className={classes.modals_feed_hide}></div>

                <div id={'modalSuccessContent'} className={classes.content}>
                    <h3>
                        Спасибо, ваши данные успешно отправлены!
                        Наш лучший менеджер свяжется с вами для уточнения деталей заявки.
                    </h3>
                </div>
            </div>

        </div>
    );
};

export default Success;