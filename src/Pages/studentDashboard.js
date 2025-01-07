import React, { useState, useEffect } from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
import '../styles/studentDashboard.css';
import { FaVideo } from 'react-icons/fa';

function StudentDashboard() {
  // const [student, setStudent] = useState(null);
  // const [conversationHistory, setConversationHistory] = useState([]);
  const [showSubjectInput, setShowSubjectInput] = useState(false);
  const [subject, setSubject] = useState('');

  const student = {
    email: 'john.doe@example.com',
    branch: 'Computer Science',
  };

  const conversationHistory = [
    {
      id: 1,
      teacherEmail: 'alice@yahoo.com',
      subject: 'Data Structures',
      date: '2023-04-25',
    },
    {
      id: 2,
      teacherEmail: 'bruceWayne@mail.com',
      subject: 'Algorithm Design',
      date: '2023-04-20',
    },
    {
      id: 3,
      teacherEmail: 'emilydavis@mail.com',
      subject: 'Database Systems',
      date: '2023-04-15',
    },
  ];

  // useEffect(() => {
  //   // Fetch student information from the API
  //   fetch('/api/student')
  //     .then(response => response.json())
  //     .then(data => setStudent(data))
  //     .catch(error => console.error('Error fetching student information:', error));

  //   // Fetch conversation history from the API
  //   fetch('/api/conversation-history')
  //     .then(response => response.json())
  //     .then(data => setConversationHistory(data))
  //     .catch(error => console.error('Error fetching conversation history:', error));
  // }, []);

  const handleSubjectSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to search for a teacher based on the subject
    // and connect via video or voice call
    console.log('Subject:', subject);
  };

  
  if (!student || !conversationHistory) {
    return <div class="loader">
    <div></div>
    <div></div>
    <div></div>
    </div>;
  }

  return (
    <div>
      <Header />
      <div className="student-dashboard">
        <div className="student-info">
          <div>
            <h2>Student Information</h2>
            <p>{student.email}</p>
            <p>{student.branch}</p>
          </div>
          <div className="connect-button">
            <button onClick={() => setShowSubjectInput(true)}>
              <FaVideo />
            </button>
          </div>
        </div>
        {showSubjectInput && (
          <div className="subject-input">
            <form onSubmit={handleSubjectSubmit}>
              <input
                type="text"
                placeholder="Enter subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <button type="submit">Connect</button>
            </form>
          </div>
        )}
        <div className="conversation-history">
          <h2>Conversation History</h2>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Teacher email</th>
                <th>Subject</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {conversationHistory.map((conversation) => (
                <tr key={conversation.id}>
                  <td>{conversation.id}</td>
                  <td>{conversation.teacherEmail}</td>
                  <td>{conversation.subject}</td>
                  <td>{conversation.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentDashboard;