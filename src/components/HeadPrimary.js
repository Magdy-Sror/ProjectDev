import React from "react";
import Star from '../components/Star'
import Teacher1 from "../images/what-is-teacher-burnout-600x400.png"
import SchoolComp from "./SchoolComp"
 const HeadPrimary = ()=>{
    return(
        <>
         <SchoolComp />
        <div className="schools-details">
          <div className="container">


               <div className="top">

                 <div>
                        <select class="form-select" aria-label="Disabled select example" dir="rtl">
                            <option selected>جميع التخصصات المتواجده</option>
                            <option value="1">عربي</option>
                            <option value="1">علوم</option>
                            <option value="1">دراسات</option>
                            <option value="1">رياضيات</option>
                        </select>
                 </div>

                 <div>
                     <div className="shownSchool">مدرسة رأس الخليج الابتدائية</div>
                 </div>

               </div>



               <div className="container">
               <div className="row">
                    <div className="col-md-6 mt-4">
                        <div className="card">
                        <span className="school-name">رأس الخليج اعدادي</span>
                            <div className="row">
                                <div className="col-4 text-center">
                                    <img src={Teacher1} alt="..." className="img-fluid"/>
                                </div>

                                <div className="col-8">
                                <ul className="list-unstyled info-list">
                                    <li><b>الأسم : </b>صلاح راغب الشهاوي</li>
                                    <li><b>المادة المدرسية : </b>اللغة العربية</li>
                                    <Star/>
                                    <li><b>التقييم العام : </b>من 10 زوار للمدرسة</li>
                                    <li><b>مرحلة التدريس : </b>المرحلة الأبتدائية</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="card">
                        <span className="school-name">رأس الخليج اعدادي</span>
                            <div className="row">
                                <div className="col-4 text-center">
                                    <img src={Teacher1} alt="..." className="img-fluid"/>
                                </div>

                                <div className="col-8">
                                <ul className="list-unstyled info-list">
                                    <li><b>الأسم : </b> مجدي الصعب</li>
                                    <li><b>المادة المدرسية : </b>اللغة الانجليزية</li>
                                    <Star/>
                                    <li><b>التقييم العام : </b>من 10 زوار للمدرسة</li>
                                    <li><b>مرحلة التدريس : </b>المرحلة الأبتدائية</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="card">
                        <span className="school-name">رأس الخليج اعدادي</span>
                            <div className="row">
                                <div className="col-4 text-center">
                                    <img src={Teacher1} alt="..." className="img-fluid"/>
                                </div>

                                <div className="col-8">
                                <ul className="list-unstyled info-list">
                                    <li><b>الأسم : </b> نوران حيزه</li>
                                    <li><b>المادة المدرسية : </b>علوم</li>
                                    <Star/>
                                    <li><b>التقييم العام : </b>من 10 زوار للمدرسة</li>
                                    <li><b>مرحلة التدريس : </b>المرحلة الأبتدائية</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="card">
                        <span className="school-name">رأس الخليج اعدادي</span>
                            <div className="row">
                                <div className="col-4 text-center">
                                    <img src={Teacher1} alt="..." className="img-fluid"/>
                                </div>

                                <div className="col-8">
                                <ul className="list-unstyled info-list">
                                    <li><b>الأسم : </b> محمد حسين</li>
                                    <li><b>المادة المدرسية : </b> تاريخ</li>
                                    <Star/>
                                    <li><b>التقييم العام : </b>من 10 زوار للمدرسة</li>
                                    <li><b>مرحلة التدريس : </b>المرحلة الأبتدائية</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               
               </div>

          </div>
        </div>
        </>
    )
 }


 export default HeadPrimary;