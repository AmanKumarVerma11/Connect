import React, { useState, useEffect } from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
import '../styles/teacherDashboard.css';

function TeacherDashboard() {
  // const [teacher, setTeacher] = useState(null);
  // const [conversationHistory, setConversationHistory] = useState([]);
  const [rating, setRating] = useState(0);

  // useEffect(() => {
  //   // Fetch teacher information from the API
  //   fetch('/api/teacher')
  //     .then(response => response.json())
  //     .then(data => {
  //       setTeacher(data);
  //       setRating(data.rating);
  //     })
  //     .catch(error => console.error('Error fetching teacher information:', error));

  //   // Fetch conversation history from the API
  //   fetch('/api/conversation-history')
  //     .then(response => response.json())
  //     .then(data => setConversationHistory(data))
  //     .catch(error => console.error('Error fetching conversation history:', error));
  // }, []);

  const [teacher, setTeacher] = useState({
    email: 'john.doe@example.com',
    subjects: ['Data Structures', 'Algorithms', 'Database Systems'],
    rating: 4.7,
  });
  const [conversationHistory, setConversationHistory] = useState([
    {
      id: 1,
      studentEmail: 'alice@example.com',
      subject: 'Data Structures',
      date: '2023-04-25',
    },
    {
      id: 2,
      studentEmail: 'bob@example.com',
      subject: 'Algorithms',
      date: '2023-04-20',
    },
    {
      id: 3,
      studentEmail: 'charlie@example.com',
      subject: 'Database Systems',
      date: '2023-04-15',
    },
  ]);

  // if (!teacher || !conversationHistory) {
  //   return <div class="loader">
  //   <div></div>
  //   <div></div>
  //   <div></div>
  //   </div>;
  // }

  return (
    <div>
      <Header />
      <div className="teacher-dashboard">
        <div className="teacher-info">
          <div>
            <h2>Teacher Information</h2>
            <p>{teacher.email}</p>
            <p>Subjects: {teacher.subjects.join(', ')}</p>
            <p>Rating: {rating}</p>
          </div>
        </div>
        <div className="conversation-history">
          <h2>Conversation History</h2>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Student email</th>
                <th>Subject</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {conversationHistory.map((conversation) => (
                <tr key={conversation.id}>
                  <td>{conversation.id}</td>
                  <td>{conversation.studentEmail}</td>
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

export default TeacherDashboard;