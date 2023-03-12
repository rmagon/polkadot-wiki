"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1957],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=o,u=m["".concat(l,".").concat(d)]||m[d]||h[d]||s;return a?n.createElement(u,r(r({ref:t},p),{},{components:a})):n.createElement(u,r({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},15474:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),o=a(63366),s=(a(67294),a(3905)),r=["components"],i={id:"learn-xcm",title:"Introduction to Cross-Consensus Message Format (XCM)",sidebar_label:"Cross-Consensus Message Format (XCM)",description:"Learn about the messaging format at the forefront of interoperability.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm"},l=void 0,c={unversionedId:"learn/learn-xcm",id:"learn/learn-xcm",title:"Introduction to Cross-Consensus Message Format (XCM)",description:"Learn about the messaging format at the forefront of interoperability.",source:"@site/../docs/learn/learn-xcm.md",sourceDirName:"learn",slug:"/learn-xcm",permalink:"/docs/learn-xcm",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-xcm.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1678551021,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{id:"learn-xcm",title:"Introduction to Cross-Consensus Message Format (XCM)",sidebar_label:"Cross-Consensus Message Format (XCM)",description:"Learn about the messaging format at the forefront of interoperability.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm"},sidebar:"docs",previous:{title:"Bridges",permalink:"/docs/learn-bridges"},next:{title:"XCM Pallet",permalink:"/docs/learn-xcm-pallet"}},p={},m=[{value:"A Format, Not a Protocol",id:"a-format-not-a-protocol",level:2},{value:"XCM Tech Stack",id:"xcm-tech-stack",level:3},{value:"XCM v3 - What&#39;s new?",id:"xcm-v3---whats-new",level:2},{value:"Why does XCM v3 matter?",id:"why-does-xcm-v3-matter",level:3},{value:"XCM v3 Instruction &amp; Register Overview",id:"xcm-v3-instruction--register-overview",level:3},{value:"Programmability",id:"programmability",level:4},{value:"Functional Multichain Decomposition",id:"functional-multichain-decomposition",level:4},{value:"Cross-Consensus Message Format (XCM)",id:"cross-consensus-message-format-xcm",level:4},{value:"The Anatomy of an XCMP Interaction",id:"the-anatomy-of-an-xcmp-interaction",level:4},{value:"Resources",id:"resources",level:2}],h={toc:m};function d(e){var t=e.components,i=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Cross-Consensus Message Format, or ",(0,s.kt)("strong",{parentName:"p"},"XCM"),", is a ",(0,s.kt)("strong",{parentName:"p"},"messaging format")," and language used to\ncommunicate between consensus systems."),(0,s.kt)("p",null,'One of Polkadot\'s main functionalities is\ninteroperability amongst parachains and any other participating consensus-driven systems. XCM is the\nlanguage through which complex, cross-consensus interactions can occur. Two blockchains can "speak"\nXCM to seamlessly interact with each other using a standard messaging format.'),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"We typically discuss XCM in the context of parachains, but please bear this in mind that it expands\nto the domain of all consensus systems! Remember, a consensus system here means any system or\nprotocol that achieves finality to agree on the latest and correct state, whether it's a Polkadot\nparachain, an EVM smart contract, or other bridged consensus systems.")),(0,s.kt)("p",null,"XCM is not meant to be only specific to\nPolkadot, but rather its primary intention is\nto define a ",(0,s.kt)("strong",{parentName:"p"},"generic")," and ",(0,s.kt)("strong",{parentName:"p"},"common")," format amongst different consensus systems to communicate."),(0,s.kt)("p",null,"It's important to note that XCM does not define how messages are delivered but rather define how\nthey should look, act, and contain relative instructions to the on-chain actions the message intends\nto perform."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/learn-xcm-transport"},(0,s.kt)("strong",{parentName:"a"},"XCMP")),", or Cross Chain Message Passing, is the actual network-layer\nprotocol to deliver XCM-formatted messages to other participating parachains. There are also other\nways to define transport layer protocols for delivering XCM messages."),(0,s.kt)("p",null,"XCM has four high-level core design principles which it stands to follow:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Asynchronous"),": XCM messages in no way assume that the sender will be blocking on its\ncompletion."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Absolute"),": XCM messages are guaranteed to be delivered and interpreted accurately, in order\nand in a timely fashion. Once a message is sent, one can be sure it will be processed as it was\nintended to be."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Asymmetric"),": XCM messages, by default, do not have results that let the sender know that the\nmessage was received - they follow the 'fire and forget' paradigm. Any results must be separately\ncommunicated to the sender with an additional message back to the origin."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Agnostic"),": XCM makes no assumptions about the nature of the consensus systems between which\nthe messages are being passed. XCM as a message format should be usable in any system that\nderives finality through consensus.")),(0,s.kt)("p",null,"These four crucial design decisions allow for XCM messages to be a reliable yet convenient way to\nproperly convey the intentions from one consensus system to another without any compatibility\nissues."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"XCM is a work-in-progress - meaning the format is expected to change over time. XCM v2 is deployed\non Polkadot and v3 is currently close to\ndeployment. Learn more about XCM v3 and its new features in the ",(0,s.kt)("a",{parentName:"p",href:"#resources"},"resources")," and the\n",(0,s.kt)("a",{parentName:"p",href:"#xcm-v3---whats-new"},"XCM v3")," sections!")),(0,s.kt)("h2",{id:"a-format-not-a-protocol"},"A Format, Not a Protocol"),(0,s.kt)("p",null,"What started as an approach to ",(0,s.kt)("em",{parentName:"p"},"cross-chain communication"),", has evolved into a format for\n",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.network/cross-chain-communication"},(0,s.kt)("strong",{parentName:"a"},"Cross-Consensus Communication"))," that is not\nonly conducted between chains, but also between smart contracts, pallets, bridges, and even sharded\nenclaves like ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-spree"},"SPREE"),"."),(0,s.kt)("p",null,"XCM cannot actually send messages between systems. It is a format for how message transfer should be\nperformed, similar to how RESTful services use REST as an architectural style of development, where\nHTTP requests contain specific parameters to perform some action."),(0,s.kt)("p",null,'Similar to UDP, out of the box XCM is a "fire and forget" model, unless there is a separate XCM\nmessage designed to be a response message which can be sent from the recipient to the sender. All\nerror handling should also be done on the recipient side.'),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"XCM is not designed in a way where every system supporting the format is expected to be able to\ninterpret any possible XCM message. Practically speaking, one can imagine that some messages will\nnot have reasonable interpretations under some systems or will be intentionally unsupported.")),(0,s.kt)("p",null,"Furthermore, it's essential to realize that XCM messages by themselves are ",(0,s.kt)("em",{parentName:"p"},"not")," considered\ntransactions. XCM describes how to change the state of the target network, but the message by itself\ndoesn't perform the state change."),(0,s.kt)("p",null,"This partly ties to what is called ",(0,s.kt)("strong",{parentName:"p"},"asynchronous composability"),", which allows XCM messages to\nbypass the concept of time-constrained mechanisms, like on-chain scheduling and execution over time\nin the correct order in which it was intended."),(0,s.kt)("h3",{id:"xcm-tech-stack"},"XCM Tech Stack"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"xcm tech stack",src:a(67887).Z,width:"1204",height:"1316"})),(0,s.kt)("p",null,"XCM can be used to express the meaning of the messages over each of these three communication\nchannels."),(0,s.kt)("h2",{id:"xcm-v3---whats-new"},"XCM v3 - What's new?"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/pull/4097/"},"XCM v3")," is currently in the process of being\napproved and audited but is merged in the Polkadot codebase. The upgrade to XCM v3 will open the\ndoors to multi-hop, multi-network communications."),(0,s.kt)("p",null,"XCM v3 introduces some key features and additions to cross-consensus messaging, including:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Programmability")," - the ability to have ",(0,s.kt)("strong",{parentName:"p"},"expectations")," for messages, which allow for more\ncomprehensive use cases, safe dispatches for version checking, branching, and NFT/Asset support.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Functional Multichain Decomposition")," - the ability to define mechanisms to cross-reference and\nperform actions on other chains on behalf of the origin chain (remote locking), context/id for\nthese messages, and asset namespacing.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Bridging")," - introduces the concept of a universal location, which allows for a base reference\nfor global consensus systems for multi-hop setups. This location is above the parent relay chain\nor other consensus systems like Ethereum or Bitcoin."))),(0,s.kt)("h3",{id:"why-does-xcm-v3-matter"},"Why does XCM v3 matter?"),(0,s.kt)("p",null,"A core part of the vision that XCM v3 provides is improving communication between the chains to make\n",(0,s.kt)("strong",{parentName:"p"},"system parachains")," a reality. For example, the Polkadot relay chain handles more than just\nparachain management and shared security - it handles user balances/assets, auctions, governance,\nand staking. Ideally, the relay chain should be for what it's intended to be - a place for shared\nsecurity. System parachains can alleviate these core responsibilities from the relay chain but only\nby using a standard format like XCM."),(0,s.kt)("p",null,"This is where system parachains come in, where each of these core responsibilities can be delegated\nto a system parachain respectively."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"XCM v3's bridging, functional multichain decomposition, and programmability upgrades are crucial to\nbringing ecosystems together using a common communication abstraction.")),(0,s.kt)("h3",{id:"xcm-v3-instruction--register-overview"},"XCM v3 Instruction & Register Overview"),(0,s.kt)("p",null,"To reflect the functionality above, XCM v3 introduced a multitude of new instructions to include\nwithin its messages. This list isn't exhaustive, however contains the necessary instruction sets to\nshowcase the previously explained concepts of XCM v3."),(0,s.kt)("p",null,"New registers have been introduced in order to accommodate some of the new instructions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Transact Status Register")," - A register that primarily handles the status when checking the\nversions between the origin, destination chain, and the requested pallet located on the\ndestination chain.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Topic Register")," - A register that can set any value and is for use cases such as crafting IDs for\nmessages. A ",(0,s.kt)("inlineCode",{parentName:"p"},"Topic")," is also part of ",(0,s.kt)("inlineCode",{parentName:"p"},"XcmContext"),"."))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Note that most of these instruction definitions came from the source code, which you may\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/master/xcm/src/v3/mod.rs"},"explore for more depth!"))),(0,s.kt)("h4",{id:"programmability"},"Programmability"),(0,s.kt)("p",null,"These are the primary instructions that enable programmability and branching to be possible.\nBranching in this context is the ability for errors and logic to be handled as needed when dealing\nwith a message."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format/tree/master#expectassetmultiassets"},(0,s.kt)("inlineCode",{parentName:"a"},"ExpectAsset(MultiAssets)"))," -\nChecks if the Holding register has a specific amount of assets, throws an error if it doesn't.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format/tree/master#expecterroroptionu32-error"},(0,s.kt)("inlineCode",{parentName:"a"},"ExpectError(Option<(u32, Error)>)"))," -\nEnsures the Error register contains the given error, and throws an error if it doesn't.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format/tree/master#expectoriginmultilocation"},(0,s.kt)("inlineCode",{parentName:"a"},"ExpectOrigin(MultiLocation)"))," -\nEnsures the Origin register contains the expected origin, and throws an error if it doesn't.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"QueryPallet")," - Queries the existence of a particular pallet type.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"ExpectPallet")," - Ensure that a particular pallet with a particular version exists.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"ReportTransactStatus(QueryResponseInfo)")," - Send a ",(0,s.kt)("inlineCode",{parentName:"p"},"QueryResponse")," message containing the value of\nthe Transact Status Register to some destination.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"ClearTransactStatus")," - Set the Transact Status Register to its default, cleared, value."))),(0,s.kt)("h4",{id:"functional-multichain-decomposition"},"Functional Multichain Decomposition"),(0,s.kt)("p",null,"These instructions highlight the key instructions focused on Functional Multichain Decomposition."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"LockAsset(MultiAsset, MultiLocation)")," - Lock the locally held asset and prevent further transfer\nor withdrawal.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"UnlockAsset(MultiAsset, MultiLocation)")," - Remove the lock over ",(0,s.kt)("inlineCode",{parentName:"p"},"asset")," on this chain and (if\nnothing else is preventing it) allow the asset to be transferred.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"NoteUnlockable(MultiAsset, MultiLocation)")," - Asset (",(0,s.kt)("inlineCode",{parentName:"p"},"asset"),") has been locked on the ",(0,s.kt)("inlineCode",{parentName:"p"},"origin"),"\nsystem and may not be transferred. It may only be unlocked with the receipt of the ",(0,s.kt)("inlineCode",{parentName:"p"},"UnlockAsset"),"\ninstruction from this chain.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"RequestUnlock(MultiAsset, MultiLocation)")," - Send an ",(0,s.kt)("inlineCode",{parentName:"p"},"UnlockAsset")," instruction to the ",(0,s.kt)("inlineCode",{parentName:"p"},"locker")," for\nthe given ",(0,s.kt)("inlineCode",{parentName:"p"},"asset"),"."))),(0,s.kt)("h4",{id:"cross-consensus-message-format-xcm"},"Cross-Consensus Message Format (XCM)"),(0,s.kt)("p",null,"For an updated and complete description of the cross-consensus message format please see the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format"},"xcm-format repository on GitHub"),"."),(0,s.kt)("h4",{id:"the-anatomy-of-an-xcmp-interaction"},"The Anatomy of an XCMP Interaction"),(0,s.kt)("p",null,"A smart contract that exists on parachain ",(0,s.kt)("inlineCode",{parentName:"p"},"A")," will route a message to parachain ",(0,s.kt)("inlineCode",{parentName:"p"},"B")," in which another\nsmart contract is called that makes a transfer of some assets within that chain."),(0,s.kt)("p",null,"Charlie executes the smart contract on parachain ",(0,s.kt)("inlineCode",{parentName:"p"},"A"),", which initiates a new cross-chain message for\nthe destination of a smart contract on parachain ",(0,s.kt)("inlineCode",{parentName:"p"},"B"),"."),(0,s.kt)("p",null,"The collator node of parachain ",(0,s.kt)("inlineCode",{parentName:"p"},"A")," will place this new cross-chain message into its outbound\nmessages queue, along with a ",(0,s.kt)("inlineCode",{parentName:"p"},"destination")," and a ",(0,s.kt)("inlineCode",{parentName:"p"},"timestamp"),"."),(0,s.kt)("p",null,"The collator node of parachain ",(0,s.kt)("inlineCode",{parentName:"p"},"B")," routinely pings all other collator nodes asking for new messages\n(filtering by the ",(0,s.kt)("inlineCode",{parentName:"p"},"destination")," field). When the collator of parachain ",(0,s.kt)("inlineCode",{parentName:"p"},"B")," makes its next ping, it\nwill see this new message on parachain ",(0,s.kt)("inlineCode",{parentName:"p"},"A")," and add it into its own inbound queue for processing into\nthe next block."),(0,s.kt)("p",null,"Validators for parachain ",(0,s.kt)("inlineCode",{parentName:"p"},"A")," will also read the outbound queue and know the message. Validators for\nparachain ",(0,s.kt)("inlineCode",{parentName:"p"},"B")," will do the same. This is so that they will be able to verify the message transmission\nhappened."),(0,s.kt)("p",null,"When the collator of parachain ",(0,s.kt)("inlineCode",{parentName:"p"},"B")," is building the next block in its chain, it will process the new\nmessage in its inbound queue as well as any other messages it may have found/received."),(0,s.kt)("p",null,"During processing, the message will execute the smart contract on parachain ",(0,s.kt)("inlineCode",{parentName:"p"},"B")," and complete the\nasset transfer as intended."),(0,s.kt)("p",null,"The collator now hands this block to the validator, which itself will verify that this message was\nprocessed. If the message was processed and all other aspects of the block are valid, the validator\nwill include this block for parachain ",(0,s.kt)("inlineCode",{parentName:"p"},"B")," into the Relay Chain."),(0,s.kt)("p",null,"Check out our animated video below that explores how XCMP works."),(0,s.kt)("video",{controls:"controls",name:"XCMP Animated Video",width:"560",height:"315",src:"https://storage.googleapis.com/w3f-tech-ed-contents/XCMP.mp4"}," Sorry, your browser doesn't support embedded videos. "),(0,s.kt)("h2",{id:"resources"},"Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=cS8GvPGMLS0"},"Shawn Tabrizi: XCM - The Backbone Of A Multichain Future | Polkadot Decoded 2022")," -\nHigh level overview which should answer \u201cWhat is XCM?")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392"},"XCM: The Cross-Consensus Message Format")," -\nDetailed blog post by Dr. Gavin Wood about the XCM Format.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format"},"XCM Format specification")," - The best starting point for\nunderstanding the XCM API at a technical level.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=K2c6xrCoQOU&t=1196s"},"Gavin Wood, Polkadot founder: XCM v3 | Polkadot Decoded 2022")," -\nHigh level overview of XCM and specifically the new features available in XCM v3.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/XCMP.html"},"XCMP Scheme")," - Full technical\ndescription of cross-chain communication on the Web3 Foundation research wiki.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/types/messages.html"},"Messaging Overview")," - An overview\nof the messaging schemes from the Polkadot Parachain Host Implementor's guide.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=5cgq5jOZx9g"},"Sub0 Online: Getting Started with XCM - Your First Cross Chain Messages")," -\nCode focused workshop on how XCM v1 works, and the core concepts of XCM.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://blog.quarkslab.com/resources/2022-02-27-xcmv2-audit/21-12-908-REP.pdf"},"XCM: Cross-Consensus Messaging Audit")," -\nTechnical audit report by Quarkslab prepared for Parity.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/master/xcm/pallet-xcm/src/lib.rs"},"XCM pallet code")," -\nThe pallet that contains XCM logic from the Polkadot code repository")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=bFMvWmU1pYI"},"XCM Config & Pallet-XCM | Polkadot Deep Dives")," - A\ntechnical deep dive into ",(0,s.kt)("inlineCode",{parentName:"p"},"pallet-xcm")," and the XCM configuration."))))}d.isMDXComponent=!0},67887:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cross-consensus-tech-stack-e9c1b2ab8b6f6f3f9a78b3a412af0698.png"}}]);