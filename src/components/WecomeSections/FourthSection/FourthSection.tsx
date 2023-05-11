import './FourthSection.scss';
import { ReactSVG } from 'react-svg';
import server from '../../../assets/svg/server.svg';
import phone from '../../../assets/svg/phone.svg';

function FourthSection() {
    return <section className='fourth-section'>
        <div className='fourth-section__wrapper'>
            <div className='fourth-section__block1'>
                <h2 className='fourth-section__h2'>Get many resources <br />in a single request</h2>
                <p className='fourth-section__p'>GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request. Apps using GraphQL can be quick even on slow mobile network connections.</p>
            </div>
            <div className='fourth-section__block2'>
                <ReactSVG src={server} className="fourth-section__server" />
                <div className='fourth-section__code-wrap'>
                    <pre className='fourth-section__request'>
                        {'{'}
                        {'\n    '}
                        hero {'{'}
                        {'\n    '}
                        name 
                        {'\n    '}
                        friends {'{'}
                        {'\n        '}
                        name
                        {'\n        '}
                        {'}'}
                        {'\n    '}
                        {'}'}
                        {'\n'}
                        {'}'}
                    </pre>
                    <pre className='fourth-section__response'>
                        {'{'}
                        {'\n    '}
                        <span className='blue-code'>"hero"</span><span>:  {'{'}</span> 
                        {'\n      '}
                        <span className='blue-code'>"name"</span><span>:</span> <span className='pink-code'>"Luke Skywalker"</span><span>,</span>
                        {'\n      '}
                        <span className='blue-code'>"friends"</span><span>:  {'['}</span>
                        {'\n        '}
                        {'{'} <span className='blue-code'>"name"</span><span>:</span> <span className='pink-code'>"Obi-Wan Kenobi"</span> {'}, '}
                        {'\n        '}
                        {'{'} <span className='blue-code'>"name"</span><span>:</span> <span className='pink-code'>"R2-D2"</span> {'}, '}
                        {'\n        '}
                        {'{'} <span className='blue-code'>"name"</span><span>:</span> <span className='pink-code'>"Han Solo"</span> {'}, '}
                        {'\n        '}
                        {'{'} <span className='blue-code'>"name"</span><span>:</span> <span className='pink-code'>"Leia Organa"</span> {'}, '}
                        {'\n      '}
                        {']'}
                        {'\n    '}
                        {'}'}
                        {'\n'}
                        {'}'}
                    </pre>
                </div>
                <ReactSVG src={phone} className="fourth-section__phone" />
            </div>
        </div>
    </section>
}

export default FourthSection;