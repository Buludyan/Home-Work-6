import preloader from '../assets/images/loader.gif'

const Preloader = () => {
    return (
        <div>
            <img src={preloader} style={{height: '10vh'}} alt={'preloader'}></img> 
        </div>
    )
};

export default Preloader;