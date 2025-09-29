import React, { useState } from 'react';
import certifications from '../../data/certifications.json';

const CommandTerminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([
        'Welcome to my interactive portfolio terminal! 👋',
        'Type "help" to see available commands.',
        ''
    ]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleCommandSubmit = (e) => {
        e.preventDefault();
        const commandOutput = executeCommand(input);
        setOutput((prevOutput) => [...prevOutput, `> ${input}`, commandOutput]);
        setInput('');
    };

    const executeCommand = (command) => {
        switch (command.toLowerCase()) {
            case 'help':
                return `Available commands:
- help: Show this help message
- clear: Clear terminal
- about: About me
- skills: List my technical skills
- education: Show my education
- experience: Show work experience
- projects: List my projects
- contact: Show contact information
- github: Open my GitHub profile
- linkedin: Open my LinkedIn profile
- resume: Download my resume`;
            
            case 'clear':
                setOutput([]);
                return '';
            
            case 'about':
                const certList = certifications.map(c => `• ${c.name}${c.code ? ` (${c.code})` : ''} — ${c.issuer}${c.year ? ` • ${c.year}` : ''}`).join('\n');
                return `Murali Sai Srinivas Madhyahnapu
Results-driven Systems Engineer and Data Scientist with 3+ years of experience developing enterprise 
applications for 3,800+ banking branches and processing 50.9M+ records. Achieved 25% operational 
efficiency improvement through automation and machine learning solutions.

Certifications:\n${certList}`;
            
            case 'skills':
                return `Technical Skills:
• Programming: Python, Java, SQL, JavaScript, R, Shell Scripting, PL/SQL
• ML & Analytics: Scikit-learn, Pandas, NumPy, Matplotlib, Statistical Modeling
• Cloud & DevOps: OCI, AWS, Docker, Kubernetes, CI/CD, Jenkins, Git
• Web Tech: React 18, Node.js, HTML5, CSS3, REST APIs, Microservices
• Databases: Oracle, MySQL, PostgreSQL, JDBC, Supabase`;
            
            case 'education':
                return `Education:
• MS in Advanced Data Analytics
  University of North Texas, Denton, TX
  GPA: 3.8/4.0 | Expected: May 2025

• B.Tech in Electrical and Electronics Engineering
  SRKR Engineering College, India
  CGPA: 7.59/10.0 | 2020`;
            
            case 'experience':
                return `Work Experience:
Systems Engineer at Tata Consultancy Services Ltd.
Mumbai, India | March 2021 - August 2023

Key Achievements:
• Developed 25+ microservices using Java & Spring Boot
• Optimized WebLogic server performance with 99.9% uptime
• Led cross-functional teams of 15+ developers
• Managed banking platform across 3,800+ branches`;
            
            case 'projects':
                return `Notable Projects:
1. DegreeWheels - University Rideshare Platform
   Tech: React 18, Node.js, PostgreSQL, Mapbox GL JS
   Link: www.degreewheels.com

2. American Airlines - Baggage Arrival Prediction
   Tech: Python, Scikit-learn, ARIMA, AWS
   Achievement: 80% prediction accuracy

3. Enterprise Banking Platform
   Tech: Java, Spring Boot, Docker, Oracle
   Impact: Supports 10M+ banking customers`;
            
            case 'contact':
                return `Contact Information:
Email: muralisaisrinivasmadhyahnapu@gmail.com
Phone: 940-843-7989
Location: Denton, TX 76201`;
            
            case 'github':
                window.open('https://github.com/Itachi3355', '_blank');
                return 'Opening GitHub profile...';
            
            case 'linkedin':
                window.open('https://linkedin.com/in/murali-sai-srinivas', '_blank');
                return 'Opening LinkedIn profile...';
            
            case 'resume':
                window.open('/resume.pdf', '_blank');
                return 'Downloading resume...';
            
            default:
                return `Command not found: ${command}
Type 'help' to see available commands.`;
        }
    };

    return (
        <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg border border-gray-700">
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-700">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-400">portfolio@terminal:~$</div>
            </div>
            <div className="terminal-output h-64 overflow-y-auto mb-4 font-mono text-sm">
                {output.map((line, index) => (
                    <div key={index} className="py-1">
                        {line.startsWith('>') ? (
                            <span className="text-blue-400">{line}</span>
                        ) : (
                            <span style={{ whiteSpace: 'pre-wrap' }}>{line}</span>
                        )}
                    </div>
                ))}
            </div>
            <form onSubmit={handleCommandSubmit} className="flex">
                <div className="flex-1 flex items-center bg-gray-800 border border-gray-700 rounded-l-lg px-3">
                    <span className="text-green-400 mr-2">❯</span>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        className="flex-1 p-2 bg-transparent focus:outline-none font-mono"
                        placeholder="Type a command..."
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-blue-600 px-4 rounded-r-lg hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Run
                </button>
            </form>
        </div>
    );
};

export default CommandTerminal;