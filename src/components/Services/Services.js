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
        <div className="container">
            <h2 className="mt-4 mb-2 featured">All Services</h2>
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
                                <h5>Course Duration: {course.duration} months</h5>
                                <h5>Monthly Fee: ${course.price}</h5>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div >
    );
};

export default Services;