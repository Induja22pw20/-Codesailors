import React from 'react';
import './designview.css'; // Import the CSS for styling
import d1 from './Image/d1.jpg';
import d2 from './Image/d2.jpg';
import d3 from './Image/d3.jpeg';
import a1 from './Image/a1.png';

const DesignView = ({ onChatClick }) => {
  const submissions = [
    {
      id: 1,
      image: a1,
      dressName: 'Dress 1',
      designerName: 'Designer A'
    },
    {
      id: 2,
      image: d2,
      dressName: 'Dress 2',
      designerName: 'Designer B'
    },
    {
      id: 3,
      image: d3,
      dressName: 'Dress 3',
      designerName: 'Designer C'
    },
    {
      id: 4,
      image: d1,
      dressName: 'Dress 4',
      designerName: 'Designer D'
    },
    {
      id: 5,
      image: d2,
      dressName: 'Dress 5',
      designerName: 'Designer E'
    }
  ];

  return (
    <div className="design-view-container">
      <h2>Recent Submissions</h2>
      <div className="cards-container">
        {submissions.slice(0, 3).map((submission) => (
          <div className="card" key={submission.id}>
            <img src={submission.image} alt={submission.dressName} />
            <div className="card-description">
              <h3>{submission.dressName}</h3>
              <p>{submission.designerName}</p>
              <button onClick={onChatClick}>Chat</button> {/* Call onChatClick function */}
            </div>
          </div>
        ))}
      </div>

      <h2>All Submissions</h2>
      <div className="horizontal-containers">
        {submissions.map((submission) => (
          <div className="horizontal-container" key={submission.id}>
            <img src={submission.image} alt={submission.dressName} />
            <div className="text-container">
              <h3>{submission.dressName}</h3>
              <p>Designer: {submission.designerName}</p>
              <button onClick={onChatClick}>Chat</button> {/* Call onChatClick function */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignView;
