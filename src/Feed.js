import { AiOutlineVideoCamera, AiOutlineFileImage, AiOutlineMeh } from "react-icons/ai";
import photo from './resourcers/photo.jpg';

export default function Feed() {
    return (
        <div className='feed'>
            <div className='feed-form'>
                <img src={photo} alt="minha foto"/>
                <input type='text' placeholder='No que você está pensando, Gabriel ?' />
            </div>
            <div className='feed-icons'>
                <div className='iconSingle'>
                    < AiOutlineVideoCamera />
                    <span>Video ao vivo</span>
                </div>
                <div className='iconSingle img'>
                    < AiOutlineFileImage />
                    <span>Foto/Video</span>
                </div>
                <div className='iconSingle emoji'>
                    < AiOutlineMeh />
                    <span>Atividade</span>
                </div>
            </div>
        </div>
    );
}