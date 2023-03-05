import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxs-badge-check'></i>

                    <div>
                        <i class='bx bxl-html5'></i>
                        <h3 className="skills_name">HTML5</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxs-badge-check'></i>

                    <div>
                        <i class='bx bxl-css3' ></i>
                        <h3 className="skills_name">CSS3</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxs-badge-check'></i>

                    <div>
                        <i class='bx bxl-javascript' ></i>
                        <h3 className="skills_name">JavaScript | JSX</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxs-badge-check'></i>

                    <div>
                        <i class='bx bxl-react' ></i>
                        <h3 className="skills_name">REACT</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxs-badge-check'></i>

                    <div>
                        <i class='bx bxl-react' ></i>
                        <h3 className="skills_name">Bootstrap</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxs-badge-check'></i>

                    <div>
                        <i class='bx bxl-git' ></i>
                        <h3 className="skills_name">Git</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend