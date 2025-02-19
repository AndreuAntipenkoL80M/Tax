import React from 'react';
import ReactDOM from 'react-dom/client';
import {reqVault} from './layout.js'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import './basic.css';


function EditReq () {
    let params = useParams()
    
    const reqList = useContext(reqVault);
    var subj ={}
    reqList.map((req)=>{if (req.id==params.id) {subj = req} })
        console.log()

    const changeReq = useFormik({
        initialValues: {
            positionName: subj.positionName,
            vacancy: subj.vacancy,
            department: subj.department,
            openDate: subj.openDate,
            plannedCloseDate: subj.plannedCloseDate,
            sex: subj.sex,
            education: subj.education,
            salary: subj.salary,
            salaryFrom: subj.salaryFrom,
            salaryTo: subj.salaryTo,
            region: subj.region,
            adress: subj.adress,
            station: subj.station,
            experience: subj.experience,
            timetable: subj.timetable,
            typeOfEmployment: subj.typeOfEmployment,
            functionalResponsibilities: subj.functionalResponsibilities,
            wishes: subj.wishes,
            advantages: subj.advantages,
            additionalOfferings: subj.additionalOfferings,
            
        }, validationSchema: Yup.object({
            positionName: Yup.string(),
            vacancy: Yup.string().required('Укажите наименование'),
            department: Yup.string().required('Required'),
            openDate: Yup.date().required('Required'),
            plannedCloseDate: Yup.date().required('Required'),
            sex: Yup.string().required('Required'),
            education: Yup.string().required('Required'),
            salary: Yup.string(),
            salaryFrom: Yup.number(),
            salaryTo: Yup.number(),
            region: Yup.string().required('Required'),
            adress: Yup.string().required('Required'),
            station: Yup.string().required('Required'),
            experience: Yup.string().required('Required'),
            timetable: Yup.string().required('Required'),
            typeOfEmployment: Yup.string().required('Required'),
            functionalResponsibilities: Yup.string(),
            wishes: Yup.string(),
            advantages: Yup.string(),
            additionalOfferings: Yup.string(),
        }),
        onSubmit: values => 
            {values.id = subj.id;
                fetch(`https://andreuantipenkol80m.github.io/Tax/test.json/test/${subj.id}`,
            //fetch(`http://localhost:5000/test/${subj.id}`,
                {method:"PUT",
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
            }
    })






    return(
    <div style={{placeContent:'center'}}>
        <h1>Форма размещения заявки</h1>
        <form onSubmit={changeReq.handleSubmit}>
            <div className='unificFields'>
                <div className='inputFields'>
                <label> Наименование должности <br/>
                <input
                    id="positionName"
                    name="positionName"
                    type="text"
                    onChange={changeReq.handleChange}
                    value={changeReq.values.positionName}
                />
                {changeReq.touched.positionName && changeReq.errors.positionName ? (
                <div>{changeReq.errors.positionName}</div>
                ) : null}
            </label></div>

            

            <div className='inputFields'><label >Наименование вакансии <br/>
                <input
                    id="vacancy"
                    name="vacancy"
                    type="text"
                    onChange={changeReq.handleChange}
                    value={changeReq.values.vacancy}
                />
                {changeReq.touched.vacancy && changeReq.errors.vacancy ? (
                <div>{changeReq.errors.vacancy}</div>
                ) : null}
                
            </label></div>

            <div className='inputFields'><label>Отдел <br/>
                <input
                    id="department"
                    name="department"
                    type="text"
                    onChange={changeReq.handleChange}
                    value={changeReq.values.department}
                />
                {changeReq.touched.department && changeReq.errors.department ? (
                <div>{changeReq.errors.department}</div>
                ) : null}
            </label></div>
            <div className='inputFields'><label>Дата открытия <br/>
                <input
                    id="openDate"
                    name="openDate"
                    type="date"
                    onChange={changeReq.handleChange}
                    value={changeReq.values.openDate}
                />
                {changeReq.touched.openDate && changeReq.errors.openDate ? (
                <div>{changeReq.errors.openDate}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label>Плановая дата закрытия<br/>
                <input
                    id="plannedCloseDate"
                    name="plannedCloseDate"
                    type="date"
                    onChange={changeReq.handleChange}
                    value={changeReq.values.plannedCloseDate}
                />
                {changeReq.touched.plannedCloseDate && changeReq.errors.plannedCloseDate ? (
                <div>{changeReq.errors.plannedCloseDate}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label name="sex">Пол <br/>
                <input type="radio" name="sex" onChange={changeReq.handleChange} value='Мужской'></input>
                <label>Мужской</label><br/>
                <input type="radio" name="sex" onChange={changeReq.handleChange} value='Женский'></input>
                <label>Женский</label>
                {changeReq.touched.sex && changeReq.errors.sex ? (
                <div>{changeReq.errors.sex}</div>
                ) : null}
            </label></div>
                
            <div className='inputFields'><label>Образование 
                <select value={changeReq.values.education} onChange={changeReq.handleChange} name='education' id="education">
                    <option defaultValue value={"Высшее"}>Высшее</option>
                    <option value={"Среднее"}>Среднее</option>
                </select>
                {changeReq.touched.education && changeReq.errors.education ? (
                <div>{changeReq.errors.education}</div>
                ) : null}
            </label></div>
            </div><br/>




        <div className='unificFields'>
            <div className='inputFields'><label>Зарплата
                <input type="radio" name="salary"  onChange={changeReq.handleChange} value='На руки'></input>
                <label>На руки</label>
                <input type="radio" name="salary"  onChange={changeReq.handleChange} value='До вычета налогов'></input>
                <label>До вычета налогов</label>
                {changeReq.touched.salary && changeReq.errors.salary ? (
                <div>{changeReq.errors.salary}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label>От
            <input
                    id="salaryFrom"
                    name="salaryFrom"
                    type="number"
                    onChange={changeReq.handleChange}
                    value={changeReq.values.salaryFrom}
                />
                {changeReq.touched.salaryFrom && changeReq.errors.salaryFrom ? (
                <div>{changeReq.errors.salaryFrom}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label>До
                <input
                    id="salaryTo"
                    name="salaryTo"
                    type="number"
                    onChange={changeReq.handleChange}
                    value={changeReq.values.salaryTo}
                />
                {changeReq.touched.salaryTo && changeReq.errors.salaryTo ? (
                <div>{changeReq.errors.salaryTo}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label>Регион
                <input
                    id="region"
                    name="region"
                    type="text"
                    onChange={changeReq.handleChange}
                    value={changeReq.values.region}
                />
                {changeReq.touched.region && changeReq.errors.region ? (
                <div>{changeReq.errors.region}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label>Адрес
                <input
                    id="adress"
                    name="adress"
                    type="text"
                    onChange={changeReq.handleChange}
                    value={changeReq.values.adress}
                />
                {changeReq.touched.adress && changeReq.errors.adress ? (
                <div>{changeReq.errors.adress}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label>Станция метро, МЦД
                <input
                    id="station"
                    name="station"
                    type="text"
                    onChange={changeReq.handleChange}
                    value={changeReq.values.station}
                />
                {changeReq.touched.station && changeReq.errors.station ? (
                <div>{changeReq.errors.station}</div>
                ) : null}
            </label></div>
    

            <div className='inputFields'><label>Опыт работы
                <input
                    id="experience"
                    name="experience"
                    type="text"
                    onChange={changeReq.handleChange}
                    value={changeReq.values.experience}
                />
                {changeReq.touched.experience && changeReq.errors.experience ? (
                <div>{changeReq.errors.experience}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label>График работы
                <select value={changeReq.values.timetable} onChange={changeReq.handleChange} id="timetable" name="timetable">
                    <option defaultValue value={"Полная занятость"}>Полная занятость</option>
                    <option value={"Сменный 5/2"}>Сменный 5/2</option>
                    <option value={"Сменный 2/2"}>Сменный 2/2</option>
                </select>
                {changeReq.touched.timetable && changeReq.errors.timetable ? (
                <div>{changeReq.errors.timetable}</div>
                ) : null}
            </label></div>

            <div className='inputFields'><label>Тип занятости <br/>
                <input type="radio" name="typeOfEmployment"  onChange={changeReq.handleChange} value="Полная Занятость"></input>
                <label>Полная занятость</label>
                <input type="radio" name="typeOfEmployment"  onChange={changeReq.handleChange} value="Частичная занятость"></input>
                <label>Частичная занятость</label>
                <input type="radio" name="typeOfEmployment" onChange={changeReq.handleChange} value="Стажировка"></input>
                <label>Стажировка</label>
                {changeReq.touched.typeOfEmployment && changeReq.errors.typeOfEmployment ? (
                <div>{changeReq.errors.typeOfEmployment}</div>
                ) : null}
            </label></div>
            </div>



            <div className='unificFields'><br/>
            <label>Функциональные обязанности
                <textarea                    
                    id="functionalResponsibilities"
                    name="functionalResponsibilities"
                    onChange={changeReq.handleChange}
                    value={changeReq.values.functionalResponsibilities}></textarea>
                {changeReq.touched.functionalResponsibilities && changeReq.errors.functionalResponsibilities ? (
                <div>{changeReq.errors.functionalResponsibilities}</div>
                ) : null}
            </label><br/>

            <label>Пожелания к кандидату
                <textarea                    
                    id="wishes"
                    name="wishes"
                    onChange={changeReq.handleChange}
                    value={changeReq.values.wishes}></textarea>
                {changeReq.touched.wishes && changeReq.errors.wishes ? (
                <div>{changeReq.errors.wishes}</div>
                ) : null}
            </label><br/>

            <label>Преимуществом будет
                <textarea
                    id="advantages"
                    name="advantages"
                    onChange={changeReq.handleChange}
                    value={changeReq.values.advantages}></textarea>
                {changeReq.touched.advantages && changeReq.errors.advantages ? (
                <div>{changeReq.errors.advantages}</div>
                ) : null}
            </label><br/>

            <label>Мы предлагаем
                <textarea
                    id="additionalOfferings"
                    name="additionalOfferings"
                    onChange={changeReq.handleChange}
                    value={changeReq.values.additionalOfferings}></textarea>
                {changeReq.touched.additionalOfferings && changeReq.errors.additionalOfferings ? (
                <div>{changeReq.errors.additionalOfferings}</div>
                ) : null}
            </label>
            <input onClick={console.log(changeReq.values)} type='submit'></input>
            </div>
        </form>
    </div>
    )
}
export default EditReq;