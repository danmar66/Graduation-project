import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from "../store/action-creators/"


export const useActions = () => {
    const dispath = useDispatch()
    return bindActionCreators(ActionCreators, dispath)
}