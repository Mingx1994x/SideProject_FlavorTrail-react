import { imgEventURl1, imgEventURl2 } from '../../data/imagesPath';

function EventDeliverMeals() {
  return (
    <>
      <section className="event-deliver-meals bg-primary py-18 py-lg-19 position-relative mb-19">
        <div className="container">
          <div className="row flex-column flex-lg-row gap-19 align-items-center justify-content-between">
            <div className="col-lg-4">
              <img
                className="event-deliver-meals-img img-fluid object-fit-cover"
                src={imgEventURl1}
                alt="event-picture1"
              />
            </div>
            <div className="col-lg-6">
              <img
                className="event-deliver-meals-img img-fluid object-fit-cover"
                src={imgEventURl2}
                alt="event-picture2"
              />
            </div>
          </div>
          <h2 className="event-deliver-meals-title col-9 col-sm-6 col-xl-12 text-lg-center text-nowrap text-white position-absolute">
            <div className="d-block d-lg-none">
              為街友
              <br />
              送餐，
              <br />
              傳遞愛心
              <br />
              與溫暖
            </div>
            <div className="d-none d-lg-block">為街友送餐，傳遞愛心與溫暖</div>
          </h2>
        </div>
      </section>
    </>
  );
}
export default EventDeliverMeals;
