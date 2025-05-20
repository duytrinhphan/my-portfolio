import React, { useState, useEffect } from 'react';
import sr from '../../utils/scrollReveal';
import Project1 from '../../assets/projects/helmet-store.png';
import Project2 from '../../assets/projects/riskprediction.png';
import Project3 from '../../assets/projects/loan-prediction.png';
import Project4 from '../../assets/projects/project4.png';
import Project5 from '../../assets/projects/project5.png';
import './projects.styles.css';

const allProjects = [
  {
    images: [Project1],
    title: 'Helmet Store',
    description: 'Helmet Store is a web application that allows users to browse and purchase helmets, while also providing an admin interface to manage products, orders, and users.',
    github: 'https://github.com/duytrinhphan/Helmet_Store.git'
    },
  {
    images: [Project2],
    title: 'Stroke Risk Prediction',
    description: 'A machine learning-powered web application that predicts the risk of ischemic stroke based on user input health data.',
    github: 'https://github.com/duytrinhphan/Stroke-Risk-Prediction.git'
  },
  {
    images: [Project3],
    title: 'Loan Repayment Prediction',
    description: 'Developed a deep learning-based solution to predict customers’ loan repayment capabilities using demographic and behavioral data. The project was awarded an Encouragement Prize at the HD Bank Hackathon 2024, demonstrating the potential of AI in financial risk assessment and decision-making.',
    github: 'https://github.com/duytrinhphan/Loan-Repayment-Model.git'
  },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectsPerPage = 3;
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = allProjects.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    sr.reveal('.work__img', { interval: 200 });
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section className="work section" id="project">
      <h2 className="section-title">Projects</h2>

      <div className="work__container">
        {currentProjects.map((project, index) => (
          <a
  key={index}
  className="work__img"
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
>
  <img src={project.images[0]} alt={project.title} />
  <div className="work__description">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
  </div>
</a>

        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="pagination-number">
          {currentPage} / {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {selectedProject && (
        <div className="popup-overlay" onClick={() => setSelectedProject(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProject.title}</h3>

            <div className="image-slider">
              <button
                onClick={() =>
                  setCurrentImageIndex((i) => Math.max(i - 1, 0))
                }
                disabled={currentImageIndex === 0}
                className="nav-button"
              >
                Prev
              </button>

              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} ${currentImageIndex + 1}`}
              />

              <button
                onClick={() =>
                  setCurrentImageIndex((i) =>
                    Math.min(i + 1, selectedProject.images.length - 1)
                  )
                }
                disabled={currentImageIndex === selectedProject.images.length - 1}
                className="nav-button"
              >
                Next
              </button>
            </div>

            <p>{selectedProject.details}</p>

            <button onClick={() => setSelectedProject(null)}>Đóng</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
