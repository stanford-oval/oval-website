import{r as h}from"./index.NEDEFKed.js";/* empty css                       */var d={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=h,c=Symbol.for("react.element"),g=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,m=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function p(t,e,s){var a,r={},i=null,l=null;s!==void 0&&(i=""+s),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(a in e)f.call(e,a)&&!v.hasOwnProperty(a)&&(r[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps,e)r[a]===void 0&&(r[a]=e[a]);return{$$typeof:c,type:t,key:i,ref:l,props:r,_owner:m.current}}o.Fragment=g;o.jsx=p;o.jsxs=p;d.exports=o;var n=d.exports;const M=[{date:"Mar 2024",event:'Jackie Yang presented the paper <a href="https://jya.ng/amma">AMMA: Adaptive Multimodal Assistants Through Automated State Tracking and User Model-Directed Guidance Planning</a> at the 2024 IEEE Conference on Virtual Reality and 3D User Interfaces (VR), Orlando, FL.'},{date:"Dec 2023",event:'Elizaveta Pertseva presented the paper <a href="https://arxiv.org/abs/2305.14202">Fine-tuned LLMs Know More, Hallucinate Less with Few-Shot Sequence-to-Sequence Semantic Parsing over Wikidata</a> at the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP), Singapore.'},{date:"Dec 2023",event:'Sina Semnani presented the paper <a href="https://arxiv.org/abs/2305.14292">WikiChat: Stopping the Hallucination of Large Language Model Chatbots by Few-Shot Grounding on Wikipedia</a> at the Findings of the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP), Singapore.'},{date:"July 2023",event:'Mehrad Moradshahi presented the paper <a href=https://arxiv.org/abs/2306.17674">X-RiSAWOZ: High-Quality End-to-End Multilingual Dialogue Datasets and Few-shot Agents</a> at the Association for Computational Linguistics (ACL), Toronto, Canada.'},{date:"May 2023",event:'Monica Lam presented a plenary talk "Controlling and Grounding Large Language Models for Conversational Assistants" at the Xpo Research Symposium of the Institute for Computational and Mathematical Engineering.'},{date:"May 2023",event:'Mehrad Moradshahi presented two papers <a href="https://arxiv.org/abs/2302.09424">Zero and Few-Shot Localization of Task-Oriented Dialogue Agents with a Distilled Representation</a> and <a href="https://arxiv.org/abs/2111.02574">Contextual Semantic Parsing for Multilingual Task-Oriented Dialogues</a> at the European Chapter of the Association for Computational Linguistics (EACL), Dubrovnik, Croatia.'},{date:"April 2023",event:'Monica Lam presented <a href=https://www.youtube.com/watch?v=Sj4S_eGJitI">"Controlling and Grounding Large Language Models for Conversational Assistants"</a> at the Generative AI and Foundation Models Workshop in the Computer Science Annual Affiliates Meeting.'},{date:"Nov 2022",event:"Monica Lam presented a keynote at the 9th International Conference on Information Management and Big Data (SIMBig) in Lima, Peru."},{date:"Nov 2022",event:'Monica Lam presented a keynote on "Taming Neural Language Models into Trustworthy Conversational Virtual Assistants" at the Open Data Science Conference in San Francisco.'}];function S(){return n.jsx("ul",{children:M.map(t=>n.jsx(n.Fragment,{children:n.jsx("li",{children:n.jsxs("p",{class:"py-2 text-lg",children:[n.jsxs("span",{class:"opacity-50",children:[t.date," —"]})," ",n.jsx("span",{class:"news-link",dangerouslySetInnerHTML:{__html:t.event}})]})})}))})}export{S as default};
