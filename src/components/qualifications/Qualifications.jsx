import React, { useState } from 'react';
import "./qualifications.css";

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section" id="portfolio">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                    >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={
                    toggleState === 2 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                    >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={
                    toggleState === 1 ? 
                    "qualification__content qualification__content-active" 
                    : "qualification__content"
                    }
                    >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Escuela Miguel Riofrio N1</h3>
                            <span className="qualification__subtitle">Loja - Ecuador</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 1990 - 1996
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Unidad Educativa Experimental "Bernardo Valdivieso"</h3>
                            <span className="qualification__subtitle">Loja - Ecuador</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 1997 - 2003
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Private Technical University of Loja (UTPL)</h3>
                            <span className="qualification__subtitle">Loja - Ecuador</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2004 - 2012
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">University of Alcalá</h3>
                            <span className="qualification__subtitle">Madrid - Spain</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2016 - 2017
                            </div>
                        </div>
                    </div>
                </div>

                <div className={
                    toggleState === 2 ? 
                    "qualification__content qualification__content-active" 
                    : "qualification__content"
                    }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Computer maintenance</h3>
                            <span className="qualification__subtitle">Tech Support Unit at Private Technical University of Loja (UTPL)</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2004
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Web Developer</h3>
                            <span className="qualification__subtitle">Virtualization Unity of Open and Distance Modality at Private Technical University of Loja (UTPL)</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2005
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Java Developer</h3>
                            <span className="qualification__subtitle">Pupilabox</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2007
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">PHP Developer</h3>
                            <span className="qualification__subtitle">WutoLoja</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2010
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Investigation passant</h3>
                            <span className="qualification__subtitle">Advanced Information Technoligies at Private Technical University of Loja (UTPL)</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2012 - 2013
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Learning Management Systems Administrator & Teacher</h3>
                            <span className="qualification__subtitle">Private Technical University of Loja (UTPL)</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2013 - 2022
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifications