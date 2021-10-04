import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/courseData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div className="container py-3">
            <div className="row">
                {
                    courses.slice(0, 4).map(course => <div key={course.key} className="col-md-6">
                        <div className="item">
                            <div>
                                <img className="item-img w-75" src={course.img} alt="" />
                            </div>
                            <div>
                                <h3>{course.title}</h3>
                                <p>{course.descriptionShort}</p>
                                <h6>Course Duration: {course.duration} months</h6>
                                <h6>Monthly Fee: ${course.price}</h6>
                                <button className="btn btn-warning mt-2">Details</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Home;