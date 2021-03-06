import React from 'react';
import './About.css';

// contents of about us page
const About = () => {
    return (
        <div className="row about">
            <div className="col-12 col-md-8">
                <h2>About Us</h2>
                <p><span className="fs-2 text-danger">E</span>nglish Language Academy has been developed in close cooperation with the British Language Centre - a leading Adult Language Education Centre with multiple facilities, and an official English Language Testing Centre for London Chamber of Commerce and Industry, TELC (The European Language Certificates), and by Pearson - the largest Educational company in the world (Financial Times Group).</p>
                <p>Claudia E. founded the Center in March of 2014. She brings specialized experience and coaching to students. On any given day, Kouloud (Claudia) Elsayed can find herself in front of a roomful of students from around the world. Each has a goal to learn to speak English. And each of them approaches it with a unique cultural background – and varying familiarity with the language.</p>
                <p>
                    Claudia has learned to embrace the challenge that can present. “She takes care of the individual needs of all students even though [they are] all different,” says one of her students. While she carefully covers the basics of grammar and spelling, Claudia has a reputation for making learning comfortable and fun, using real-world conversation and storytelling as teaching tools.
                </p>
                <p>Our primary Educational Consultant has a Delta (the senior-most achievement) in Adult Language Education from Trinity College London - one of the most prestigious Universities in the United Kingdom- or the world!</p>
            </div>
            <div className="col-12 col-md-4">
                <img className="img-about" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
        </div>
    );
};

export default About;