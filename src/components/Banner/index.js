const Banner = ({src, heading}) => {
    return (
        <div style={{ position: "relative" }}>
            <img
              src={src}
              alt="logo"
              style={{
                marginTop: "5%",
                height: "170px",
                width: "100%",
                objectFit: "cover",
                filter: "contrast(60%)",
              }}
            />
            <div
              className="position-absolute top-50 start-50 translate-middle text-center "
              style={{ background: "none" }}
            >
              <h3 style={{ background: "none", fontSize: "50px" }}>{heading}</h3>
            </div>
          </div>
    )
};

export default Banner;