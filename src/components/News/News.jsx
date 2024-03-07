import styles from "./news.css";

const newsItems = [
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

export default function DropdownMenu() {
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
