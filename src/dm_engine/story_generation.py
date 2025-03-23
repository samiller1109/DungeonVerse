import openai

openai.api_key = "YOUR_OPENAI_API_KEY"

def generate_story(prompt, previous_context=""):
    system_prompt = (
        "You are a Dungeon Master guiding a group of players through a fantasy world. "
        "Continue the story based on the player's action and previous narrative."
    )
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": previous_context + "\nPlayer: " + prompt}
        ],
        max_tokens=300,
        temperature=0.8
    )
    story_output = response['choices'][0]['message']['content']
    return story_output

