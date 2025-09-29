import React, { useState, useEffect } from 'react';
import certifications from '../data/certifications.json';
import CertList from '../components/certifications/CertList';

// Try multiple extensions for school logos located in public/certs/logos/<slug>.<ext>
// Prefer PNG first since many logos in this repo are PNGs
const logoExtensions = ['png', 'svg', 'jpg', 'webp'];

function slugify(name = '') {
    return name
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const SchoolLogo = ({ name = '', size = 44 }) => {
    const [src, setSrc] = useState(null);

    useEffect(() => {
        let mounted = true;
        const slug = slugify(name);
        const firstToken = (name || '').split(/[^A-Za-z0-9]+/).filter(Boolean)[0] || '';
        const bases = [slug];
        // also try a short first-token name (helps with files like 'SRKR.jpeg' or 'UNT.png')
        if (firstToken) bases.push(firstToken.toLowerCase());

        (async () => {
            for (const base of bases) {
                for (const ext of logoExtensions) {
                    const url = `/certs/logos/${base}.${ext}`;
                    try {
                        const res = await fetch(url, { method: 'HEAD' });
                        if (res && res.ok) {
                            if (mounted) setSrc(url);
                            return;
                        }
                    } catch (e) {
                        // quietly continue
                    }
                }
            }
            if (mounted) setSrc(null);
        })();

        return () => {
            mounted = false;
        };
    }, [name]);

    if (src) {
        return (
            <img
                src={src}
                alt={`${name} logo`}
                width={size}
                height={size}
                className="inline-block mr-3 rounded"
            />
        );
    }

    // Fallback: initials circle
    const initials = (name || '')
        .split(/\s+/)
        .map((s) => s[0])
        .filter(Boolean)
        .slice(0, 2)
        .join('')
        .toUpperCase();

    return (
        <div
            style={{ width: size, height: size }}
            className="inline-flex items-center justify-center bg-gray-700 text-white rounded-full mr-3 font-semibold"
        >
            {initials}
        </div>
    );
};
const About = () => {
    return (
        <div className="flex flex-col p-8 bg-gray-800 text-white max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">Murali Sai Srinivas Madhyahnapu</h2>
                <p className="text-lg mb-4">
                    Results-driven Systems Engineer and Data Scientist with 3+ years of experience developing enterprise 
                    applications for 3,800+ banking branches and processing 50.9M+ records. Achieved 25% operational 
                    efficiency improvement through automation and machine learning solutions, generating $2.1M annual 
                    cost savings.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Core Competencies</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium mb-2">Programming Languages</h3>
                            <p>Python, Java, SQL, JavaScript, R, Shell Scripting, PL/SQL</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-2">Machine Learning & Analytics</h3>
                            <p>Scikit-learn, Pandas, NumPy, Matplotlib, Statistical Modeling, Predictive Analytics, AutoML, ARIMA, Forecasting</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-2">Cloud & DevOps</h3>
                            <p>OCI, AWS (S3, Lambda, EC2), Render, Docker, Kubernetes, CI/CD, Jenkins, Git, Linux, Unix</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-2">Web Technologies</h3>
                            <p>React 18, Node.js, HTML5, CSS3, REST APIs, Tailwind CSS, JWT Auth, Microservices, Mapbox GL JS</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Education & Certifications</h2>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <SchoolLogo name="University of North Texas" />
                            <div>
                                <h3 className="text-lg font-medium">MS in Advanced Data Analytics</h3>
                                <p>University of North Texas, Denton, TX</p>
                                <p>GPA: 3.8/4.0 | Expected: May 2025</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <SchoolLogo name="SRKR Engineering College" />
                            <div>
                                <h3 className="text-lg font-medium">B.Tech in Electrical and Electronics Engineering</h3>
                                <p>SRKR Engineering College, India</p>
                                <p>CGPA: 7.59/10.0 | 2020</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-medium mb-2">Certifications</h3>
                            <CertList certs={certifications} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
                <ul className="space-y-2">
                    <li><strong>Location:</strong> Denton, TX 76201</li>
                    <li><strong>Languages:</strong> English (Fluent), Telugu (Native), Hindi (Conversational)</li>
                    <li><strong>Work Authorization:</strong> Authorized to work in the United States</li>
                    <li><strong>Interests:</strong> Machine Learning Operations, Cloud Architecture, Financial Technology, Data Engineering</li>
                </ul>
            </div>
        </div>
    );
};

export default About;