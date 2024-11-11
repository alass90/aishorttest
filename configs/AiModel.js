const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Write a script to generate 60 seconds video on topic: Interesting historical story along with Al image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and Content Text as field"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n[\n  {\n    \"imagePrompt\": \"A bustling medieval marketplace, full of colorful stalls and people haggling over goods. The sun is shining brightly.\",\n    \"contentText\": \"In the year 1347, the Black Death, a deadly plague, ravaged Europe.  Imagine a bustling medieval marketplace, filled with the sights and sounds of everyday life - merchants hawking their wares, people chattering and bartering, the clanging of metal tools.  But beneath the surface, a silent killer lurked.  It had arrived on a ship from the East, carrying a deadly secret...\"\n  },\n  {\n    \"imagePrompt\": \"A close-up of a rat scurrying through the streets of a medieval city. The rat appears diseased and sickly.\",\n    \"contentText\": \"The Black Death, a plague known as the bubonic plague, was spread by fleas carried on rats.  These tiny creatures were everywhere, scurrying through the streets, feasting on garbage and disease.  They were unwitting carriers of the plague, and their presence spread fear and death wherever they went.\"\n  },\n  {\n    \"imagePrompt\": \"A scene of a crowded, dirty medieval street. People are collapsing and dying in the streets, while others desperately try to help.\",\n    \"contentText\": \"The plague spread rapidly, infecting thousands upon thousands of people.  The streets became filled with the sick and dying.  People collapsed in the streets, their bodies ravaged by the disease.  Doctors, with their long beaked masks and heavy gloves, were powerless to stop the spread.\"\n  },\n  {\n    \"imagePrompt\": \"A portrait of a medieval doctor in his long beaked mask and heavy gloves, looking somber and overwhelmed.\",\n    \"contentText\": \"The plague was a terrifying and mysterious illness.  Doctors knew little about its cause or how to treat it.  They wore protective clothing, including the iconic beaked mask, to try to avoid catching the disease.  But it was often in vain.\"\n  },\n  {\n    \"imagePrompt\": \"A desolate and deserted medieval town, with houses boarded up and the streets empty.  The atmosphere is eerie and somber.\",\n    \"contentText\": \"The plague devastated entire towns and cities.  People fled in terror, leaving behind their homes and belongings.  The streets became deserted, the air thick with the stench of death.  The once vibrant cities of Europe were reduced to ghostly shells.\"\n  },\n  {\n    \"imagePrompt\": \"A scene of people burning the bodies of the dead in a huge pyre. The fire is raging and the smoke billowing into the sky.\",\n    \"contentText\": \"To try to contain the spread of the disease, bodies were burned in massive pyres.  The smoke and ash filled the air, creating a grim spectacle.  But even this desperate measure failed to stop the plague.  It continued to spread, leaving a trail of death and devastation in its wake.\"\n  },\n  {\n    \"imagePrompt\": \"A scene of a medieval church, filled with people praying for deliverance from the plague.  The atmosphere is one of desperation and fear.\",\n    \"contentText\": \"The plague was a time of great fear and despair.  People turned to their faith, praying for deliverance from the disease.  They flocked to churches, seeking comfort and solace in the face of death.\"\n  },\n  {\n    \"imagePrompt\": \"A scene of a medieval village where people are helping each other, sharing food and caring for the sick.  The atmosphere is one of resilience and hope.\",\n    \"contentText\": \"Despite the devastation, there were acts of incredible compassion.  People came together to help each other, sharing food and resources, caring for the sick and dying.  They showed incredible resilience in the face of tragedy.\"\n  },\n  {\n    \"imagePrompt\": \"A close-up of a medieval tombstone inscribed with the words \"Here lies [name], victim of the Black Death.\" \",\n    \"contentText\": \"The Black Death claimed millions of lives across Europe.  It left an indelible mark on history, shaping societies and cultures for generations to come.  The plague serves as a reminder of the fragility of life and the importance of understanding and preventing diseases.\"\n  }\n]\n```\n\n**Explanation of the Script**\n\n* **Structure:** The script is organized as a JSON array, where each object represents a scene in the video. \n* **Image Prompt:** This field provides a descriptive text prompt for the AI image generator, describing the scene, setting, and objects needed in the image. \n* **Content Text:** This field contains the narration text for the scene. \n\n**Creating the Video**\n\n1. **Image Generation:** Use an AI image generator like Midjourney or DALL-E to generate images based on the prompts in the JSON.\n2. **Video Editing:**  Use video editing software like Adobe Premiere Pro or Final Cut Pro to:\n    * Import the generated images.\n    * Add the narration text from the \"contentText\" field.\n    * Create transitions between scenes.\n    * Add music and sound effects.\n    * Export the final video.\n\n**Important Note:** This is just a basic script for a 60-second video. You can modify the prompts and text to create a more detailed and engaging video. \n"},
        ],
      },
    ],
  });

  