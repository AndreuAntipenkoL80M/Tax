import React from 'react';
import ReactDOM from 'react-dom/client';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import './basic.css';



function CreateReq() {
    const newReq = useFormik({
        initialValues: {
            positionName: "",
            vacancy: "",
            department: "",
            openDate: "",
            plannedCloseDate: "",
            sex: "",
            education: "Высшее",
            salary: "",
            salaryFrom: "",
            salaryTo: "",
            region: "",
            adress: "",
            station: "",
            experience: "",
            timetable: "Полная занятость",
            typeOfEmployment: "",
            functionalResponsibilities: "",
            wishes: "",
            advantages: "",
            additionalOfferings: "",
            
        }, validationSchema: Yup.object({
            positionName: Yup.string(),
            vacancy: Yup.string().required('Укажите наименование'),
            department: Yup.string().required('Укажите отдел'),
            openDate: Yup.date().required('Выберете дату открытия'),
            plannedCloseDate: Yup.date().required('Выберете дату закрытия'),
            sex: Yup.string().required('Выберете пол'),
            education: Yup.string().required('Укажите образовние'),
            salary: Yup.string(),
            salaryFrom: Yup.number().positive('Введите положительное число'),
            salaryTo: Yup.number().when('salaryFrom', (salaryFrom, Schema) => {return salaryFrom!="" ? Schema.min(salaryFrom) : Schema.min(0)},"rfrf"),
            region: Yup.string().required('Укажите регион'),
            adress: Yup.string().required('Введите полный адрес'),
            station: Yup.string(),
            experience: Yup.string().required('Укажите необходимый опыт работы'),
            timetable: Yup.string().required('Укажите график'),
            typeOfEmployment: Yup.string().required('Выбирите тип занятости'),
            functionalResponsibilities: Yup.string(),
            wishes: Yup.string(),
            advantages: Yup.string(),
            additionalOfferings: Yup.string(),
        }),
        onSubmit: values =>
            //fetch('http://localhost:5000/test',
        fetch('https://andreuantipenkol80m.github.io/Tax/test.json/test',
                {method:"Post",
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(values),
                }
            )
                .then(
                    function(response) {
                    console.log(response);
                    return response.json();
                    
                })
                .then(data => {console.log(data)}
                )
    })

    return (
    <div style={{placeContent:'center'}}>
        <h1>Форма размещения заявки</h1>
        <form onSubmit={newReq.handleSubmit}>
            <div className='unificFields'>
                <div className='inputFields'>
                <label> Наименование должности <br/>
                <input
                    id="positionName"
                    name="positionName"
                    type="text"
                    onChange={newReq.handleChange}
                    value={newReq.values.positionName}
                />
                {newReq.touched.positionName && newReq.errors.positionName ? (
                <div>{newReq.errors.positionName}</div>
                ) : null}
            </label></div>

            

            <div className='inputFields'><label >Наименование вакансии <br/>
                <input
                    id="vacancy"
                    name="vacancy"
                    type="text"
                    onChange={newReq.handleChange}
                    value={newReq.values.vacancy}
                />
                {newReq.touched.vacancy && newReq.errors.vacancy ? (
                <div>{newReq.errors.vacancy}</div>
                ) : null}
                
            </label></div>

            <div className='inputFields'><label>Отдел <br/>
                <input
                    id="department"
                    name="department"
                    type="text"
                    onChange={newReq.handleChange}
                    value={newReq.values.department}
                />
                {newReq.touched.department && newReq.errors.department ? (
                <div>{newReq.errors.department}</div>
                ) : null}
            </label></div>
            <div className='inputFields'><label>Дата открытия <br/>
                <input
                    id="openDate"
                    name="openDate"
                    type="date"
                    onChange={newReq.handleChange}
                    value={newReq.values.openDate}
                />
                {newReq.touched.openDate && newReq.errors.openDate ? (
                <div>{newReq.errors.openDate}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label>Плановая дата закрытия<br/>
                <input
                    id="plannedCloseDate"
                    name="plannedCloseDate"
                    type="date"
                    onChange={newReq.handleChange}
                    value={newReq.values.plannedCloseDate}
                />
                {newReq.touched.plannedCloseDate && newReq.errors.plannedCloseDate ? (
                <div>{newReq.errors.plannedCloseDate}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label name="sex">Пол <br/>
                <input type="radio" name="sex" onChange={newReq.handleChange} value='Мужской'></input>
                <label>Мужской</label><br/>
                <input type="radio" name="sex" onChange={newReq.handleChange} value='Женский'></input>
                <label>Женский</label>
                {newReq.touched.sex && newReq.errors.sex ? (
                <div>{newReq.errors.sex}</div>
                ) : null}
            </label></div>
                
            <div className='inputFields'><label>Образование 
                <select value={newReq.values.education} onChange={newReq.handleChange} name='education' id="education">
                    <option defaultValue value={"Высшее"}>Высшее</option>
                    <option value={"Среднее"}>Среднее</option>
                </select>
                {newReq.touched.education && newReq.errors.education ? (
                <div>{newReq.errors.education}</div>
                ) : null}
            </label></div>
            </div><br/>




        <div className='unificFields'>
            <div className='inputFields'><label>Зарплата
                <input type="radio" name="salary"  onChange={newReq.handleChange} value='На руки'></input>
                <label>На руки</label>
                <input type="radio" name="salary"  onChange={newReq.handleChange} value='До вычета налогов'></input>
                <label>До вычета налогов</label>
                {newReq.touched.salary && newReq.errors.salary ? (
                <div>{newReq.errors.salary}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label>От
            <input
                    id="salaryFrom"
                    name="salaryFrom"
                    type="number"
                    onChange={newReq.handleChange}
                    value={newReq.values.salaryFrom}
                />
                {newReq.touched.salaryFrom && newReq.errors.salaryFrom ? (
                <div>{newReq.errors.salaryFrom}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label>До
                <input
                    id="salaryTo"
                    name="salaryTo"
                    type="number"
                    onChange={newReq.handleChange}
                    value={newReq.values.salaryTo}
                />
                {newReq.touched.salaryTo && newReq.errors.salaryTo ? (
                <div>{newReq.errors.salaryTo}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label>Регион
                <input
                    id="region"
                    name="region"
                    type="text"
                    onChange={newReq.handleChange}
                    value={newReq.values.region}
                />
                {newReq.touched.region && newReq.errors.region ? (
                <div>{newReq.errors.region}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label>Адрес
                <input
                    id="adress"
                    name="adress"
                    type="text"
                    onChange={newReq.handleChange}
                    value={newReq.values.adress}
                />
                {newReq.touched.adress && newReq.errors.adress ? (
                <div>{newReq.errors.adress}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label>Станция метро, МЦД
                <input
                    id="station"
                    name="station"
                    type="text"
                    onChange={newReq.handleChange}
                    value={newReq.values.station}
                />
                {newReq.touched.station && newReq.errors.station ? (
                <div>{newReq.errors.station}</div>
                ) : null}
            </label></div>
    

            <div className='inputFields'><label>Опыт работы
                <input
                    id="experience"
                    name="experience"
                    type="text"
                    onChange={newReq.handleChange}
                    value={newReq.values.experience}
                />
                {newReq.touched.experience && newReq.errors.experience ? (
                <div>{newReq.errors.experience}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label>График работы
                <select value={newReq.values.timetable} onChange={newReq.handleChange} id="timetable" name="timetable">
                    <option defaultValue value={"Полная занятость"}>Полная занятость</option>
                    <option value={"Сменный 5/2"}>Сменный 5/2</option>
                    <option value={"Сменный 2/2"}>Сменный 2/2</option>
                </select>
                {newReq.touched.timetable && newReq.errors.timetable ? (
                <div>{newReq.errors.timetable}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label>Тип занятости <br/>
                <input type="radio" name="typeOfEmployment"  onChange={newReq.handleChange} value="Полная Занятость"></input>
                <label>Полная занятость</label>
                <input type="radio" name="typeOfEmployment"  onChange={newReq.handleChange} value="Частичная занятость"></input>
                <label>Частичная занятость</label>
                <input type="radio" name="typeOfEmployment" onChange={newReq.handleChange} value="Стажировка"></input>
                <label>Стажировка</label>
                {newReq.touched.typeOfEmployment && newReq.errors.typeOfEmployment ? (
                <div>{newReq.errors.typeOfEmployment}</div>
                ) : null}
            </label></div>
            </div>



            <div className='unificFields'><br/>
            <label>Функциональные обязанности
                <textarea                    
                    id="functionalResponsibilities"
                    name="functionalResponsibilities"
                    onChange={newReq.handleChange}
                    value={newReq.values.functionalResponsibilities}></textarea>
                {newReq.touched.functionalResponsibilities && newReq.errors.functionalResponsibilities ? (
                <div>{newReq.errors.functionalResponsibilities}</div>
                ) : null}
            </label><br/>

            <label>Пожелания к кандидату
                <textarea                    
                    id="wishes"
                    name="wishes"
                    onChange={newReq.handleChange}
                    value={newReq.values.wishes}></textarea>
                {newReq.touched.wishes && newReq.errors.wishes ? (
                <div>{newReq.errors.wishes}</div>
                ) : null}
            </label><br/>

            <label>Преимуществом будет
                <textarea
                    id="advantages"
                    name="advantages"
                    onChange={newReq.handleChange}
                    value={newReq.values.advantages}></textarea>
                {newReq.touched.advantages && newReq.errors.advantages ? (
                <div>{newReq.errors.advantages}</div>
                ) : null}
            </label><br/>

            <label>Мы предлагаем
                <textarea
                    id="additionalOfferings"
                    name="additionalOfferings"
                    onChange={newReq.handleChange}
                    value={newReq.values.additionalOfferings}></textarea>
                {newReq.touched.additionalOfferings && newReq.errors.additionalOfferings ? (
                <div>{newReq.errors.additionalOfferings}</div>
                ) : null}
            </label>
            <input onClick={console.log(newReq.values)} type='submit'></input>
            </div>
        </form>
    </div>
    )
}

export default CreateReq;