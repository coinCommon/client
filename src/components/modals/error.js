import React from 'react';
import classes from "../../css/index.module.scss";
import {ErrorOpen} from "../../hocks/hideShowFeedBack";

const Error = () => {
    return (
        <div id={'modalError'} className={classes.modals_feed_fixed}>

            <div className={classes.relative}>

                <div onClick={() => ErrorOpen(false)} className={classes.modals_feed_hide}></div>

                <div id={'modalErrorContent'} className={classes.content}>
                    <h3>
                        Произошла ошибка! <br/> Попробуйте позже!
                    </h3>
                </div>
            </div>

        </div>
    );
};

export default Error;