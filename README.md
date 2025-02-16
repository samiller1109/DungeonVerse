DungeonVerse
An AI Dungeon Master project to improve tabletop role-playing games (RPGs) by providing an intelligent, adaptive Dungeon Master capable of creating various narratives, managing game mechanics, and interacting with players.

Top-Level Files 
LICENSE – Contains the legal license for your project, stating how others can use code.
README.md – Provides an overview of project, installation instructions, usage examples, and contribution guidelines.
requirements.txt – Lists all Python dependencies that project needs. It helps users install everything with pip install -r requirements.txt.
setup.py – A script for packaging project. It allows you to install your project with pip install . and define metadata for distribution (version, author, dependencies).

Directories
docs/ – Contains project documentation.
    design.md – Your project design document, detailing architecture, components, and technical decisions.
src/ – Holds all source code for project.
    main.py – The entry point of program, where the DungeonVerse game starts.
    dm_engine/ – Contains the core logic of the AI Dungeon Master.
        story_generation.py – Handles story and quest generation.
        game_state.py – Manages the current state of the game (player stats, world state, etc.).
        rule_enforcement.py – Ensures that all actions follow D&D rules.
    npc/ – Handles non-player character interactions.
        npc_generator.py – Creates NPCs with personalities, skills, and backgrounds.
        dialogues.py – Manages NPC dialogue and interaction logic.
    ui/ – Manages the user interface components.
        web_ui.py – Handles the web-based interface.
        cli_ui.py – Manages the command-line interface for the game.
data/ – Stores data files and assets.
    world_data.json – Contains world-building elements (locations, maps, lore).
    npc_data.json – Holds data about NPCs (names, roles, relationships).
tests/ – Contains unit tests to ensure your code works as expected.
    test_story_generation.py – Tests the story generation functionality.
    test_npc_interactions.py – Tests NPC interactions and dialogues.
scripts/ – Includes utility and deployment scripts.
    deploy.sh – A shell script for deploying project (for pushing to AWS).
    setup.sh – A setup script that prepares environment (installing dependencies, initializing databases).
.github/workflows/ – Contains GitHub Actions for continuous integration (CI).
    python-ci.yml – An automation script that runs tests, linters, and builds every time you push code to the repository.
