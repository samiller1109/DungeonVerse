from flask import Flask, request, jsonify
from story_generation import generate_story

app = Flask(__name__)

@app.route('/api/story', methods=['POST'])
def story_route():
    data = request.get_json()
    player_input = data.get("player_input")
    previous_context = data.get("previous_context", "")
    
    story_output = generate_story(player_input, previous_context)
    
    return jsonify({
        "story": story_output
    })

if __name__ == "__main__":
    app.run(debug=True)
