import photo from './resourcers/photo.jpg';
import photo2 from './resourcers/photo2.jpg';
import photo3 from './resourcers/photo3.jpg';
import photo4 from './resourcers/photo4.jpg';
import photo5 from './resourcers/photo5.jpg';

export default function Stories() {
  return (
    <div className='stories'>
      <div className='storiesCard' style={{ backgroundImage: `url(${photo})` }}>
        <p>Gabriel Martins</p>
      </div>
      <div className='storiesCard' style={{ backgroundImage: `url(${photo2})` }}>
        <p>Emily Silva</p>
      </div>
      <div className='storiesCard' style={{ backgroundImage: `url(${photo3})` }}>
        <p>Vinicius Henrique</p>
      </div>
      <div className='storiesCard' style={{ backgroundImage: `url(${photo4})` }}>
        <p>Jeder Ferreira</p>
      </div>
      <div className='storiesCard' style={{ backgroundImage: `url(${photo5})` }}>
        <p>Hosana Martins</p>
      </div>
    </div>
  );
}