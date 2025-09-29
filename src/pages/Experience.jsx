import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: "Systems Engineer at Tata Consultancy Services Ltd.",
            duration: "March 2021 - August 2023",
            location: "Mumbai, India",
            achievements: [
                {
                    category: "Enterprise Application Development & Optimization",
                    points: [
                        "Developed and deployed 25+ microservices using Java, Spring Boot, and Docker, reducing deployment time by 65% and enabling 30% faster scaling for 10M+ banking customers",
                        "Engineered automated solutions using Python and Shell scripting, eliminating 40+ hours of weekly manual work and reducing operational costs by $180K annually",
                        "Optimized WebLogic server performance across 12 production environments, achieving 99.9% uptime and preventing $2.1M in potential downtime costs",
                        "Built responsive web applications using JavaScript, HTML5, and CSS3, improving user experience scores by 35% and reducing customer support tickets by 22%"
                    ]
                },
                {
                    category: "Database Engineering & Analytics",
                    points: [
                        "Designed and implemented Oracle and MySQL database architectures supporting 50M+ customer accounts with 99.9% data integrity",
                        "Developed 50+ complex SQL queries and PL/SQL stored procedures, optimizing financial transaction processing for $500M+ daily transaction volume",
                        "Created automated ETL pipelines processing 2M+ records daily, reducing data processing time from 4 hours to 45 minutes (82% improvement)",
                        "Configured JDBC connection pools and database optimization strategies, improving query performance by 20% and reducing connection overhead by 15%"
                    ]
                },
                {
                    category: "Cloud Infrastructure & DevOps",
                    points: [
                        "Managed Linux server deployments across 20+ production environments, maintaining 99.5% deployment success rate with zero critical failures",
                        "Implemented CI/CD pipelines using Jenkins and Git, enabling continuous integration for 8 major software releases with 95% defect-free rate",
                        "Configured SSL protocols and security implementations, achieving 100% compliance with banking security standards",
                        "Deployed 100+ enterprise applications using agile methodologies, supporting continuous delivery practices"
                    ]
                },
                {
                    category: "Team Leadership & Project Management",
                    points: [
                        "Led cross-functional teams of 15+ developers, analysts, and testers to deliver New Branch Channel banking platform across 3,800+ branches nationwide",
                        "Managed project timelines using Scrum methodology, delivering 8 major releases on schedule while maintaining high quality standards",
                        "Resolved 200+ critical production incidents with 95% SLA compliance, ensuring business continuity for Fortune 500 banking client",
                        "Mentored junior developers and conducted code reviews, improving team productivity by 18% and reducing technical debt"
                    ]
                }
            ]
        }
    ];

    return (
        <div className="p-6 bg-gray-800 text-white max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Work Experience</h1>
            <div className="space-y-8">
                {experiences.map((experience, index) => (
                    <div key={index} className="border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                        <div className="mb-4">
                            <h2 className="text-2xl font-semibold">{experience.title}</h2>
                            <p className="text-gray-400">{experience.duration} | {experience.location}</p>
                        </div>
                        
                        <div className="space-y-6">
                            {experience.achievements.map((achievement, achievementIndex) => (
                                <div key={achievementIndex}>
                                    <h3 className="text-xl font-semibold mb-3 text-blue-400">{achievement.category}</h3>
                                    <ul className="space-y-2">
                                        {achievement.points.map((point, pointIndex) => (
                                            <li key={pointIndex} className="flex items-start">
                                                <span className="text-blue-400 mr-2">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;