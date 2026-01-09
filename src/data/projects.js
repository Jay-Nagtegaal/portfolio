export const projectsData = [
  {
    id: 4,
    title: "Photobooth darktech",
    category: "school",
    status: "in-progress",
    tags: ["Python", "JavaScript", "MySQL", "Docker", "Hosting", "Raspberry Pi", "FastAPI", "Vue"],
    description: "A photobooth application developed for a school project, featuring image capture, filters, and social media sharing.",
    headerImage: new URL("./Images/booth.jpeg", import.meta.url).href,
    content: "In dit project heb ik samen met mijn klasgoten een Fysieke fotobooth gebouwd die foto's maaktt en laat analyseren door ai. De fotobooth runt op een Raspberry Pi 5 en runt een website die wij zelf hosten op een VPS in Duitsland. De fotos worden geanlyseerd door verschilende AI modellen en geven vervolgen aannames over het persoon in beeld.\n\nBelangrijke kenmerken:\n- Foto's maken met een hoge-resolutie camera\n- API connectie van AI Agents\n- Opslag van resultaten in een MySQL database\n- Gebruik van Docker voor eenvoudige deployment\n- Backend ontwikkeld met FastAPI en frontend met Vue.js\n\nDit project heeft me waardevolle ervaring opgeleverd in zowel hardware-integratie als webontwikkeling, en heeft mijn vaardigheden in het werken met AI-modellen versterkt. dit project is bedoeld om mensen wakker te schrikken de betrouwbaarheid van AI."
  },
  {
    id: 5,
    title: "AI Ollama Chatbot Integration",
    category: "personal",
    tags: ["Python", "JavaScript", "API", "Flask", "Vue", "AI", "Ollama"],
    description: "Mijn eerste ervaring met lokaal runnen van LLM's.",
    headerImage: new URL("./Images/bala-ollama.png", import.meta.url).href,
    content: "Ik ben bezig geweest met het lokaal draaien van LLM's. Hiervoor heb ik Ollama gebruikt, een tool die het makkelijk maakt om LLM's lokaal te draaien. Ik heb een simpele chatbot gebouwd die communiceert met de Ollama API om zo antwoorden te genereren op basis van gebruikersinvoer.\n\nBelangrijke kenmerken:\n- Integratie met Ollama API voor AI-gegenereerde antwoorden\n- Backend ontwikkeld met Flask voor het afhandelen van API-verzoeken\n- Frontend gebouwd met Vue.js voor een interactieve gebruikersinterface\n- Mogelijkheid om verschillende LLM's te selecteren en te gebruiken\n- Eenvoudige installatie en configuratie voor lokaal gebruik\n\nDit project heeft me geholpen om meer inzicht te krijgen in het werken met LLM's en het integreren van AI-functionaliteit in webapplicaties."
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "personal",
    tags: ["HTML", "CSS", "JavaScript", "Vue"],
    description: "Deze website.",
    headerImage: new URL("./Images/personalAI.png", import.meta.url).href,
    content: "Voor een school opdracht moest ik een portfolio website maken. Ik heb ervoor gekozen om mijn eigen portfolio website te maken om zo mijn vaardigheden in webontwikkeling te laten zien.\n\nBelangrijke kenmerken:\n- Responsief ontwerp met HTML en CSS\n- Interactieve elementen met JavaScript\n- Gebouwd met Vue.js voor een dynamische gebruikerservaring\n- Secties voor projecten, vaardigheden en contactinformatie\n- Eenvoudig te navigeren en visueel aantrekkelijk ontwerp\n\nDit project heeft me geholpen om mijn webontwikkelingsvaardigheden te verbeteren en een professioneel portfolio op te bouwen dat ik kan delen met potentiële werkgevers en klanten."
  },
  {
  id: 7,
    title: "AI Agent Management App",
    category: "future",
    tags: ["Vue", "API", "AI", "Agent"],
    description: "Een app die efficient met AI agent kan omgaan en zo dus werken makelijker maakt.",
    headerImage: new URL("./Images/Agents.png", import.meta.url).href,
    content: "In dit project ben ik van plan om een interface te maken om zo makkelijk meerdere AI agents te beheren en aan te sturen.\n\nBelangrijke kenmerken:\n- Meerdere AI agents kunnen aanmaken en beheren\n- Taken toewijzen aan specifieke agents\n- Real-time monitoring van agent prestaties\n- Integratie met verschillende AI modellen via API's\n- Gebruiksvriendelijke interface gebouwd met Vue.js\n\nDit project zal me helpen om mijn vaardigheden in webontwikkeling en AI-integratie verder te ontwikkelen, terwijl ik een nuttige tool creëer voor het beheren van AI agents."
  },
  {
    id: 8,
    title: "Media Management App",
    category: "personal",
    tags: ["Vue", "API", "Laravel", "PHP","Media", "Management"],
    description: "Een app die ik geschreven heb voor een gezinslid om Muziek bestanden te beheren voor evenementen.",
    headerImage: new URL("./Images/Music.jpeg", import.meta.url).href,
    content: "Dit project omvat het ontwikkelen van een media management applicatie voor het beheren van muziekbestanden voor evenementen.\n\nBelangrijke kenmerken:\n- Uploaden en organiseren van muziekbestanden\n- Maken van afspeellijsten voor verschillende evenementen\n- Zoeken en filteren van muziek op genre, artiest, etc.\n- Backend ontwikkeld met Laravel (PHP) voor robuuste functionaliteit\n- Frontend gebouwd met Vue.js voor een intuïtieve gebruikerservaring\n\nDeze applicatie helpt gebruikers om hun muziekcollectie efficiënt te beheren en snel toegang te krijgen tot de juiste nummers tijdens evenementen."
  },
  {
    id: 9,
    title: "Social Media Dashboard",
    category: "future",
    status: "in-progress",
    tags: ["Vue", "API", "Dashboard", "Social Media", "AI", "Management"],
    description: "Een dashboarding tool voor het beheren van post en de welvaart daarvan.",
    headerImage: new URL("./Images/socials.jpg", import.meta.url).href,
    content: "Deze app is bedoeld om gebruikers te helpen bij het beheren en analyseren van hun social media posts en de impact daarvan. daarmee probeer ik te leren hoe de API werkt van apps zoals instagram en twitter.\n\nBelangrijke kenmerken:\n- Integratie met verschillende social media platforms via API's\n- Overzichtelijk dashboard voor het monitoren van post prestaties\n- Analyse van betrokkenheid en bereik van posts\n- Mogelijkheid om posts te plannen en te beheren\n- Gebruiksvriendelijke interface gebouwd met Vue.js\n\nDit project zal me helpen om mijn vaardigheden in webontwikkeling en API-integratie verder te ontwikkelen, terwijl ik een nuttige tool creëer voor social media management."
  },
  {
    id: 10,
    title: "WDS systeem met MDT",
    category: "school",
    tags: ["PowerShell", "WDS", "MDT", "Deployment", "Windows"],
    description: "Een stage project waarbij ik kennis heb gemaakt met WDS en MDT voor het deployen van Windows images.",
    headerImage: new URL("./Images/wds.png", import.meta.url).href,
    content: "Bij dit project heb ik ervaring opgedaan met Windows Deployment Services (WDS) en Microsoft Deployment Toolkit (MDT) voor het efficiënt uitrollen van Windows images binnen een organisatie.\n\nBelangrijke kenmerken:\n- Installatie en configuratie van WDS en MDT op een Windows Server\n- Creëren en beheren van Windows images voor verschillende besturingssystemen\n- Automatiseren van het deployment proces met PowerShell scripts\n- Configureren van netwerkboot (PXE) voor clientapparaten\n- Testen en valideren van de deployment processen\n\nDit project heeft me waardevolle ervaring opgeleverd in het beheren van IT-infrastructuur en het automatiseren van systeemimplementaties, wat essentieel is voor moderne IT-omgevingen."
    },
  {
    id: 11,
    title: "MS Intune Device Management",
    category: "school",
    tags: ["MS Intune", "Device Management", "Windows", "Mobile", "Security"],
    description: "Een project uit mijn eindstage MBO-4 waarbij ik MS Intune heb opgezet voor device management binnen een organisatie.",
    headerImage: new URL("./Images/Microsoft-Intune.jpg", import.meta.url).href,
    content: "In dit project heb ik Microsoft Intune geïmplementeerd voor het beheer van apparaten binnen een organisatie tijdens mijn eindstage voor MBO-4.\n\nBelangrijke kenmerken:\n- Configuratie van Microsoft Intune voor apparaatbeheer\n- Registratie en beheer van Windows- en mobiele apparaten\n- Implementatie van beveiligingsbeleid en compliance regels\n- Toewijzing van applicaties en updates aan beheerde apparaten\n- Monitoring en rapportage van apparaatstatus en naleving\n\nDit project heeft me waardevolle ervaring opgeleverd in het beheren van moderne IT-omgevingen en het waarborgen van de beveiliging van bedrijfsapparaten."
  },
  {
    id: 12,
    title: "WIndows Server 2019 opzetten",
    category: "school",
    tags: ["Windows Server 2019", "Active Directory", "DNS", "DHCP", "File Sharing"],
    description: "Een Windows Server 2019 omgeving opgezet met Active Directory, DNS, DHCP en bestandsdeling.",
    headerImage: new URL("./Images/windows2019.jpeg", import.meta.url).href,
    content: "Dit project omvat het opzetten van een Windows Server 2019 omgeving met essentiële netwerkdiensten zoals Active Directory, DNS, DHCP en bestandsdeling.\n\nBelangrijke kenmerken:\n- Installatie en configuratie van Windows Server 2019\n- Opzetten van Active Directory voor gebruikers- en groepsbeheer\n- Configuratie van DNS voor naamresolutie binnen het netwerk\n- Implementatie van DHCP voor automatische IP-adres toewijzing\n- Configuratie van bestandsdeling en toegangsrechten\n\nDe serveromgeving is ontworpen om een robuuste en efficiënte infrastructuur te bieden voor netwerkbeheer binnen een organisatie."
  },
  {    
    id: 13,
    title: "Personal AI Assistant trainen",
    category: "future",
    tags: ["Python", "AI", "Machine Learning", "Chatbot", "Voice Recognition"],
    description: "Al een tijd wil ik leren hoe ik een AI model kan trainen. Dit is mijn eerste stap daarin.",
    headerImage: new URL("./Images/personalAI.png", import.meta.url).href,
    content: "In dit project ben ik van plan om een persoonlijke AI-assistent te trainen die in staat is om natuurlijke taal te begrijpen en te reageren op gebruikersinvoer.\n\nBelangrijke kenmerken:\n- Verzamelen en voorbereiden van trainingsgegevens\n- Ontwikkelen van een machine learning model met Python\n- Implementeren van Natural Language Processing (NLP) technieken\n- Trainen en evalueren van het AI-model voor nauwkeurigheid\n- Integreren van de AI-assistent in een eenvoudige chatbot interface\n\nDit project zal me helpen om mijn vaardigheden in AI en machine learning te ontwikkelen, terwijl ik een nuttige tool creëer voor persoonlijke assistentie."
  },
]
