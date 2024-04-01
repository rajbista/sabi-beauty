const Callout = () => {
  return (
    <div className="container">
      <div className="callout callout--primary callout-signup">
        <div className="grid grid--1x2">
          <div className="callout__content">
            <h2 className="callout__heading">Ready to make an Appointment?</h2>
            <p>
              Call us: (331) 385-8356
              <a href="tel:331-385-8356" />
            </p>
          </div>
          <a href="tel:331-385-8356" className="btn btn--accent btn--stretched">
            Get Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Callout;
