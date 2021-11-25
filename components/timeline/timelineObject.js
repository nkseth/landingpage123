import { BiMessageDetail } from "react-icons/bi";
import { MdSend } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
const timelineObject = () => {
  const objectData = [
    {
      icon: BiMessageDetail,
      desc: "Send Message",
      color: "#FF8A8A",
      shadow: "0px 0px 3px 2px rgba(255,138,138,0.85)",
    },
    {
      icon: MdSend,
      desc: "Send Message to Chatsight API",
      color: "#8A9CFF",
      shadow: "0px 0px 3px 2px rgba(138,156,255,0.85)",
    },
    {
      icon: IoFilter,
      desc: "GPT-3 AI Filters the Message",
      color: "#2F89CE",
      shadow: "0px 0px 3px 2px rgba(47,137,206,0.85)",
    },
    {
      icon: BiMessageDetail,
      desc: "Chatsight Tells Server is Message is Safe",
      color: "#9147FF",
      shadow: " 0px 0px 3px 2px rgba(145,71,255,0.85)",
    },
    {
      icon: BiMessageDetail,
      desc: "Post Message",
      color: "#6ED2Ac",
      shadow: " 0px 0px 3px 2px rgba(110,210,172,0.85)",
    },
  ];
  return (
    <div
      style={{
        position: "relative",
        padding: "2rem",
      }}
    >
      <div
        style={{
          width: "4px",
          height: "400px",
          backgroundColor: "#E0E0E0",
          position: "absolute",
          left: "9px",
          top: "70px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        {objectData.map((item, index) => {
          return (
            <>
              <div
                className="timeline-object"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "1.5rem 0",
                }}
                key={index}
              >
                <div
                  className="timeline-circle"
                  style={{
                    width: "1.4rem",
                    height: "1.4rem",
                    backgroundColor: `${item.color}`,
                    boxShadow: `${item.shadow}`,
                    borderRadius: "50%",
                    marginRight: "1rem",
                    position: "absolute",
                    left: 0,
                  }}
                ></div>
                <div
                  className="timeline-content"
                  style={{
                    backgroundColor: `${item.color}`,
                    color: "white",
                    padding: "0.7rem 1rem",
                    borderRadius: "40px",
                    marginLeft: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "1rem",
                    }}
                  >
                    <item.icon style={{ color: `${item.color}` }} />
                  </div>
                  {item.desc}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default timelineObject;
