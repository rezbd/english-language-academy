import React, { useEffect, useState } from 'react';
import './Services.css';

// all the services of the website in one column
const Services = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/courseData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div className="services-body py-4">
            <div className="container">
                <h2 className="mb-3 fs-1 featured">All Services</h2>
                <div className="row">
                    {
                        courses?.map(course => <div key={course.key} className="col-md-9 mx-auto">
                            <div className="service">
                                <div>
                                    <img className="service-img w-75" src={course.img} alt="" />
                                </div>
                                <div>
                                    <h2>{course.title}</h2>
                                    <p>{course.descriptionLong}</p>
                                    <h6>Instructor: {course.instructor}</h6>
                                    <h5 className="fs-6 mt-3">Course Duration: {course.duration} months</h5>
                                    <h5 className="mt-3">Price: ${course.price} /<span className="fs-6">mo</span></h5>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div >
        </div>
    );
};

export default Services;