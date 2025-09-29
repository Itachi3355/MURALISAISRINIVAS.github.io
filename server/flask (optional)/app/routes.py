from flask import Flask, jsonify

app = Flask(__name__)

# Sample project data
projects = [
    {
        "id": 1,
        "title": "Project One",
        "description": "Description for project one.",
        "github": "https://github.com/user/project-one",
        "live_demo": "https://project-one.example.com",
        "image": "https://example.com/image1.png"
    },
    {
        "id": 2,
        "title": "Project Two",
        "description": "Description for project two.",
        "github": "https://github.com/user/project-two",
        "live_demo": "https://project-two.example.com",
        "image": "https://example.com/image2.png"
    }
]

@app.route('/api/projects', methods=['GET'])
def get_projects():
    return jsonify(projects)

if __name__ == '__main__':
    app.run(debug=True)