

import React, { useState, useEffect } from 'react';
import './App.css'; 

const MatchCard = ({ match }) => {
   
    const statusClass = match.status === 'Live' ? 'status live' : 'status completed';

    return (
        <div className="match-card">
            <div className={statusClass}>
                {match.status}
            </div>
            
            <h3>{match.team1} vs {match.team2}</h3>

            <div className="team-score">
                <span className="team-name">{match.team1}</span>
                <span className="score-details">
                    {match.score1} ({match.overs1} ov)
                </span>
            </div>
            
            <div className="team-score">
                <span className="team-name">{match.team2}</span>
                <span className="score-details">
                    {match.score2} ({match.overs2} ov)
                </span>
            </div>

            <p className="match-result">{match.result}</p>
        </div>
    );
};

const App = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  
    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await fetch('/api/matches');
             // const response = await fetch('http://localhost:5000/api/matches');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                setMatches(data);
                
            } catch (err) {
                console.error("Failed to fetch matches:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMatches();
    }, []);

    if (loading) {
        return <div className="loading-message">Loading match scores...</div>;
    }

    if (error) {
        return <div className="error-message">Error fetching data: {error}. Check if the backend is running on port 5000.</div>;
    }

    return (
        <div className="app-container">
            <header className="header">
                <h1>🏏 IPL Live Score Dashboard</h1>
            </header>
            
            <main className="dashboard-container">
                <div className="matches-grid">
                    {matches.length > 0 ? (
                        matches.map((match) => (
                           
                            <MatchCard key={match._id} match={match} />
                        ))
                    ) : (
                        <p>No matches found in the database.</p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;