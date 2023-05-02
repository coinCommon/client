import React, {useContext, useEffect, useMemo, useState} from 'react';
import classes from "../../css/index.module.scss";
import {useNavigate} from "react-router-dom";
import {
    ABOUT_ROUTE, CALCULATION_ROUTE, CONTACTS_ROUTE,
    DOCUMENTS_ROUTE,
    MAIN_ROUTE, NEWS_ROUTE, PRICES_ROUTE,
    REVIEWS_ROUTE,
    SERVICES_ROUTE,
    TECHNOLOGIES_ROUTE
} from "../../utils/const";
import HideAndShows from "../../hocks/hideAndShow";
import {fetchServices} from "../../http/servicesAPI";
import {Context} from "../../index";
import Loader from "./loader";
import {Translate} from "../../hocks/translate";
import {fetchWeather} from "../../hocks/file";

const Header = () => {
    const navigate = useNavigate()
    const {allStore} = useContext(Context)

    const [menuActive, setMenuActive] = useState(false)
    useMemo(() => {
        if(menuActive) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [menuActive])


    const [loader, setLoader] = useState(false)
    useEffect(() => {
        fetchServices().then(data => allStore.setServices(data.rows)).finally(() => setLoader(true))
    }, [])

    const [load, setLoad] = useState(false)
    const [weather, setWeather] = useState([])




    const success = ({ coords }) => {
        fetchWeather(coords.latitude + ',' + coords.longitude).then(response => {
                setWeather([response])
                setLoad(true)
            }).catch(error => console.log(error))
    }
    const error = ({ message }) => {
        fetchWeather('Москва').then(response => {
            setWeather([response])
            setLoad(true)
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, {
            enableHighAccuracy: true
        })
    }, [])






    if (!loader || !load) {
        return <Loader/>
    }

    return (
        <header>

            <div className={classes.header_top}>
                <div className={classes.container_1750}>
                    <div className={classes.text}>
                        <marquee loop={'-1'} direction={'left'}>
                            <span> Погода: </span>
                            {weather !== null ?
                                weather.map(w =>
                                    <div key={w.current.temp_c}
                                        style={{display: 'inline-block'}}
                                    >
                                        {w.location.name === 'Saransk' ? 'Саранск' : w.location.name} {w.current.temp_c}°
                                        <img style={{width: '20px', margin: '0 5px'}} alt={w.current.condition.text} src={w.current.condition.icon}/>
                                        ощущается как {w.current.feelslike_c}°
                                    </div>
                                )
                                :
                                ''
                            }
                        </marquee>
                    </div>
                </div>
            </div>

            <div className={classes.header_main}>
                <div className={classes.container_1750}>
                    <div className={classes.flex_space}>

                        <div onClick={() => {
                            navigate(MAIN_ROUTE)
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                        }} className={classes.logo}>
                            <img alt={'Logo'} src={require('../../img/logo.png')}/>
                            <div className={classes.logo_text}>
                                <span>Транспортная компания</span>
                                Республики Мордовия
                            </div>
                        </div>

                        <nav className={classes.menu}>

                            <ul>
                                <li>
                                    <a>О компании</a>
                                    <div className={classes.arrow_4}>
                                        <span className={classes.arrow_4_left}></span>
                                        <span className={classes.arrow_4_right}></span>
                                    </div>
                                </li>
                                <div className={classes.menu_hover}>
                                    <div className={classes.subtitles}>
                                        <a onClick={() => {
                                            navigate(ABOUT_ROUTE)
                                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                        }}>
                                            О нас
                                        </a>
                                        <a onClick={() => {
                                            navigate(DOCUMENTS_ROUTE)
                                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                        }}>
                                            Документы
                                        </a>
                                        <a onClick={() => {
                                            navigate(REVIEWS_ROUTE)
                                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                        }}>
                                            Отзывы
                                        </a>
                                        <a onClick={() => {
                                            navigate(TECHNOLOGIES_ROUTE)
                                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                        }}>
                                            Технологии
                                        </a>
                                    </div>
                                </div>
                            </ul>

                            <ul>
                                <li>
                                    <a onClick={() => {
                                        navigate(SERVICES_ROUTE)
                                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    }}>Услуги</a>
                                    <div className={classes.arrow_4}>
                                        <span className={classes.arrow_4_left}></span>
                                        <span className={classes.arrow_4_right}></span>
                                    </div>
                                </li>
                                <div className={classes.menu_hover}>
                                    <div className={classes.subtitles}>
                                        {allStore.getServices.map(s =>
                                            <a onClick={() => {
                                                navigate(SERVICES_ROUTE + '/' + Translate(s.title) + '/' + s.id)
                                                window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                            }} key={s.id}>
                                                {s.title}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </ul>

                            <ul>
                                <li>
                                    <a>Расчет стоимости</a>
                                    <div className={classes.arrow_4}>
                                        <span className={classes.arrow_4_left}></span>
                                        <span className={classes.arrow_4_right}></span>
                                    </div>
                                </li>
                                <div className={classes.menu_hover}>
                                    <div className={classes.subtitles}>
                                        <a onClick={() => {
                                            navigate(PRICES_ROUTE)
                                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                        }}>
                                            Цены
                                        </a>
                                        <a onClick={() => {
                                            navigate(CALCULATION_ROUTE)
                                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                        }}>
                                            Расчет стоимости
                                        </a>
                                    </div>
                                </div>
                            </ul>

                            <ul>
                                <li>
                                    <a onClick={() => {
                                        navigate(NEWS_ROUTE)
                                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    }}>Новости</a>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <a onClick={() => {
                                        navigate(CONTACTS_ROUTE)
                                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    }}>Контакты</a>
                                </li>
                            </ul>
                        </nav>

                        <div className={classes.phone}>
                            <div className={classes.phone_big}>
                                <a href={'tel:+78342310831'}>+7 (8342) 31-08-31</a>
                            </div>
                            <div className={classes.phone_little}>
                                <a href={'tel:+79603368800'}>+7 (960) 336-88-00</a>
                            </div>

                            <div onClick={() => window.location.href = 'tel:+79625934411'} className={classes.icon_mobile}>
                                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.61348 3.65951C9.29612 3.60089 9.00465 3.80342 8.94423 4.1132C8.88381 4.42299 9.08698 4.72545 9.39571 4.78607C10.3252 4.96728 11.0429 5.68679 11.2248 6.61948V6.62015C11.2766 6.88863 11.513 7.08383 11.7852 7.08383C11.8217 7.08383 11.8582 7.0805 11.8954 7.07384C12.2042 7.01188 12.4073 6.71009 12.3469 6.39963C12.0753 5.00659 11.0031 3.93066 9.61348 3.65951Z"
                                        fill="#414141"></path>
                                    <path
                                        d="M9.57317 1.33829C9.42445 1.31698 9.27506 1.36095 9.15622 1.45555C9.03406 1.55148 8.9577 1.69005 8.94111 1.84528C8.90592 2.15906 9.13232 2.44287 9.4457 2.47818C11.6068 2.71935 13.2866 4.40286 13.5296 6.5707C13.5621 6.86117 13.8058 7.08035 14.0966 7.08035C14.1185 7.08035 14.1397 7.07902 14.1616 7.07635C14.3137 7.0597 14.4491 6.98442 14.5447 6.8645C14.6397 6.74458 14.6828 6.59535 14.6655 6.44279C14.3628 3.73798 12.2694 1.63875 9.57317 1.33829Z"
                                        fill="#414141"></path>
                                    <path d="M7.35319 8.64826C10.0126 11.3069 10.6159 8.23115 12.3091 9.92321C13.9415 11.5552 14.8798 11.8821 12.8115 13.9498C12.5525 14.158 10.9064 16.6628 5.12177 10.8798C-0.663621 5.096 1.83975 3.4483 2.04801 3.1893C4.12128 1.1159 4.44261 2.05959 6.07502 3.69155C7.76827 5.38433 4.6938 5.98961 7.35319 8.64826Z"
                                          fill="#414141"></path>
                                </svg>
                            </div>

                            <div onClick={() => HideAndShows(menuActive, setMenuActive)} className={classes.burger}>
                                <svg id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 200 128.5">
                                    <line style={menuActive ? {transform: 'translateX(90px) translateY(-90px) rotate(45deg)'} : {}} className={classes.cls_1} y1="123.5" x2="200" y2="123.5"/>
                                    <line style={menuActive ? {display: 'none'} : {}} className={classes.cls_2} y1="64.25" x2="200" y2="64.25"/>
                                    <line style={menuActive ? {transform: 'translateX(0) translateY(130px) rotate(-45deg)'} : {}} className={classes.cls_3} y1="5" x2="200" y2="5"/>
                                </svg>
                            </div>

                        </div>


                    </div>
                </div>
            </div>


            <div className={classes.menu_mobile_relative}>
                <div style={menuActive ? {transform: 'translateX(0)', opacity: 1, visibility: 'visible'} : {}} className={classes.menu_mobile}>
                    <nav>
                        <ul>
                            <li>
                                <a onClick={() => {
                                    navigate(CALCULATION_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    Рассчет стоимости
                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    navigate(PRICES_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    Цены
                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    navigate(SERVICES_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    Услуги
                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    navigate(TECHNOLOGIES_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    Технологии
                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    navigate(NEWS_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    Новости
                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    navigate(ABOUT_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    navigate(DOCUMENTS_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    Документы
                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    navigate(CONTACTS_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    Контакты
                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    navigate(REVIEWS_ROUTE)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    Отзывы
                                </a>
                            </li>

                        </ul>
                    </nav>
                </div>

                <div onClick={() => HideAndShows(menuActive, setMenuActive)} style={menuActive ? {transform: 'translateX(0)', opacity: 1, visibility: 'visible'} : {}} className={classes.menu_background_close}>

                </div>
            </div>




        </header>
    );
};

export default Header;