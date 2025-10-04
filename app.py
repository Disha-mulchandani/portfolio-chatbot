from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message', '').lower()
    
    if 'skills' in user_message:
        reply = ("I have strong programming and web development skills, including Python, JavaScript, React, Node.js, HTML, CSS, "
                 "and experience in AI/ML projects. I enjoy building full-stack applications and solving real-world problems.")
    elif 'passion' in user_message or 'coding' in user_message:
        reply = ("Coding is my passion. I love exploring new technologies, tackling challenges, and converting ideas into projects "
                 "that make an impact. Continuous learning motivates me every day.")
    elif 'communication' in user_message:
        reply = ("I have excellent communication skills, which help me articulate ideas clearly, collaborate effectively with teams, "
                 "and present my work professionally.")
    elif 'hire' in user_message or 'company' in user_message:
        reply = ("A company should hire me because I combine technical expertise, creativity, and strong communication skills. "
                 "I am dedicated, adaptable, and committed to delivering high-quality results on every project.")
    elif 'projects' in user_message:
        reply = ("Check out my portfolio: I have developed personal portfolio websites, chatbots, and AI/ML projects demonstrating "
                 "both technical skills and creativity.")
    elif 'about you' in user_message:
        reply = ("I'm Disha, a passionate coder and AI enthusiast. I love creating solutions that solve problems and bring value. "
                 "My goal is to merge technical skills, creativity, and communication to make a meaningful impact.")
    else:
        reply = ("Sorry, I didn't understand. You can ask about my skills, passion for coding, communication, projects, "
                 "or why a company should hire me.")

    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(debug=True)
