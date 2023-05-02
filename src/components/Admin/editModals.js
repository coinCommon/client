import React from 'react';
import classes from "../../css/admin.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

const EditModals = ({edit, setEdit, dataEdit, setDataEdit, SaveData}) => {

    return (
        <div
            style={edit !== 0 ? {opacity: 1, visibility: 'visible'} : {}}
            className={classes.modals_fixed}
        >
            <div className={classes.modals_relative}>

                <div onClick={() => setEdit(0)} className={classes.hide_modals}></div>

                <div className={classes.modals_content}>

                    <div className={classes.modals_flex_up}>
                        <h4>
                            Редактор данных
                        </h4>
                        <button onClick={() => setEdit(0)}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    </div>


                    <div className={classes.modals_form}>

                        {Object.keys(dataEdit[0]).map((data,index) =>

                        // data === 'id' ||
                        // data === 'img' ||
                        // data === 'icon' ||
                        // data === 'chapter' ||
                        // data === 'file' ||
                        // data === 'documentsTypeId' ||
                        // data === 'createdAt' ||
                        // data === 'updatedAt' ?
                        //     ''
                        //     :
                        //     <div key={index} className={classes.inputs_label}>
                        //     <textarea
                        //         value={Object.values(dataEdit[0])[index]}
                        //         onChange={(e) => setDataEdit(dataEdit.map(d => d.title !== false ? {...d, [data] : e.target.value} : d))}
                        //     >
                        //     </textarea>
                        //         <label>{data}</label>
                        //     </div>

                                data === 'title' ||
                                data === 'description' ||
                                data === 'min_description' ||
                                data === 'name' ||
                                data === 'price' ?

                                    <div key={index} className={classes.inputs_label}>
                                        <textarea
                                            value={Object.values(dataEdit[0])[index]}
                                            onChange={(e) => setDataEdit(dataEdit.map(d => d.title !== false ? {...d, [data] : e.target.value} : d))}
                                        >
                                        </textarea>
                                        <label>{data}</label>
                                    </div>

                                    :
                                    ''


                        )}


                        <div className={classes.buttons}>
                            <button onClick={() => SaveData()} className={classes.button_blue}>Сохранить</button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default EditModals;