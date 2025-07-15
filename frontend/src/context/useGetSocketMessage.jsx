import { useSocketContext } from "./socketContext"

function useGetSocket() {
    const {hi}=useSocketContext()
    const {messages,setMessage}=useConversation
    
    return(
        <div>

        </div>
    )
}

export default useGetSocket