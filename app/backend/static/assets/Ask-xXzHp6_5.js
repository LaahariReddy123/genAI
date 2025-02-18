import{r as e,bW as Ge,bM as Qe,bH as s,bY as Me}from"./vendor-BRyA30P7.js";import{R as W,G as De,V as Y,u as b,L as He,U as qe,S as ze,Q as We,a as Ye,E as Je,A as Ke,b as u,c as Xe,d as Ze,e as $e,r as et,T as tt,f as st,g as at,h as nt}from"./index-CEdSd-oI.js";import{b as ot,g as it,D as rt}from"./fluentui-react-D56dXhbc.js";import"./fluentui-icons-Bed18Fcv.js";const ct="_askContainer_1rw8c_1",lt="_askTopSection_1rw8c_8",ut="_askBottomSection_1rw8c_15",pt="_askTitle_1rw8c_25",mt="_askQuestionInput_1rw8c_31",St="_askAnswerContainer_1rw8c_37",dt="_askAnalysisPanel_1rw8c_44",ht="_askSettingsSeparator_1rw8c_49",kt="_settingsButton_1rw8c_55",gt="_commandsContainer_1rw8c_61",_t="_commandButton_1rw8c_68",n={askContainer:ct,askTopSection:lt,askBottomSection:ut,askTitle:pt,askQuestionInput:mt,askAnswerContainer:St,askAnalysisPanel:dt,askSettingsSeparator:ht,settingsButton:kt,commandsContainer:gt,commandButton:_t};function wt(){const[y,p]=e.useState(!1),[m,J]=e.useState(""),[S,K]=e.useState(""),[d,X]=e.useState(""),[A,Z]=e.useState(.3),[h,$]=e.useState(null),[P,ee]=e.useState(0),[v,te]=e.useState(0),[j,O]=e.useState(W.Hybrid),[B,se]=e.useState(3),[R,I]=e.useState(!0),[L,ae]=e.useState(!1),[k,ne]=e.useState(!1),[U,oe]=e.useState(De.TextAndImages),[g,ie]=e.useState(""),[_,re]=e.useState(""),[ce,le]=e.useState(""),[V,ue]=e.useState([Y.Embedding,Y.ImageEmbedding]),[F,pe]=e.useState(!1),[N,me]=e.useState(!1),[Se,de]=e.useState(!1),[he,ke]=e.useState(!1),[ge,_e]=e.useState(!1),[we,Ce]=e.useState(!1),[xe,Te]=e.useState(!1),[fe,be]=e.useState(!1),[ye,Ae]=e.useState(!1),[Pe,ve]=e.useState(!1),je=e.useRef(new Audio).current,[Oe,Be]=e.useState(!1),w=e.useRef(""),[C,E]=e.useState(!1),[c,G]=e.useState(),[i,Re]=e.useState(),[Ie,Q]=e.useState([]),Le={speechUrls:Ie,setSpeechUrls:Q,audio:je,isPlaying:Oe,setIsPlaying:Be},[M,D]=e.useState(),[l,r]=e.useState(void 0),H=b?Ge().instance:void 0,{loggedIn:q}=e.useContext(He),Ue=async()=>{st().then(t=>{de(t.showGPT4VOptions),I(t.showSemanticRankerOption),ke(t.showSemanticRankerOption),_e(t.showVectorOption),t.showVectorOption||O(W.Text),Ce(t.showUserUpload),Te(t.showLanguagePicker),be(t.showSpeechInput),Ae(t.showSpeechOutputBrowser),ve(t.showSpeechOutputAzure)})};e.useEffect(()=>{Ue()},[]);const x=async t=>{w.current=t,c&&G(void 0),E(!0),D(void 0),r(void 0);const a=H?await at(H):void 0;try{const f={messages:[{content:t,role:"user"}],context:{overrides:{prompt_template:m.length===0?void 0:m,prompt_template_prefix:S.length===0?void 0:S,prompt_template_suffix:d.length===0?void 0:d,include_category:g.length===0?void 0:g,exclude_category:_.length===0?void 0:_,top:B,temperature:A,minimum_reranker_score:P,minimum_search_score:v,retrieval_mode:j,semantic_ranker:R,semantic_captions:L,use_oid_security_filter:F,use_groups_security_filter:N,vector_fields:V,use_gpt4v:k,gpt4v_input:U,language:z.language,...h!==null?{seed:h}:{}}},session_state:i?i.session_state:null},Ee=await nt(f,a);Re(Ee),Q([null])}catch(f){G(f)}finally{E(!1)}},Ve=(t,a)=>{switch(t){case"promptTemplate":J(a);break;case"promptTemplatePrefix":K(a);break;case"promptTemplateSuffix":X(a);break;case"temperature":Z(a);break;case"seed":$(a);break;case"minimumRerankerScore":ee(a);break;case"minimumSearchScore":te(a);break;case"retrieveCount":se(a);break;case"useSemanticRanker":I(a);break;case"useSemanticCaptions":ae(a);break;case"excludeCategory":re(a);break;case"includeCategory":ie(a);break;case"useOidSecurityFilter":pe(a);break;case"useGroupsSecurityFilter":me(a);break;case"useGPT4V":ne(a);break;case"gpt4vInput":oe(a);break;case"vectorFieldList":ue(a);break;case"retrievalMode":O(a);break}},Fe=t=>{x(t),le(t)},Ne=t=>{M===t&&l===u.CitationTab?r(void 0):(D(t),r(u.CitationTab))},T=t=>{r(l===t?void 0:t)},{t:o,i18n:z}=Qe();return s.jsxs("div",{className:n.askContainer,children:[s.jsx(Me,{children:s.jsx("title",{children:o("pageTitle")})}),s.jsxs("div",{className:n.askTopSection,children:[s.jsxs("div",{className:n.commandsContainer,children:[we&&s.jsx(qe,{className:n.commandButton,disabled:q}),s.jsx(ze,{className:n.commandButton,onClick:()=>p(!y)})]}),s.jsx("h1",{className:n.askTitle,children:o("askTitle")}),s.jsx("div",{className:n.askQuestionInput,children:s.jsx(We,{placeholder:o("gpt4vExamples.placeholder"),disabled:C,initQuestion:ce,onSend:t=>x(t),showSpeechInput:fe})})]}),s.jsxs("div",{className:n.askBottomSection,children:[C&&s.jsx(ot,{label:o("generatingAnswer")}),!w.current&&s.jsxs("div",{className:n.askTopSection,children:[xe&&s.jsx(Ye,{onLanguageChange:t=>z.changeLanguage(t)}),s.jsx(Je,{onExampleClicked:Fe,useGPT4V:k})]}),!C&&i&&!c&&s.jsx("div",{className:n.askAnswerContainer,children:s.jsx(Ke,{answer:i,index:0,speechConfig:Le,isStreaming:!1,onCitationClicked:t=>Ne(t),onThoughtProcessClicked:()=>T(u.ThoughtProcessTab),onSupportingContentClicked:()=>T(u.SupportingContentTab),showSpeechOutputAzure:Pe,showSpeechOutputBrowser:ye})}),c?s.jsx("div",{className:n.askAnswerContainer,children:s.jsx(Xe,{error:c.toString(),onRetry:()=>x(w.current)})}):null,l&&i&&s.jsx(Ze,{className:n.askAnalysisPanel,activeCitation:M,onActiveTabChanged:t=>T(t),citationHeight:"600px",answer:i,activeTab:l})]}),s.jsxs(it,{headerText:o("labels.headerText"),isOpen:y,isBlocking:!1,onDismiss:()=>p(!1),closeButtonAriaLabel:o("labels.closeButton"),onRenderFooterContent:()=>s.jsx(rt,{onClick:()=>p(!1),children:o("labels.closeButton")}),isFooterAtBottom:!0,children:[s.jsx($e,{promptTemplate:m,promptTemplatePrefix:S,promptTemplateSuffix:d,temperature:A,retrieveCount:B,seed:h,minimumSearchScore:v,minimumRerankerScore:P,useSemanticRanker:R,useSemanticCaptions:L,excludeCategory:_,includeCategory:g,retrievalMode:j,useGPT4V:k,gpt4vInput:U,vectorFieldList:V,showSemanticRankerOption:he,showGPT4VOptions:Se,showVectorOption:ge,useOidSecurityFilter:F,useGroupsSecurityFilter:N,useLogin:!!b,loggedIn:q,requireAccessControl:et,onChange:Ve}),b&&s.jsx(tt,{})]})]})}wt.displayName="Ask";export{wt as Component};
//# sourceMappingURL=Ask-xXzHp6_5.js.map
