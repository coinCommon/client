import React from 'react';
import classes from "../../css/admin.module.scss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrashCan, faEnvelopeOpen, faComment} from "@fortawesome/free-solid-svg-icons";


import {deleteOneUser} from "../../http/userAPI";
import {deleteOneServices, editOneServices, fetchOneServices} from "../../http/servicesAPI";
import {deleteOnePrices, editOnePrices, fetchOnePrices} from "../../http/pricesAPI";
import {
    deleteOneChapterDocuments,
    editOneChapterDocuments,
    fetchOneChapterDocuments
} from "../../http/chapterDocumentsAPI";
import {deleteOneDocuments, editOneDocuments, fetchOneDocuments} from "../../http/documentsAPI";
import {deleteOneTechnologies, editOneTechnologies, fetchOneTechnologies} from "../../http/technologiesAPI";
import {deleteOneSliders, editOneSliders, fetchOneSliders} from "../../http/slidersAPI";
import {deleteOneNews, editOneNews, fetchOneNews} from "../../http/newsAPI";
import LoaderRelative from "../Link/loaderRelative";
import {deleteOneTask} from "../../http/taskAPI";
import {Translate} from "../../hocks/translate";

const Data = ({OneMessage, GetOneTask, stateData, setStateData, dataDb, DeleteData, getDataForEditing}) => {
    return (
        <div className={classes.admin_data_back}>

            {stateData === 0 ?
                <LoaderRelative/>
                : ''}


            {stateData === 1 ?

            dataDb.map(m =>
                <div key={m.id} className={classes.admin_data_border}>
                    <div className={classes.admin_data_action}>
                        <button
                            disabled={m.role === 'ADMIN' ? true : ''}
                            style={m.role === 'ADMIN' ? {opacity: '0', visibility: 'hidden'} : {}}
                            className={classes.button_delete}
                            onClick={() => DeleteData(deleteOneServices, m.id, [m.img, m.icon])}
                        >
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                        <button onClick={() => getDataForEditing(fetchOneServices, editOneServices, Translate(m.title), m.id)} className={classes.button_edit}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                    </div>
                    <div style={{gridTemplateColumns: '1fr 1fr 1fr 1fr'}} className={classes.admin_data_flex}>
                        <div className={classes.child}>
                            Имя <span>{m.title}</span>
                        </div>
                        <div className={classes.child}>
                            Описание <span>{m.description}</span>
                        </div>
                        <div className={classes.child_img}>
                            <img src={process.env.REACT_APP_API_URL + m.icon}/>
                        </div>
                        <div className={classes.child_img}>
                            <img src={process.env.REACT_APP_API_URL + m.img}/>
                        </div>
                    </div>
                </div>
            )
                : ''}

            {stateData === 2 ?

                dataDb.map(m =>
                    <div key={m.id} className={classes.admin_data_border}>
                        <div className={classes.admin_data_action}>
                            <button
                                className={classes.button_delete}
                                onClick={() => DeleteData(deleteOnePrices, m.id)}
                            >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                            <button onClick={() => getDataForEditing(fetchOnePrices, editOnePrices, null, m.id)} className={classes.button_edit}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                        </div>

                        <div className={classes.admin_data_flex}>
                            <div className={classes.child}>
                                Имя <span>{m.title}</span>
                            </div>
                            <div className={classes.child}>
                                Описание <span>{m.description}</span>
                            </div>
                            <div className={classes.child_img}>
                                Цена <span>{m.price}</span>
                            </div>
                        </div>
                    </div>
                )
                : ''}

            {stateData === 3 ?

                dataDb.map(m =>
                    <div key={m.id} className={classes.admin_data_border}>
                        <div className={classes.admin_data_action}>
                            <button
                                className={classes.button_delete}
                                onClick={() => DeleteData(deleteOneChapterDocuments, m.id)}
                            >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                            <button onClick={() => getDataForEditing(fetchOneChapterDocuments, editOneChapterDocuments, null, m.id)}
                                    className={classes.button_edit}
                            >
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                        </div>

                        <div style={{gridTemplateColumns: '1fr 1fr'}} className={classes.admin_data_flex}>
                            <div className={classes.child}>
                                ID <span>{m.id}</span>
                            </div>
                            <div className={classes.child}>
                                Имя раздела <span>{m.name}</span>
                            </div>
                        </div>
                    </div>
                )
                : ''}

            {stateData === 4 ?

                dataDb.map(m =>
                    <div key={m.id} className={classes.admin_data_border}>
                        <div className={classes.admin_data_action}>
                            <button
                                className={classes.button_delete}
                                onClick={() => DeleteData(deleteOneDocuments, m.id, [m.file])}
                            >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                            <button
                                onClick={() => getDataForEditing(fetchOneDocuments, editOneDocuments, null, m.id)}
                                className={classes.button_edit}
                            >
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                        </div>

                        <div style={{gridTemplateColumns: '1fr 1fr 1fr'}} className={classes.admin_data_flex}>
                            <div className={classes.child}>
                                Раздел <span>{m.chapter}</span>
                            </div>
                            <div className={classes.child}>
                                Имя <span>{m.title}</span>
                            </div>
                            <div className={classes.child}>
                                Описание <span>{m.description}</span>
                            </div>
                        </div>
                    </div>
                )
                : ''}

            {stateData === 5 ?

                dataDb.map(m =>
                    <div key={m.id} className={classes.admin_data_border}>
                        <div className={classes.admin_data_action}>
                            <button
                                className={classes.button_delete}
                                onClick={() => DeleteData(deleteOneTechnologies, m.id, [m.img])}
                            >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                            <button
                                onClick={() => getDataForEditing(fetchOneTechnologies, editOneTechnologies, Translate(m.title), m.id)}
                                className={classes.button_edit}
                            >
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                        </div>

                        <div className={classes.admin_data_flex}>
                            <div className={classes.child}>
                                Заголовок <span>{m.title}</span>
                            </div>
                            <div className={classes.child}>
                                Описание <span>{m.description}</span>
                            </div>
                            <div className={classes.child_img}>
                                <img src={process.env.REACT_APP_API_URL + m.img}/>
                            </div>
                        </div>
                    </div>
                )
                : ''}

            {stateData === 6 ?

            dataDb.map(m =>
                <div key={m.id} className={classes.admin_data_border}>
                    <div className={classes.admin_data_action}>
                        <button
                            disabled={m.role === 'ADMIN' ? true : ''}
                            style={m.role === 'ADMIN' ? {opacity: '0', visibility: 'hidden'} : {}}
                            className={classes.button_delete}
                            onClick={() => DeleteData(deleteOneUser, m.id)}
                        >
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>

                        <button onClick={() => OneMessage(m.id)} className={classes.button_message}>
                            <FontAwesomeIcon icon={faEnvelopeOpen} />
                        </button>
                        <button onClick={() => GetOneTask(m.id)} className={classes.button_message}>
                            <FontAwesomeIcon icon={faComment} /> +
                        </button>

                        {/*<button className={classes.button_edit}>*/}
                        {/*    <FontAwesomeIcon icon={faPenToSquare} />*/}
                        {/*</button>*/}
                    </div>
                    <div className={classes.admin_data_flex}>
                        <div className={classes.child}>
                            Имя <span>{m.name}</span>
                        </div>
                        <div className={classes.child}>
                            Email <span>{m.email}</span>
                        </div>
                        <div className={classes.child}>
                            Роль <span style={m.role === 'ADMIN' ? {color: '#53eb9d'} : {}}>{m.role}</span>
                        </div>
                    </div>
                </div>
            )

                : ''}

            {stateData === 7 ?

                dataDb.map(m =>
                    <div key={m.id} className={classes.admin_data_border}>
                        <div className={classes.admin_data_action}>
                            <button
                                className={classes.button_delete}
                                onClick={() => DeleteData(deleteOneSliders, m.id, [m.img])}
                            >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                            <button
                                onClick={() => getDataForEditing(fetchOneSliders, editOneSliders, null, m.id)}
                                className={classes.button_edit}
                            >
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                        </div>

                        <div className={classes.admin_data_flex}>
                            <div className={classes.child}>
                                Заголовок <span>{m.title}</span>
                            </div>
                            <div className={classes.child}>
                                Описание <span>{m.description}</span>
                            </div>
                            <div className={classes.child_img}>
                                <img src={process.env.REACT_APP_API_URL + m.img}/>
                            </div>
                        </div>
                    </div>
                )
                : ''}

            {stateData === 8 ?
                dataDb.map(m =>
                    <div key={m.id} className={classes.admin_data_border}>
                        <div className={classes.admin_data_action}>
                            <button
                                className={classes.button_delete}
                                onClick={() => DeleteData(deleteOneNews, m.id, [m.img])}
                            >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                            <button
                                onClick={() => getDataForEditing(fetchOneNews, editOneNews, Translate(m.title), m.id)}
                                className={classes.button_edit}
                            >
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                        </div>

                        <div style={{gridTemplateColumns: '1fr 1fr 1fr 1fr'}} className={classes.admin_data_flex}>
                            <div className={classes.child}>
                                Заголовок <span>{m.title}</span>
                            </div>
                            <div className={classes.child}>
                                Короткое описание <span>{m.min_description}</span>
                            </div>
                            <div className={classes.child}>
                                Описание <span>{m.description}</span>
                            </div>
                            <div className={classes.child_img}>
                                <img src={process.env.REACT_APP_API_URL + m.img}/>
                            </div>
                        </div>
                    </div>
                )
                : ''}


            {stateData === 9 ?
                dataDb.map(m =>
                    <div style={m.status === 'WORK' ? {background: 'lightsalmon'} : {background: 'lightskyblue'}} key={m.id} className={classes.admin_data_border}>
                        <div className={classes.admin_data_action}>
                            <button
                                className={classes.button_delete}
                                onClick={() => DeleteData(deleteOneTask, m.id)}
                            >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                            <button className={classes.button_edit}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                        </div>

                        <div style={{gridTemplateColumns: '1fr 3fr 1fr'}} className={classes.admin_data_flex}>
                            <div style={{height: 'auto'}} className={classes.child}>
                                Тема <span>{m.topic}</span>
                            </div>
                            <div style={{height: 'auto'}} className={classes.child}>
                                Сообщение <span>{m.message}</span>
                            </div>
                            <div style={{height: 'auto'}} className={classes.child}>
                                Статус <span>{m.status}</span>
                            </div>
                        </div>
                    </div>
                )
                : ''}


            {stateData === 10 ?
                dataDb.map(m =>
                    <div style={m.status === 'WORK' ? {background: 'lightsalmon'} : {background: 'lightskyblue'}} key={m.id} className={classes.admin_data_border}>
                        <div className={classes.admin_data_action}>
                            <button
                                className={classes.button_delete}
                                onClick={() => DeleteData(deleteOneTask, m.id)}
                            >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                            <button className={classes.button_edit}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                        </div>

                        <div style={{gridTemplateColumns: '2fr 3fr 1fr'}} className={classes.admin_data_flex}>
                            <div style={{height: 'auto'}} className={classes.child}>
                                Тема <span>{m.topic}</span>
                            </div>
                            <div style={{height: 'auto'}} className={classes.child}>
                                Сообщение <span>{m.message}</span>
                            </div>
                            <div style={{height: 'auto'}} className={classes.child}>
                                Статус <span>{m.status}</span>
                            </div>
                        </div>
                    </div>
                )
                : ''}



        </div>
    );
};

export default Data;