
function Box(props) {
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">{props.priceCard.plan}</h5>
          <h6 class="card-price text-center">${props.priceCard.cost}<span class="period">/{props.priceCard.duration}</span></h6>
          <hr></hr>
          <ul class="fa-ul">
            {
              props.priceCard.features.map((feature) => {
                return <li className={`${feature.textMute ? 'text-muted': ''} ${feature.textBold ? 'fw-bold' : ''}`}>
                <span class="fa-li"><i className={`${feature.isCheck ? 'fa fa-check' : 'fa fa-times'}`}></i></span>
                <strong>{feature.limit}</strong> {feature.name}</li>
              })
            }
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
