import React, {useState} from 'react';
import classes from "../../css/admin.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {Translate} from "../../hocks/translate";

const Modals = ({state, setState,
                    filePreview, setFilePreview,
                    filePreviewIcon, setFilePreviewIcon,
                    file, setFile, setFileName,
                    setFileIcon,
                    data,
                    dataInputs, setDataInputs,
                    nameChapter,
                    addDataUser, addDataService, addDataPrice, addDataChapterDocuments, addDataDocuments, addDataTechnology, addDataSlider, addDataNews, addDataTask, addDataToken}) => {


    // preview картики
    function previewFile(file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
            reader.onloadend = function() {
                setFilePreview(reader.result)
            }
    }
    function previewFileIcon(fileIcon) {
        let reader = new FileReader()
        reader.readAsDataURL(fileIcon)
        reader.onloadend = function() {
            setFilePreviewIcon(reader.result)
        }
    }
    // Загрузка файла
    const selectFile = e => {
        setFile(e.target.files[0])
        previewFile(e.target.files[0])
        setFileName(Translate(e.target.files[0].name))
    }
    const selectFileIcon = e => {
        setFileIcon(e.target.files[0])
        previewFileIcon(e.target.files[0])
    }
    const selectDocuments = e => {
        setFile(e.target.files[0])
        setFileName(Translate(e.target.files[0].name))
    }
    // Меняем цвет когда наводим на кнопку загрузки файла
    const DragFile = e => {
        e.preventDefault();
        e.target.style.background = '#4375f7'
    }
    // Меняем цвет когда отводим от кнопки загрузки файла
    const LeaveFile = e => {
        e.preventDefault();
        e.target.style.background = '#419152'
    }
    // Загрузка файла при DROP над кнопкой
    const DropFile = e => {
        e.preventDefault();
        setFile(e.dataTransfer.files[0])
        previewFile(e.dataTransfer.files[0])
        e.target.style.background = '#419152'
        setFileName(Translate(e.dataTransfer.files[0].name))
    }
    const DropFileIcon = e => {
        e.preventDefault();
        setFileIcon(e.dataTransfer.files[0])
        previewFileIcon(e.dataTransfer.files[0])
        e.target.style.background = '#419152'
    }
    const DropDocuments = e => {
        e.preventDefault();
        setFile(e.dataTransfer.files[0])
        e.target.style.background = '#419152'
        setFileName(Translate(e.dataTransfer.files[0].name))
    }

    return (
        <div
            style={state !== 0 ? {opacity: 1, visibility: 'visible'} : {}}
            className={classes.modals_fixed}
        >
            <div className={classes.modals_relative}>

                <div onClick={() => setState(0)} className={classes.hide_modals}></div>

                <div className={classes.modals_content}>

                    <div className={classes.modals_flex_up}>
                        <h4>
                            Добавить данные в раздел {data[0].name}
                        </h4>
                        <button onClick={() => setState(0)}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    </div>




                    {state === 1 ?
                        <div className={classes.modals_form}>

                            <div className={classes.inputs_label}>
                                <input
                                    value={dataInputs[0].title}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['title'] : e.target.value} : data))}
                                    type={'text'}
                                />
                                <label>Заголовок</label>
                            </div>
                            <div className={classes.inputs_label}>
                                <textarea
                                    value={dataInputs[0].description}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['description'] : e.target.value} : data))}
                                >
                                </textarea>
                                <label>Описание</label>
                            </div>

                            <div className={classes.inputs_file}>
                                <small style={{fontSize: '10px'}}>Размер изображения - не более 300px </small>
                                <input
                                    id={'input__file__icons'}
                                    type={'file'}
                                    // accept="image/*"
                                    onChange={(e) => selectFileIcon(e)}
                                />
                                <label
                                    draggable
                                    onDragOver={(e) => DragFile(e)}
                                    onDragLeave={(e) => LeaveFile(e)}
                                    onDrop={(e) => DropFileIcon(e)}
                                    htmlFor='input__file__icons'
                                >
                                    Выберите иконку
                                </label>
                                <div id={'gallery'} className={classes.input_file_list}>
                                    {filePreviewIcon !== null ? <img src={filePreviewIcon}/> : '' }
                                </div>
                            </div>

                            <div className={classes.inputs_file}>
                                <small style={{fontSize: '10px'}}>Размер изображения - желательно 1920px</small>
                                <input
                                    id={'input__file'}
                                    type={'file'}
                                    // accept="image/*"
                                    onChange={(e) => selectFile(e)}
                                />
                                <label
                                    draggable
                                    onDragOver={(e) => DragFile(e)}
                                    onDragLeave={(e) => LeaveFile(e)}
                                    onDrop={(e) => DropFile(e)}
                                    htmlFor='input__file'
                                >
                                    Выберите изображение
                                </label>
                                <div id={'gallery'} className={classes.input_file_list}>
                                    {filePreview !== null ? <img src={filePreview}/> : '' }
                                </div>
                            </div>

                            <div className={classes.buttons}>
                                <button onClick={addDataService} className={classes.button_blue}>Добавить</button>
                            </div>

                        </div>
                        : ''}

                    {/*Цены*/}
                    {state === 2 ?
                        <div className={classes.modals_form}>


                            <div className={classes.inputs_label}>
                                <input
                                    value={dataInputs[0].title}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['title'] : e.target.value} : data))}
                                    type={'text'}
                                />
                                <label>Заголовок</label>
                            </div>
                            <div className={classes.inputs_label}>
                                <textarea
                                    value={dataInputs[0].description}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['description'] : e.target.value} : data))}
                                >
                                </textarea>
                                <label>Описание</label>
                            </div>
                            <div className={classes.inputs_label}>
                                <input
                                    value={dataInputs[0].price}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['price'] : e.target.value} : data))}
                                    maxLength={9}
                                    type={'phone'}
                                />
                                <label>Цена</label>
                            </div>

                            <div className={classes.buttons}>
                                <button onClick={addDataPrice} className={classes.button_blue}>Добавить</button>
                            </div>

                        </div>
                        : ''}


                    {/*Документы*/}
                    {state === 3 ?
                        <div className={classes.modals_form}>

                            <div className={classes.inputs_label}>
                                <input
                                    value={dataInputs.name}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['name'] : e.target.value} : data))}
                                    type={'text'}
                                />
                                <label>Название раздела документов</label>
                            </div>

                            <div className={classes.buttons}>
                                <button onClick={addDataChapterDocuments} className={classes.button_blue}>Добавить</button>
                            </div>

                        </div>
                        : ''}

                    {/*Документы*/}
                    {state === 4 ?
                        <div className={classes.modals_form}>

                            <div className={classes.inputs_label}>
                                <select
                                    defaultValue={'default'}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['name'] : e.target.value} : data))}
                                >
                                    <option value={'default'} disabled>
                                        Выберите раздел
                                    </option>
                                    {nameChapter.map(name =>
                                            <option value={name.id} key={name.id}>
                                                {name.name}
                                            </option>
                                        )}
                                </select>
                                <label>Выберите раздел документа</label>
                            </div>

                            <div className={classes.inputs_label}>
                                <input
                                    value={dataInputs.title}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['title'] : e.target.value} : data))}
                                    type={'text'}
                                />
                                <label>Название документа</label>
                            </div>
                            <div className={classes.inputs_label}>
                                <textarea
                                    value={dataInputs.description}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['description'] : e.target.value} : data))}
                                >
                                </textarea>
                                <label>Описание</label>
                            </div>

                            <div className={classes.inputs_file}>
                                <small style={{fontSize: '10px'}}>Формат документа - (doc, docx, pdf, txt)</small>
                                <input
                                    id={'input__file'}
                                    type={'file'}
                                    onChange={(e) => selectDocuments(e)}
                                />
                                <label
                                    draggable
                                    onDragOver={(e) => DragFile(e)}
                                    onDragLeave={(e) => LeaveFile(e)}
                                    onDrop={(e) => DropDocuments(e)}
                                    htmlFor='input__file'
                                >
                                    Выберите файл
                                </label>
                                <div id={'gallery'} className={classes.input_file_list}>
                                    {file.name}
                                </div>
                            </div>

                            <div className={classes.buttons}>
                                <button onClick={addDataDocuments} className={classes.button_blue}>Добавить</button>
                            </div>

                        </div>
                        : ''}


                    {/*Технолигии*/}
                    {state === 5 ?
                        <div className={classes.modals_form}>

                            <div className={classes.inputs_label}>
                                <input
                                    value={dataInputs[0].title}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['title'] : e.target.value} : data))}
                                    type={'text'}
                                />
                                <label>Заголовок</label>
                            </div>
                            <div className={classes.inputs_label}>
                                <textarea
                                    value={dataInputs[0].description}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['description'] : e.target.value} : data))}
                                >
                                </textarea>
                                <label>Описание</label>
                            </div>

                            <div className={classes.inputs_file}>
                                <small style={{fontSize: '10px'}}>Размер изображения - желательно 1920px</small>
                                <input
                                    id={'input__file'}
                                    type={'file'}
                                    // accept="image/*"
                                    onChange={(e) => selectFile(e)}
                                />
                                <label
                                    draggable
                                    onDragOver={(e) => DragFile(e)}
                                    onDragLeave={(e) => LeaveFile(e)}
                                    onDrop={(e) => DropFile(e)}
                                    htmlFor='input__file'
                                >
                                    Выберите изображение
                                </label>
                                <div id={'gallery'} className={classes.input_file_list}>
                                    {filePreview !== null ? <img src={filePreview}/> : '' }
                                </div>
                            </div>

                            <div className={classes.buttons}>
                                <button onClick={addDataTechnology} className={classes.button_blue}>Добавить</button>
                            </div>

                        </div>
                        : ''}

                    {/*Пользователи*/}
                    {state === 6 ?
                        <div className={classes.modals_form}>

                            <div className={classes.inputs_label}>
                                <input
                                    type={'name'}
                                    value={dataInputs.name}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['name'] : e.target.value} : data))}
                                />
                                <label>Имя</label>
                            </div>

                            <div className={classes.inputs_label}>
                                <input
                                    type={'email'}
                                    value={dataInputs.email}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['email'] : e.target.value} : data))}
                                />
                                <label>Email</label>
                            </div>

                            <div className={classes.inputs_label}>
                                <input
                                    type={'password'}
                                    value={dataInputs.password}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['password'] : e.target.value} : data))}
                                />
                                <label>Пароль</label>
                            </div>

                            <div className={classes.inputs_label}>
                                <select
                                    defaultValue={'default'}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['role'] : e.target.value} : data))}
                                >
                                    <option value={'default'} disabled>
                                        Выберите роль
                                    </option>
                                    <option value={'ADMIN'}>
                                        Администратор
                                    </option>
                                    <option value={'MANAGER'}>
                                        Менеджер
                                    </option>
                                </select>
                                <label>Выберите роль</label>
                            </div>

                            <div className={classes.buttons}>
                                <button onClick={addDataUser} className={classes.button_blue}>Добавить</button>
                            </div>

                        </div>
                        : ''}

                    {/*Слайдер*/}
                    {state === 7 ?
                        <div className={classes.modals_form}>

                            <div className={classes.inputs_label}>
                                <input
                                    value={dataInputs[0].title}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['title'] : e.target.value} : data))}
                                    type={'text'}
                                />
                                <label>Заголовок</label>
                            </div>
                            <div className={classes.inputs_label}>
                                <textarea
                                    value={dataInputs[0].description}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['description'] : e.target.value} : data))}
                                >
                                </textarea>
                                <label>Описание</label>
                            </div>

                            <div className={classes.inputs_file}>
                                <small style={{fontSize: '10px'}}>Соотношение сторон изображения - 4:3</small>
                                <input
                                    id={'input__file'}
                                    type={'file'}
                                    // accept="image/*"
                                    onChange={(e) => selectFile(e)}
                                />
                                <label
                                    draggable
                                    onDragOver={(e) => DragFile(e)}
                                    onDragLeave={(e) => LeaveFile(e)}
                                    onDrop={(e) => DropFile(e)}
                                    htmlFor='input__file'
                                >
                                    Выберите изображение
                                </label>
                                <div id={'gallery'} className={classes.input_file_list}>
                                    {filePreview !== null ? <img src={filePreview}/> : '' }
                                </div>
                            </div>

                            <div className={classes.buttons}>
                                <button onClick={addDataSlider} className={classes.button_blue}>Добавить</button>
                            </div>

                        </div>
                        : ''}

                    {/*Новости*/}
                    {state === 8 ?
                        <div className={classes.modals_form}>

                            <div className={classes.inputs_label}>
                                <input
                                    value={dataInputs[0].title}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['title'] : e.target.value} : data))}
                                    type={'text'}
                                />
                                <label>Заголовок</label>
                            </div>
                            <div className={classes.inputs_label}>
                                <textarea
                                    value={dataInputs[0].min_description}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['min_description'] : e.target.value} : data))}
                                >
                                </textarea>
                                <label>Короткое описание</label>
                            </div>
                            <div className={classes.inputs_label}>
                                <textarea
                                    value={dataInputs[0].description}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['description'] : e.target.value} : data))}
                                >
                                </textarea>
                                <label>Описание</label>
                            </div>

                            <div className={classes.inputs_file}>
                                <small style={{fontSize: '10px'}}>Размер изображения - желательно 1920px</small>
                                <input
                                    id={'input__file'}
                                    type={'file'}
                                    // accept="image/*"
                                    onChange={(e) => selectFile(e)}
                                />
                                <label
                                    draggable
                                    onDragOver={(e) => DragFile(e)}
                                    onDragLeave={(e) => LeaveFile(e)}
                                    onDrop={(e) => DropFile(e)}
                                    htmlFor='input__file'
                                >
                                    Выберите изображение
                                </label>
                                <div id={'gallery'} className={classes.input_file_list}>
                                    {filePreview !== null ? <img src={filePreview}/> : '' }
                                </div>
                            </div>

                            <div className={classes.buttons}>
                                <button onClick={addDataNews} className={classes.button_blue}>Добавить</button>
                            </div>

                        </div>
                        : ''}

                    {/*Сообщение*/}
                    {state === 9 ?
                        <div className={classes.modals_form}>

                            <div className={classes.inputs_label}>
                                <input
                                    value={dataInputs[0].title}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['title'] : e.target.value} : data))}
                                    type={'text'}
                                />
                                <label>Тема</label>
                            </div>

                            <div className={classes.inputs_label}>
                                <textarea
                                    value={dataInputs[0].description}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['description'] : e.target.value} : data))}
                                >
                                </textarea>
                                <label>Сообщение</label>
                            </div>

                            <div className={classes.buttons}>
                                <button onClick={() => addDataTask()} className={classes.button_blue}>Добавить</button>
                            </div>

                        </div>
                        : ''}


                    {/*Token*/}
                    {state === 10 ?
                        <div className={classes.modals_form}>

                            <div className={classes.inputs_label}>
                                <textarea
                                    value={dataInputs[0].title}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['title'] : e.target.value} : data))}
                                >
                                </textarea>
                                <label>ACCESS</label>
                            </div>

                            <div className={classes.inputs_label}>
                                <textarea
                                    value={dataInputs[0].description}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['description'] : e.target.value} : data))}
                                >
                                </textarea>
                                <label>REFRESH</label>
                            </div>

                            <div className={classes.inputs_label}>
                                <input
                                    value={dataInputs[0].name}
                                    onChange={(e) => setDataInputs(dataInputs.map(data => data.name !== 'null' ? {...data, ['name'] : e.target.value} : data))}
                                />
                                <label>SECRET KEY</label>
                            </div>

                            <div className={classes.buttons}>
                                <button onClick={() => addDataToken()} className={classes.button_blue}>Добавить</button>
                            </div>

                        </div>
                        : ''}



                </div>
            </div>
        </div>
    );
};

export default Modals;