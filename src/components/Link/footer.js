import React, {useContext, useEffect, useState} from 'react';
import classes from "../../css/index.module.scss";

import {useNavigate} from "react-router-dom";
import {
    ABOUT_ROUTE, CALCULATION_ROUTE, CONTACTS_ROUTE,
    DOCUMENTS_ROUTE,
    NEWS_ROUTE, PRICES_ROUTE, PRIVACY_ROUTE,
    REVIEWS_ROUTE,
    SERVICES_ROUTE,
    TECHNOLOGIES_ROUTE
} from "../../utils/const";
import {Context} from "../../index";
import {Translate} from "../../hocks/translate";
import {fetchServices} from "../../http/servicesAPI";
import Loader from "./loader";
import {fetchTechnologies} from "../../http/technologiesAPI";
import ModalsFeed from "../modals/modalsFeed";
import Success from "../modals/success";
import Error from "../modals/error";
import {FeedBackOpen} from "../../hocks/hideShowFeedBack";

const Footer = () => {
    const {allStore} = useContext(Context)
    const navigate = useNavigate()

    const [loader, setLoader] = useState(false)

    useEffect(() => {
        fetchServices(null, 5).then(data => allStore.setServices(data.rows))
            .finally(() => fetchTechnologies(null, 5).then(data => allStore.setTechnologies(data.rows))
                .finally(() => setLoader(true)))
    }, [])


    if (!loader) {
        return <Loader/>
    }

    return (
        <footer>
            <div className={classes.container}>
                <div className={classes.footer_grid}>

                    <nav>
                        <ul>
                            <li>
                                <a onClick={() => {
                                    navigate(SERVICES_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                }}>
                                    Все услуги
                                </a>
                            </li>

                            {allStore.getServices.map(s =>
                                <li key={s.id}>
                                    <a onClick={() => {
                                        navigate(SERVICES_ROUTE + '/' + Translate(s.title) + '/' + s.id)
                                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    }}>
                                        {s.title}
                                    </a>
                                </li>
                            )}

                        </ul>
                    </nav>

                    <nav>
                        <ul>
                            <li>
                                <a onClick={() => {
                                    navigate(TECHNOLOGIES_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                }}>
                                    Все технологии
                                </a>
                            </li>
                            {allStore.getTechnologies.map(t =>
                                <li key={t.id}>
                                    <a onClick={() => {
                                        navigate(TECHNOLOGIES_ROUTE + '/' + Translate(t.title) + '/' + t.id)
                                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    }}>
                                        {t.title}
                                    </a>
                                </li>
                            )}
                            {/*<li>*/}
                            {/*    <a>*/}
                            {/*        Договор-заявка на перевозку груза*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <a>*/}
                            {/*        Доверенность на отправку и получение груза*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <a>*/}
                            {/*        Перечень грузов, не принимаемых к перевозке*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <a>*/}
                            {/*        Устав автомобильного транспорта*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                        </ul>
                    </nav>

                    <nav>
                        <ul>
                            <li>
                                <a onClick={() => {
                                    navigate(CALCULATION_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                }}>
                                    Рассчет стоимости
                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    navigate(PRICES_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                }}>
                                    Цены
                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    navigate(DOCUMENTS_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                }}>
                                    Документы
                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    navigate(NEWS_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                }}>
                                    Новости
                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    navigate(ABOUT_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                }}>
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    navigate(CONTACTS_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                }}>
                                    Контакты
                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    navigate(REVIEWS_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                }}>
                                    Отзывы
                                </a>
                            </li>

                        </ul>
                    </nav>


                    <div className={classes.footer_contact}>
                        <div className={classes.footer_phone}>
                            <a href={'tel:+78342310831'}>+7 (8342) 31-08-31</a>
                        </div>
                        <div className={classes.footer_phone}>
                            <a href={'tel:+79603368800'}>+7 (960) 336-88-00</a>
                        </div>
                        <div className={classes.footer_phone}>
                            <a style={{fontWeight: 500}} href='mailto:transport.logist777@yandex.ru'>
                                transport.logist777@yandex.ru
                            </a>
                        </div>
                        <div>
                            <button onClick={() => FeedBackOpen(true)} className={classes.button_noBack}>
                                Оставить заявку
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <div className={classes.footer_line}>
                <div className={classes.container}>
                    <div className={classes.privacy_policy}>
                        <a onClick={() => {
                            navigate(PRIVACY_ROUTE)
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                        }}>Политика конфиденциальности</a>
                        <div>
                            ©Все права защищены, 2023
                        </div>
                    </div>
                </div>
            </div>


            <ModalsFeed />
            <Success />
            <Error />

        </footer>
    );
};

export default Footer;