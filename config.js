import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "Chat GPT",
  //BotName
  inviteLink:
    "https://discord.com/api/oauth2/authorize?client_id=1094297266984063016&permissions=8&scope=bot",
  //BotInvite Link
  Features: [
    {
      name: "Ping",
      description:
        "Ping is a command with no use, just for fun.",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "99% Uptime",
      description:
        "Uptime is a measure of system reliability, expressed as the percentage of time a machine, typically a computer.",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "Chat",
      description:
        "Chat starts a thread in the channel used in.",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "Ask",
      description:
        "Ask is a command to ask any question on your minf",
      logo: <CgCrown className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 75, //-  - Your
  memberCount: 14566, //--   - Bot
  executedCommand: 100, //--  - Stats
  availableCommand: 3, //---   - Here
  //Do not change if you don't know about them
  faceBookLogo: (
    <BsFacebook className="h-10 w-10 text-[#4267B2] hover:scale-125 easeIn cursor-pointer" />
  ),
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  youTubeLogo: (
    <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  
  


  discordLink: "https://discord.gg/r6gtBBHSTh",
  youtubeLink: "https://youtube.com/@greatlake_editz",
};

export default config;
