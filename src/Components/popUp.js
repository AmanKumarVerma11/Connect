import React from 'react';
import '../styles/popUp.css';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, onClose, onTeacherClick, onStudentClick }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Register as:</h2>
        <button onClick={onTeacherClick}><Link to="/tform">Teacher</Link></button>
        <button onClick={onStudentClick}><Link to="/sform">Student</Link></button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;