import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Styled from "styled-components";

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Input = Styled.input`
  padding: 10px;
  margin: 10px;
  width: 200px;
`;

const Button = Styled.button`
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
`;

const RoomEntry: React.FC = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const handleJoin = () => {
    if (roomId.trim() && username.trim()) {
      // Pass the username and room ID as state to the next route
      // history.push(`/room/${roomId}`, { username });
      history.push(`/room/${roomId}/${ username }`);
    } else {
      alert("Please enter both a username and a Room ID.");
    }
  };

  return (
    <Container>
      <h1>Enter Room Details</h1>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Username"
      />
      <Input
        type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        placeholder="Enter Room ID"
      />
      <Button onClick={handleJoin}>Join Room</Button>
    </Container>
  );
};

export default RoomEntry;



// import React, { useState } from "react";
// import { withRouter, RouteComponentProps } from "react-router-dom";
// import Styled from "styled-components";

// const Container = Styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
// `;

// const Input = Styled.input`
//   padding: 10px;
//   margin: 10px;
//   width: 200px;
// `;

// const Button = Styled.button`
//   padding: 10px 20px;
//   margin: 10px;
//   cursor: pointer;
// `;

// interface Props extends RouteComponentProps {}

// const RoomEntry: React.FC<Props> = ({ history }) => {
//   const [roomId, setRoomId] = useState("");

//   const handleJoin = () => {
//     if (roomId.trim()) {
//       history.push(`/room/${roomId}`);
//     }
//   };

//   return (
//     <Container>
//       <h1>Enter Room ID</h1>
//       <Input
//         type="text"
//         value={roomId}
//         onChange={(e) => setRoomId(e.target.value)}
//         placeholder="Enter Room ID"
//       />
//       <Button onClick={handleJoin}>Join Room</Button>
//     </Container>
//   );
// };

// export default withRouter(RoomEntry); 