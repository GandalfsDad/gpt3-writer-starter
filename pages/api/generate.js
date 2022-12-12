import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `Elandria is a world much like ours was in ancient times.

The timescale they use is measured in years before the Event B.E and years after the Event A.E.
It is unclear what the event was but it is known to have significant impact on the whole world.

A brief history is as follow:

Ancient times:
5000 B.E - The first humans are believed to have settled in the ancient city of Himeria. They find an abundance of the covered metal Hypoxia which is malleable and strong. The civilisation takes off faster than any other Elandria has seen.

3000 B.E - After two millennia of expansion the city-state of Himeria begins to see measurable depletion of there Hypoxia reserves. They have armed a vast military with weapons covered in the metal and begin to question weather the weapons can be smelted to make jewellery.

2800 B.E - Some Himerian explorers find a large store of Hypoxia on an uncharted island. Instead of reporting it to their own people they escape to the island with their families and found the island nation of Retnico.

2500 B.E - War breaks out between the two nations as Himeria seeks to reclaim the island for its Hypoxia reserves. The war lasts 5 years but ultimately Himeria is victorious and annexes the island of Retnico.

2000 B.E -  The Hypoxia reserves on Retnico begin to dwindle and Himeria begins to look to other sources of the metal. Explorers search the world for new sources but none is found on the mainland.

 After a century of searching the Himerian explorers finally find a new source of Hypoxia on an island far to the east. This sets off a gold rush of sorts as Himeria sends settlers to the island. The island is named Eden and it is quickly colonised.

1000 B.E - Eden has flourished and turned into a powerful nation. The island nation is self-sufficient and has begun to export its Hypoxia to the mainland. This brings a large influx of wealth to Eden and it quickly becomes a major player in the world.

500 B.E - As the wealth of Eden grows Himeria begins to fear the power of their former colony. Himeria begins to make plans to invade Eden and reclaim the islands Hypoxia reserves.

0 B.E - The Event occurs and the world is plunged into chaos. The war between Himeria and Eden is suspended and a new era begins. Not many details are available on the war. But what is know is that both Eden and Himeria were entirely devastated in the event. All Hypoxia reserves that were in the two nations disappeared without a trace. Only little volumes that had been exported to other nations remained.

Write me a story about `;

const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.7,
    max_tokens: 250,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;