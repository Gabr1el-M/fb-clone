import tnt from './resourcers/tnt.jpg'

export default function FeedPosts(props) {
    return (
        <div className='feedPosts'>

            <div className='feedPostSingle'>
                <div className='feedPost_profile'>
                    <img src={tnt} alt="minha foto" />
                    <h3>{props.name}<p><span>{props.time}</span></p></h3>
                </div>

                <div className='feedPost_content'>
                    <p>{props.conteudo}<br />
                        <a href="https://www.youtube.com/watch?v=Yd6pt7OcB1U&t=5s" target="_blank" rel="external">Link</a> </p>
                    <img src="https://s2.glbimg.com/HJpk7EwRelriTBfv31rNoi4mIdQ=/0x0:1360x712/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/V/v/WPbTXKTtChSEBGZf05cw/assistir-real-madrid-x-liverpool-ao-vivo-champions-league-transmissao.jpeg"
                        alt="real madrid vs liverpool" />
                </div>
            </div>
        </div>);
}