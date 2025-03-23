import React, { useState } from 'react';
import axios from 'axios';

function StoryView() {
  const [input, setInput] = useState("");
  const [story, setStory] = useState("");
  const [context, setContext] = useState("");

  const submitAction = async () => {
    const response = await axios.post('/api/story', {
      player_input: input,
      previous_context: context
    });
    const newStory = response.data.story;
    setContext(context + "\nPlayer: " + input + "\nDM: " + newStory);
    setStory(newStory);
    setInput("");
  };

  return (
    <div className="p-4 bg-gray-100 rounded-xl">
      <h2 className="text-xl font-bold mb-2">Dungeon Master</h2>
      <div className="bg-white p-4 rounded mb-4 shadow">{story || "Your story begins..."}</div>
      <textarea
        className="w-full p-2 border border-gray-300 rounded"
        rows="3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What will your character do?"
      />
      <button
        onClick={submitAction}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}

export default StoryView;
