import { useDispatch } from 'react-redux';
import { ADD_SPEECH, CLEAR_SPEECH } from '../redux/modules/speechBubbleSlice';

const useSpeech = (speechArray: string[]) => {
    const dispatch = useDispatch();

    let timerSpeechId: NodeJS.Timeout;

    const speechEvent = () => {
        const randomIndex = Math.floor(Math.random() * speechArray.length);
        const selectedSpeech = speechArray[randomIndex];
        dispatch(ADD_SPEECH(selectedSpeech));
        if (timerSpeechId) {
            clearTimeout(timerSpeechId);
        }
        timerSpeechId = setTimeout(() => {
            dispatch(CLEAR_SPEECH());
        }, 3000);
    };

    return { speechEvent };
};

export default useSpeech;
