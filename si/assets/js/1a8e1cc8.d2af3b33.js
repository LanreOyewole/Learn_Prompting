"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5506],{10314:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>h,metadata:()=>l,toc:()=>d});var n=o(87462),i=(o(67294),o(3905));const s=o.p+"assets/images/zero_shot-1af9e1cb88412f9fdefa3b07b67c4193.png",a=o.p+"assets/images/zero_shot_example-89065990663d4ef044011844ff77f9af.png";var r=o(39145);const h={sidebar_position:4},p="\ud83d\udfe2 Zero Shot Chain of Thought",l={unversionedId:"intermediate/zero_shot_cot",id:"intermediate/zero_shot_cot",title:"\ud83d\udfe2 Zero Shot Chain of Thought",description:"Zero Shot Chain of Thought (Zero-shot-CoT) prompting (@kojima2022large) is a",source:"@site/docs/intermediate/zero_shot_cot.md",sourceDirName:"intermediate",slug:"/intermediate/zero_shot_cot",permalink:"/si/docs/intermediate/zero_shot_cot",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/intermediate/zero_shot_cot.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Chain of Thought Prompting",permalink:"/si/docs/intermediate/chain_of_thought"},next:{title:"\ud83d\udfe1 Self-Consistency",permalink:"/si/docs/intermediate/self_consistency"}},m={},d=[{value:"Example",id:"example",level:2},{value:"Incorrect",id:"incorrect",level:4},{value:"Correct",id:"correct",level:4},{value:"Results",id:"results",level:2},{value:"Ablations of Interest",id:"ablations-of-interest",level:2},{value:"Notes",id:"notes",level:2}],c={toc:d},f="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(f,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-zero-shot-chain-of-thought"},"\ud83d\udfe2 Zero Shot Chain of Thought"),(0,i.kt)("p",null,"Zero Shot Chain of Thought (Zero-shot-CoT) prompting",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," is a\nfollow up to ",(0,i.kt)("a",{parentName:"p",id:"CoT prompting_2_20_1677942332489","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT prompting"),(0,i.kt)(r.u,{anchorId:"CoT prompting_2_20_1677942332489",clickable:!0,mdxType:"Tooltip"}),(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),', which introduces an incredibly\nsimple zero shot prompt. They find that by appending the words "',(0,i.kt)("strong",{parentName:"p"},"Let's think step\nby step."),'" to the end of a question, LLMs are able to generate a chain of\nthought that answers the question. From this chain of thought, they are able to\nextract more accurate answers.'),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:s,style:{width:"500px"}})),(0,i.kt)("div",{style:{textAlign:"center"}},"Zero Shot CoT (Kojima et al.)"),(0,i.kt)("p",null,"Technically, the full Zero-shot-CoT process involves two separate prompts/completions.\nIn the below image, the top bubble on the left generates a chain of thought, while the top bubble on\nthe right takes in the output from the first prompt (including the first prompt itself),\nand extracts the answer from the chain of thought. This second prompt is a ",(0,i.kt)("em",{parentName:"p"},"self augmented")," prompt."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a,style:{width:"500px"}})),(0,i.kt)("div",{style:{textAlign:"center"}},"Full Zero Shot CoT Process (Kojima et al.)"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Here are a few demos (which only perform reasoning extraction). This first\ndemo shows GPT-3 (davinci-003) failing a simple math question, while the second demo uses a\nZero-shot-CoT prompt and successfully solves the problem. Feel free to enter your\nOpenAI API key (Click Generate) and play around with the examples. Note how much simpler\nthe Zero-shot-CoT prompt is compared to the CoT prompt."),(0,i.kt)("h4",{id:"incorrect"},"Incorrect"),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"If John has 5 pears, then eats 2, and buys 5 more, then gives 3 to his friend, how many pears does he have?","initial-response":"John has 8 pears.","max-tokens":"256","box-rows":"3","model-temp":"0.7","top-p":"1"}),(0,i.kt)("h4",{id:"correct"},"Correct"),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"If John has 5 pears, then eats 2, and buys 5 more, then gives 3 to his friend, how many pears does he have?\\n\\nLet's think step by step.","initial-response":"John starts with 5 pears. He eats 2 pears, leaving him with 3 pears. He buys 5 more pears, giving him a total of 8 pears. He gives 3 pears to his friend, leaving him with only 5 pears.","max-tokens":"256","box-rows":"5","model-temp":"0.7","top-p":"1"}),(0,i.kt)("h2",{id:"results"},"Results"),(0,i.kt)("p",null,"Zero-shot-CoT was also effective in improving results on arithmetic, commonsense,\nand symbolic reasoning tasks. However, unsurprisingly, it was usually not as\neffective as CoT prompting. An important use case for Zero-shot-CoT is when obtaining\nfew shot examples for CoT prompting is difficult. "),(0,i.kt)("h2",{id:"ablations-of-interest"},"Ablations of Interest"),(0,i.kt)("p",null,'Kojima et al. experiment with a number of different Zero-shot-CoT prompts\n(e.g. "Let\u2019s solve this problem by splitting it into steps." or "Let\u2019s think about this logically."), but they find that "Let\'s think step by step" is most effective for their\nchosen tasks.'),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"The extraction step often must be task specific, making Zero-Shot-CoT less\ngeneralizable than it appears at first."),(0,i.kt)("p",null,"Anecdotally, I've found that Zero-shot-CoT style prompts are sometimes effective\nin improving the length of completions for generative tasks. For example, consider\nthe standard prompt ",(0,i.kt)("inlineCode",{parentName:"p"},"Write a story about a frog and a mushroom who become friends."),"\nAppending the words ",(0,i.kt)("inlineCode",{parentName:"p"},"Let's think step by step.")," to the end of this prompt leads to\na much longer completion."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large Language Models are Zero-Shot Reasoners.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);