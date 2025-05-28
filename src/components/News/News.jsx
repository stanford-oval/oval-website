import styles from "./news.css";

const newsItems = [
  {
    date: "November 2024",
    event:'Shicheng Liu and Sina Semnani presented the paper <a href="https://arxiv.org/abs/2407.11417">SPINACH: SPARQL-Based Information Navigation for Challenging Real-World Questions</a> at the 2024 Conference on Empirical Methods in Natural Language Processing (EMNLP), Miami, Florida, USA.'
  },
   {
    date: "November 2024",
    event:'Yucheng Jiang presented the paper <a href="https://arxiv.org/abs/2408.15232">Into the Unknown Unknowns: Engaged Human Learning through Participation in Language Model Agent Conversations</a> at the 2024 Conference on Empirical Methods in Natural Language Processing (EMNLP), Miami, Florida, USA.'
  },
  {
    date: "November 2024",
    event:'Kazuaki Furumai presented the paper <a href="https://arxiv.org/abs/2407.03585">Zero-shot Persuasive Chatbots with LLM-Generated Strategies and Information Retrieval</a> at the 2024 Conference on Empirical Methods in Natural Language Processing (EMNLP), Miami, Florida, USA.'
  },
  {
    date: "August 2024",
    event:
      'Jialiang Xu presented the paper <a href="https://arxiv.org/abs/2406.00562">SPAGHETTI: Open-Domain Question Answering from Heterogeneous Data Sources with Retrieval and Semantic Parsing</a> at the 62nd Annual Meeting of the Association for Computational Linguistics (ACL), Bangkok, Thailand.'
  },
  {
    date: "June 2024",
    event:
    '<a href="https://arxiv.org/abs/2305.14292">WikiChat: Stopping the hallucination of large language model chatbots by few-shot grounding on Wikipedia</a> won <a href="https://x.com/wikiworkshop/status/1803793163665977481">The Wikimedia Foundation Research Award of the Year 2024</a>!',
  },
  {
    date: "June 2024",
    event:
    'Yijia Shao presented the paper <a href="https://arxiv.org/abs/2402.14207">Assisting in Writing Wikipedia-like Articles From Scratch with Large Language Models</a> at the 2024 North American Chapter of Association for Computational Linguistics (NAACL), Mexico City, Mexico.',
  },
  {
    date: "June 2024",
    event:
    'Shicheng Liu presented the paper <a href="https://arxiv.org/abs/2311.09818">SUQL: Conversational Search over Structured and Unstructured Data with Large Language Models</a> at the 2024 North American Chapter of Association for Computational Linguistics (NAACL), Mexico City, Mexico.',
  },
  {
    date: "May 2024",
    event:
    '3 OVAL projects are awarded <a href="https://brown.columbia.edu/2024-25-magic-grants/">2024-2025 Magic Grants</a>! "African History from the Bottom Up with LLM-Augmented Agents" led by Sina Semnani, "Cross-Lingual Multi-Perspective News" led by Jialiang Xu, and "DataTalk: All Documents and Data, All at Once, All Verified" led by Shicheng Liu.',
  },
  {
    date: "Mar 2024",
    event:
    'Jackie Yang presented the paper <a href="https://jya.ng/amma">AMMA: Adaptive Multimodal Assistants Through Automated State Tracking and User Model-Directed Guidance Planning</a> at the 2024 IEEE Conference on Virtual Reality and 3D User Interfaces (VR), Orlando, FL.',
  },
  {
    date: "Dec 2023",
    event:
      'Elizaveta Pertseva presented the paper <a href="https://arxiv.org/abs/2305.14202">Fine-tuned LLMs Know More, Hallucinate Less with Few-Shot Sequence-to-Sequence Semantic Parsing over Wikidata</a> at the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP), Singapore.',
  },
  {
    date: "Dec 2023",
    event:
      'Sina Semnani presented the paper <a href="https://arxiv.org/abs/2305.14292">WikiChat: Stopping the Hallucination of Large Language Model Chatbots by Few-Shot Grounding on Wikipedia</a> at the Findings of the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP), Singapore.',
  },

  {
    date: "July 2023",
    event:
      'Mehrad Moradshahi presented the paper <a href=https://arxiv.org/abs/2306.17674">X-RiSAWOZ: High-Quality End-to-End Multilingual Dialogue Datasets and Few-shot Agents</a> at the Association for Computational Linguistics (ACL), Toronto, Canada.',
  },
  {
    date: "May 2023",
    event:
      'Monica Lam presented a plenary talk "Controlling and Grounding Large Language Models for Conversational Assistants" at the Xpo Research Symposium of the Institute for Computational and Mathematical Engineering.',
  },
  {
    date: "May 2023",
    event:
      'Mehrad Moradshahi presented two papers <a href="https://arxiv.org/abs/2302.09424">Zero and Few-Shot Localization of Task-Oriented Dialogue Agents with a Distilled Representation</a> and <a href="https://arxiv.org/abs/2111.02574">Contextual Semantic Parsing for Multilingual Task-Oriented Dialogues</a> at the European Chapter of the Association for Computational Linguistics (EACL), Dubrovnik, Croatia.',
  },
  {
    date: "April 2023",
    event:
      'Monica Lam presented <a href=https://www.youtube.com/watch?v=Sj4S_eGJitI">"Controlling and Grounding Large Language Models for Conversational Assistants"</a> at the Generative AI and Foundation Models Workshop in the Computer Science Annual Affiliates Meeting.',
  },
  {
    date: "Nov 2022",
    event:
      "Monica Lam presented a keynote at the 9th International Conference on Information Management and Big Data (SIMBig) in Lima, Peru.",
  },
  {
    date: "Nov 2022",
    event:
      'Monica Lam presented a keynote on "Taming Neural Language Models into Trustworthy Conversational Virtual Assistants" at the Open Data Science Conference in San Francisco.',
  },
];

export default function News() {
  return (
    <ul>
      {newsItems.map((item) => (
        <>
          <li>
            <p class="py-2 text-lg">
              <span class="opacity-50">{item.date} —</span>{" "}
              <span
                class="news-link"
                dangerouslySetInnerHTML={{ __html: item.event }}
              ></span>
            </p>
          </li>
        </>
      ))}
    </ul>
  );
}
