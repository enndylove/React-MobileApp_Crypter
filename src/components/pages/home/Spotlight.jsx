import SpotBlocks from '../../UI/pages/home/Spotblocks';

const Spotlight = () => {
    return (
        <section className="section spotlight default-padding">
            <div className="spotlight__text-content">
                <h3 className="spotlight__title color-white font-h3">
                    Spotlight.
                </h3>
                <p className="spotlight__text-info font-body1">
                    Projects you'll love
                </p>
                <div className="spotlight__tag-block d-flex w-100 flex-nowrap overflow-auto">
                    <div className="spotlight__tag-content active font-base">
                        1 days
                    </div>
                    <div className="spotlight__tag-content font-base">
                        7 days
                    </div>
                    <div className="spotlight__tag-content font-base">
                        30 days
                    </div>
                </div>
            </div>
            <SpotBlocks />
            <div className="spotlight__btn-wrapper d-flex justify-content-center">

                <a href="#" className="auction__text-btn font-button">
                    explorer more
                    <span className="auction__btn-list font-button">
                        109
                    </span>
                </a> 

            </div>
        </section>
    );
};

setTimeout(() => {
    let spotlightTag
    spotlightTag = document.querySelectorAll('.spotlight__tag-content');

    // tags-target
    spotlightTag.forEach(item => {
        item.addEventListener('click', () => {
            let activeTag = document.querySelector('.spotlight__tag-content.active');
            if(!item.classList.contains('active')) {
                activeTag.classList.remove('active');
                item.classList.add('active');
            }
        })
    })
}, 1000);

export default Spotlight