import React, { useEffect, useState } from 'react';
import Bonus from '../Bonus/Bonus';
import './Home.css';

// code for home page and extra section included in home
const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/courseData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div className="container py-3 mb-4">
            <Bonus></Bonus>
            <h2 className="mt-5 mb-3 featured">Featured Services</h2>
            <div className="row">
                {
                    courses.slice(0, 4)?.map(course => <div key={course.key} className="col-md-6">
                        <div className="item">
                            <div>
                                <img className="item-img w-75" src={course.img} alt="" />
                            </div>
                            <div>
                                <h3 className="pt-2">{course.title}</h3>
                                <p>{course.descriptionShort}</p>
                                <h6>Course Duration: {course.duration} months</h6>
                                <h5 className="my-3">Price: ${course.price} /<span className="fs-6">mo</span></h5>
                                <button className="btn btn-warning mt-1">Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;