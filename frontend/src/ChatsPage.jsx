import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('22bbefac-4d5d-4a4f-ae95-49c64181c2e3', props.user.username, props.user.secret);
    return( 
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100vh'}}/>
    </div>
    )
  };
  export default ChatsPage;