import React, {useState} from 'react';
import classes from "../../css/index.module.scss";
import InputMask from "react-input-mask";
import {fetchAmoCRMData, fetchAmoCRMToken, sendTelegram} from "../../http/otherAPI";
import {ErrorOpen, FeedBackOpen, SuccessOpen} from "../../hocks/hideShowFeedBack";
import Loader from "../Link/loader";
import HideAndShows from "../../hocks/hideAndShow";
import {PRIVACY_ROUTE} from "../../utils/const";
import {useNavigate} from "react-router-dom";

const ModalsFeed = () => {

    const navigate = useNavigate()

    const [loader, setLoader] = useState(false)
    const [data, setData] = useState([{name: '', phone: ''}])

    const [privacyCheckbox, setPrivacyCheckbox] = useState(true)

    const TargetFocus = (id) => {
        document.getElementById(id).style = 'top: -20px; left: 0; font-size: 12px; color: #444;'
    }
    const TargetBlur = (id, value) => {
        let styleLabel = document.getElementById(id)
        if (value !== '') {return false}
        else {styleLabel.style = 'top: 13px; left: 12px; font-size: 16px; color: #d8d8d8; height: 0; margin: 0 auto;'}
    }


    const SendToTelegram = () => {
        let border = document.querySelectorAll('#content_inputs input')

        let bool = false
        Object.values(data[0]).map(value => value !== '').filter(f => !f ? bool = true : '')

        // Проверка телефона
        let phoneVerify = false
        const successPhone = [data[0].phone].map(m => m[4, 5, 6, 9, 10, 11, 13, 14, 16, 17] === '_' || m === '').filter(f => f === true ? phoneVerify = false : phoneVerify = true)

        if (!bool && phoneVerify) {
            setLoader(true)
            fetchAmoCRMToken().then(success => {
                fetchAmoCRMData(data[0], 'FEEDBACK').then(success => {
                    SuccessOpen(true)
                    setData([{name: '', phone: ''}])
                    FeedBackOpen(false)
                    document.body.style.overflow = 'hidden'
                    for (let i = 0; i < 2; i++) {
                        border[i].style.border = 'solid 1px #d8d8d8'
                    }
                    document.getElementById('labelFeedName').style = 'top: 13px; left: 12px; font-size: 16px; color: #d8d8d8; height: 0; margin: 0 auto;'
                    document.getElementById('labelFeedPhone').style = 'top: 13px; left: 12px; font-size: 16px; color: #d8d8d8; height: 0; margin: 0 auto;'
                }).catch(error => {
                    FeedBackOpen(false)
                    ErrorOpen(true)
                    document.body.style.overflow = 'hidden'
                })
            }).catch(error => console.log(error)).finally(() => setLoader(false))
            sendTelegram(data[0], 'FEEDBACK').then(data => console.log(data)).catch(error => console.log(error))
        } else {
            for (let i = 0; i < 2; i++) {
                if (border[i].value === '') {
                    border[i].style.border = 'solid 1px red'
                }
                else {
                    border[i].style.border = 'solid 1px #d8d8d8'
                }
            }
        }

    }

    if (loader) {
        return <Loader />
    }

    return (
        <div id={'feedBack'} className={classes.modals_feed_fixed}>

            <div className={classes.relative}>

                <div onClick={() => FeedBackOpen(false)} className={classes.modals_feed_hide}></div>

                <div id={'feedBackContent'} className={classes.content}>
                        <h3 style={{color: '#19191b'}}>
                            Обратная связь
                        </h3>
                    <div id={'content_inputs'} className={classes.content_inputs}>
                        <input
                            id={'inputIdName'}
                            value={data[0].name}
                            onChange={(e) => setData(data.map(m => m.cityLoad !== false ? {...m, ['name'] : e.target.value.replace(/[^a-zа-яё\s]/gi, '')} : m))}
                            onFocus={() => TargetFocus('labelFeedName')}
                            onBlur={(e) => TargetBlur('labelFeedName', e.target.value)}
                        />
                        <label id={'labelFeedName'}>Ваше имя *</label>
                    </div>
                    <div id={'content_inputs'} className={classes.content_inputs}>
                        <InputMask
                            id={'inputIdPhone'}
                            mask="+7 (999) 999 99 99"
                            value={data[0].phone}
                            onChange={(e) => setData(data.map(m => m.cityLoad !== false ? {...m, ['phone'] : e.target.value} : m))}
                            onFocus={() => TargetFocus('labelFeedPhone')}
                            onBlur={(e) => TargetBlur('labelFeedPhone', e.target.value)}
                        />
                        <label id={'labelFeedPhone'}>Ваш телефон *</label>
                    </div>

                    <div className={classes.content_buttons}>
                        <button
                            disabled={!privacyCheckbox ? true : ''}
                            onClick={() => SendToTelegram()}
                            style={{width: '100%', padding: '12px 0', margin: '0 auto'}}
                            className={classes.button_blue}
                        >
                            Оставить контакты
                        </button>

                        <div className={classes.privacy_policy_checkbox}>
                            <div className={classes.flex_center}>
                                <input checked={privacyCheckbox} onChange={() => HideAndShows(privacyCheckbox, setPrivacyCheckbox)} type={"checkbox"}/>
                                <div className={classes.privacy_policy_text}>
                                    Нажимая на кнопку «Узнать результат», я даю своё согласие на <span onClick={() => {
                                    navigate(PRIVACY_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    FeedBackOpen(false)
                                }}>обработку персональных данных.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ModalsFeed;