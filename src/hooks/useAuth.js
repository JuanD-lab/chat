import { useSelector, useDispatch } from "react-redux";
import { logout, login, register } from '../Redux/actions/auth'

export const useAuth = () => {

    const { access, user } = useSelector(state => state.auth)
    const message = useSelector(state => state.message.message)

    const dispatch = useDispatch()
    const disconnect = () => dispatch(logout())
    const loginData = user => dispatch(login(user))
    const signin = user => dispatch(register(user))

    return { access, user, message, disconnect, loginData, signin }
}