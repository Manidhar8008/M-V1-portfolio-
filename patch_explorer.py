from pathlib import Path

f = Path("src/components/Explorer.tsx")

text = f.read_text()

replacements = {
    "Ask Vasuki": "Vasuki Explorer",
    "Core Daemon Terminal": "Digital Archaeology Console",
    "RETRIEVING HYBRID INDEX...": "SEARCHING FOUNDER KNOWLEDGE...",
    "LIVE KNOWLEDGE RETRIEVAL ENGINE": "CURATED FOUNDER INTELLIGENCE SYSTEM",
    "HOST: LOCALHOST_DOCKER": "MODE: DIGITAL ARCHAEOLOGY",
}

for old, new in replacements.items():
    text = text.replace(old, new)

f.write_text(text)

print("Explorer updated successfully")

